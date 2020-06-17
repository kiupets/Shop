import React, { useContext } from 'react'
import './checkout.styles.scss'
import { Context } from '../../context/renderToogleContext'
import { cartItemSelector, CartItemsPriceReducer } from './selectors.reselect'
import CheckOutItem from './CoutItem'

const CheckOut = () => {
  const { state } = useContext(Context)
  const cartItems = cartItemSelector(state)
  const itemsTotalPrice = CartItemsPriceReducer(state)
  console.log(itemsTotalPrice)
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
  )
}

export default CheckOut
