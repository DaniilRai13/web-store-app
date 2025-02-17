import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import { ROUTES } from '../../utils/routes'
import SingleProduct from '../SingleProduct/SingleProduct'
import UserSingupForm from '../User/UserSingupForm'
import Profile from '../Profile/Profile'
import SingleCategory from '../Categories/SingleCategory'
import Cart from '../Cart/Cart'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />} />
      <Route path={ROUTES.USER} element={<UserSingupForm />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.PROFILE} element={<Profile />} />
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />} />
    </Routes>
  )
}

export default AppRoutes