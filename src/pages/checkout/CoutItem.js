import React, { useContext } from 'react'
import './checkout-item.styles.scss'
import { Context } from '../../context/renderToogleContext'

const CheckOutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item
  const { clearItemFromCart, addItems,removeItemFromCart } = useContext(Context)
  console.log(imageUrl)
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItemFromCart(item)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItems(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItemFromCart(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  )
}

export default CheckOutItem
