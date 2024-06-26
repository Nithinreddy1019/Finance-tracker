import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { RecoilRoot } from 'recoil'
import { CookiesProvider } from 'react-cookie'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </GoogleOAuthProvider>
      </BrowserRouter>
      </CookiesProvider>
  </React.StrictMode>,
)
