import { Routes, Route } from 'react-router-dom'
import { EditDesserts } from '../pages/EditDesserts'
import { EditDish } from '../pages/EditDish'
import { EditDrinks } from '../pages/EditDrinks'
import { RequestsAdm } from '../pages/RequestsAdm'
import { HomeAdm } from '../pages/HomeAdm'
import { DetailsAdm } from '../pages/DetailsAdm'
import { DetailsAdmDrinks } from '../pages/DetailsAdmDrinks'
import { DetailsAdmDesserts } from '../pages/DetailsAdmDesserts'

export function AdmRoutes() {
  return (
    <Routes>
      <Route path="/editdesserts" element={<EditDesserts />} />
      <Route path="/editdish" element={<EditDish />} />
      <Route path="/editdrinks" element={<EditDrinks />} />
      <Route path="/requestsadm" element={<RequestsAdm />} />
      <Route path="/adm" element={<HomeAdm />} />
      <Route path="/detailsadm/:id" element={<DetailsAdm />} />
      <Route path="/detailsadmdrinks/:id" element={<DetailsAdmDrinks />} />
      <Route path="/detailsadmdesserts/:id" element={<DetailsAdmDesserts />} />
    </Routes>
  )
}