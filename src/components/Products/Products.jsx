import React from 'react'
import cls from './Products.module.css'
import ProductItem from './Product/ProductItem'

const Products = ({ title, style = {}, products = [], amount }) => {
  const list = products.slice(0, amount)

  return (
    <section className={cls.products}>
      {title && <h2>{title}</h2>}
      <div className={cls.list}>
        {list.map((item) =>
          <ProductItem key={item.id} item={item}/>
        )}
      </div>
    </section >
  )
}

export default Products