import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { AdmRoutes } from './adm.routes'
import { useAuth } from '../hooks/auth'
import { useAuthAdm } from '../hooks/authAdm'

export function Routes() {
  const { user } = useAuth()
  const { adm } = useAuthAdm()
    if (user) {
      return (
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      )
    } else if (adm) {
      return (
        <BrowserRouter>
          <AdmRoutes />
        </BrowserRouter>
      )
  } else {
    return (
      <BrowserRouter>
        <AuthRoutes />
      </BrowserRouter>
    )
  }
  
}