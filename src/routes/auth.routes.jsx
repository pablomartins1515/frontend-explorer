import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { SignInAdm } from '../pages/SignInAdm'

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/adm" element={<SignInAdm />} />
    </Routes>
  )
}