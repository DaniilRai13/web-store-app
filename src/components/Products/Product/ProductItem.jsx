import React from 'react'
import cls from '../Products.module.css'
import { Link } from 'react-router-dom'

const ProductItem = ({ item }) => {
  return (
    <>
      <Link to={`/products/${item.id}`} key={item.id} className={cls.product}>
        <div
          className={cls.image}
          style={{ backgroundImage: `url(${item.images[0].split('').slice(2, item.images[0].length - 2).join('')})` }}
        />
        <div className={cls.wrapper}>
          <h3 className={cls.title}>{item.title}</h3>
          <div className={cls.cat}>{item.cat}</div>
          <div className={cls.info}>
            <div className={cls.price}>{item.price}$</div>
            <div className={cls.oldPrice}>{Math.floor(item.price * 0.8)}$</div>

          </div>
          <div className={cls.purchases}>
            {Math.floor(Math.random() * 20 + 1)}
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProductItem