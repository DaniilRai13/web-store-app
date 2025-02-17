import React, { useEffect, useState } from 'react'
import cls from './Product.module.css'
import { ROUTES } from '../../../utils/routes'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../../features/user/userSlice'


const ProductCart = (item) => {
  
  const dispatch = useDispatch()

  const SIZES = [4, 4.5, 5]
  const { title, price, images, description } = item

  const [currentImg, setCurrentImg] = useState()
  const [currentSize, setCurrentSize] = useState()

  useEffect(() => {
    if (!images.length) return
    setCurrentImg(images[0] || images[0].split('').slice(2, images[0].length - 2).join(''))
  }, [images])

  const addToCart = ()=>{
    dispatch(addItemToCart({...item, currentSize}))
  }

  return (
    <section className={cls.product}>
      <div className={cls.images}>
        <div
          className={cls.current}
          style={{ backgroundImage: `url(${currentImg})` }}
        />
        <div className={cls["images-list"]}>
          {images.map((image, i) => (
            <div
              key={i}
              className={cls.image}
              style={{ backgroundImage: `url(${image})` }}
              onClick={() => { setCurrentImg(image) }}
            />
          ))}
        </div>
      </div>
      <div className={cls.info}>
        <h1 className={cls.title}>{title}</h1>
        <div className={cls.price}>{price}$</div>
        <div className={cls.color}>
          <span>Color:</span> Green
        </div>
        <div className={cls.sizes}>
          <span>Sizes:</span>

          <div className={cls.list}>
            {SIZES.map((size) => (
              <div
                onClick={() => {
                  setCurrentSize(size)
                }}
                className={`${cls.size} ${currentSize === size ? cls.active : ""
                  }`}
                key={size}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        <p className={cls.description}>{description}</p>

        <div className={cls.actions}>
          <button
            onClick={addToCart}
            className={cls.add}
            disabled={!currentSize}
          >
            Add to cart
          </button>
          <button className={cls.favourite}>Add to favourites</button>
        </div>

        <div className={cls.bottom}>
          <div className={cls.purchase}>19 people purchased</div>

          <Link to={ROUTES.HOME}>Return to store</Link>
        </div>
      </div>
    </section>
  )
}

export default ProductCart