import React from 'react'
import cls from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './CartItem/CartItem'
import { sumBy } from '../../utils/common'
import { addItemToCart, removeItemFromCart } from '../../features/user/userSlice'

const Cart = () => {
  const { cart } = useSelector(({ user }) => user)
  const dispatch = useDispatch()

  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }))
  }

  const removeItem = (id) => {
    dispatch(removeItemFromCart(id))
  }

  return (
    <section className={cls.cart}>
      <h2 className={cls.title}>Your cart</h2>

      {!cart.length ? (
        <div className={cls.empty}>Here is empty</div>
      ) : (
        <>
          <div className={cls.list}>
            {cart.map((item) => <CartItem key={`${item.id}${item.currentSize}`} removeItem={removeItem} changeQuantity={changeQuantity} item={item} />)}
          </div>

          <div className={cls.actions}>
            <div className={cls.total}>
              TOTAL PRICE:{" "}
              <span>
                {sumBy(cart.map(({ quantity, price }) => quantity * price))}$
              </span>
            </div>

            <button className={cls.proceed}>Proceed to checkout</button>
          </div>
        </>
      )}
    </section>
  )
}

export default Cart