import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { filteredByPrice } from '../../features/products/productsSlice'

import Poster from '../Poster/Poster'
import Products from '../Products/Products'
import Categories from '../Categories/Categories'
import Banner from '../Banner/Banner'

const Home = () => {
  const { categories, products: { list, filtered } } = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!list.length) return

    dispatch(filteredByPrice(100))

  }, [dispatch, list.length])

  return (
    <>
      <Poster />
      <Products products={list} amount={5} title='Trending' />
      <Categories categories={categories.list} amount={5} title='Worth seens' />
      <Banner />
      <Products products={filtered} amount={5} title='Less then 10$' />
    </>
  )
}

export default Home