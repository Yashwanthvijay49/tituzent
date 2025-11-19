import { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-base-1">
      <Navbar />
      <main className="pt-28">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

