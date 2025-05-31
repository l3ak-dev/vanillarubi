import './i18n';
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
