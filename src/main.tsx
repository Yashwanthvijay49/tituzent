import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import '../tailwind.css'
import logo from './assets/images/logo.png'

const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (favicon) {
  favicon.href = logo
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

