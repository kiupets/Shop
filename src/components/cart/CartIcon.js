import React, { useContext } from 'react'
import { Context } from '../../context/renderToogleContext'
import {CartItemsSelector} from './cart.utils'

import { ReactComponent as ShoppingIcon } from './cart-icon.svg'
import './cart-icon.styles.scss'
const CartIcon = ({ setHidden }) => {
  const { state } = useContext(Context)
  const totalItems = CartItemsSelector(state)
  return (
    <div className="cart-icon" onClick={setHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalItems}</span>
    </div>
  )
}

export default CartIcon
