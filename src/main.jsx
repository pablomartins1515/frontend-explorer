import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'
import { AuthProviderAdm } from './hooks/authAdm'
import { InputProvider } from './hooks/input'
import { StatePageProvider } from './hooks/statePage'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <AuthProviderAdm>
          <InputProvider>
            <StatePageProvider>
              <Routes />
            </StatePageProvider>
          </InputProvider>
        </AuthProviderAdm>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode >
)
