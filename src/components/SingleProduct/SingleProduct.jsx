import React, { useEffect } from 'react'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import ProductCart from '../Products/ProductCart/ProductCart'
import Products from '../Products/Products'
import { useDispatch, useSelector } from 'react-redux'
import { relatedByCategories } from '../../features/products/productsSlice'

const SingleProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()

  const { related, list } = useSelector(({ products }) => products)

  const { data, isFetching, isLoading, isSuccess } = useGetProductQuery({ id })

  useEffect(() => {
    if (!isLoading && !isFetching && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  }, [isFetching, isLoading, isSuccess, navigate])

  useEffect(() => {
    if (!data || !list.length) return
    dispatch(relatedByCategories(data.category.id))
  }, [data, dispatch, list.length])

  return (
    !data ? (<section>Loading....</section>)
      : (
        <>
          <ProductCart {...data} />
          <Products products={related} amount={5} />
        </>
      )
  )
}

export default SingleProduct