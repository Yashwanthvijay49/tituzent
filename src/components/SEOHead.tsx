import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMetadata, generateBreadcrumbSchema, generateOrganizationSchema, generateWebsiteSchema } from '../utils/seo'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  breadcrumbs?: Array<{ name: string; url: string }>
  schema?: Record<string, any>
}

const SEOHead = ({ title, description, keywords, ogImage, breadcrumbs, schema }: SEOHeadProps) => {
  const location = useLocation()
  const metadata = pageMetadata[location.pathname] || pageMetadata['/']

  const finalTitle = title || metadata.title
  const finalDescription = description || metadata.description
  const finalKeywords = keywords || metadata.keywords
  const finalOgImage = ogImage || metadata.ogImage || 'https://tituzent.com/og-image.png'
  const finalBreadcrumbs = breadcrumbs || metadata.breadcrumbs
  const finalCanonical = metadata.canonical

  useEffect(() => {
    // Update document title
    document.title = finalTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name'
      let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, name)
        document.head.appendChild(tag)
      }
      tag.content = content
    }

    updateMetaTag('description', finalDescription)
    updateMetaTag('keywords', finalKeywords)
    updateMetaTag('og:title', finalTitle, true)
    updateMetaTag('og:description', finalDescription, true)
    updateMetaTag('og:image', finalOgImage, true)
    updateMetaTag('og:url', finalCanonical, true)
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:title', finalTitle, true)
    updateMetaTag('twitter:description', finalDescription, true)
    updateMetaTag('twitter:image', finalOgImage, true)

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = finalCanonical

    // Add JSON-LD schemas
    const addSchema = (schemaData: Record<string, any>) => {
      let script = document.querySelector('script[type="application/ld+json"][data-schema]') as HTMLScriptElement
      if (!script) {
        script = document.createElement('script')
        script.type = 'application/ld+json'
        script.setAttribute('data-schema', 'true')
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(schemaData)
    }

    // Add organization schema on all pages
    addSchema(generateOrganizationSchema())

    // Add breadcrumb schema if available
    if (finalBreadcrumbs && finalBreadcrumbs.length > 0) {
      const breadcrumbScript = document.createElement('script')
      breadcrumbScript.type = 'application/ld+json'
      breadcrumbScript.setAttribute('data-breadcrumb', 'true')
      breadcrumbScript.textContent = JSON.stringify(generateBreadcrumbSchema(finalBreadcrumbs))
      document.head.appendChild(breadcrumbScript)

      return () => {
        if (breadcrumbScript.parentNode) {
          breadcrumbScript.parentNode.removeChild(breadcrumbScript)
        }
      }
    }

    // Add custom schema if provided
    if (schema) {
      addSchema(schema)
    }
  }, [finalTitle, finalDescription, finalKeywords, finalOgImage, finalCanonical, finalBreadcrumbs, schema])

  return null
}

export default SEOHead
