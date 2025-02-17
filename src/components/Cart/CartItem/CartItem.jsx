import React from 'react'
import cls from '../Cart.module.css'
const CartItem = ({ changeQuantity, removeItem, item }) => {
  const { title, category, images, price, id, quantity } = item;

  return (
    <div className={cls.item} key={id}>
      <div
        className={cls.image}
        style={{ backgroundImage: `url(${images[0]})` }}
      />
      <div className={cls.info}>
        <h3 className={cls.name}>{title}</h3>
        <div className={cls.category}>{category.name}</div>
      </div>

      <div className={cls.price}>{price}$</div>

      <div className={cls.quantity}>
        <div
          className={cls.minus}
          onClick={() =>
            changeQuantity(item, Math.max(1, quantity - 1))
          }
        >
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#minus`}
            />
          </svg>
        </div>

        <span>{quantity}</span>

        <div
          className={cls.plus}
          onClick={() =>
            changeQuantity(item, Math.max(1, quantity + 1))
          }
        >
          <svg className="icon">
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#plus`}
            />
          </svg>
        </div>
      </div>
      <div className={cls.total}>{price * quantity}$</div>

      <div
        className={cls.close}
        onClick={() =>
          removeItem(item.id)
        }
      >
        <svg className="icon">
          <use
            xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
          />
        </svg>
      </div>
    </div>

  )
}

export default CartItem