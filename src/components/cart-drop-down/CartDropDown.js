import React, { useContext } from 'react'
import CustomButton from '../custom-button/CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/CartItem'
import { Context } from '../../context/renderToogleContext'
import { cartItemSelector } from '../cart/cart.utils'
import CheckOut from '../../pages/checkout/CheckOut'
import { withRouter } from 'react-router-dom'

const CartDropDown = ({ history }) => {
  const { state, setToggle } = useContext(Context)

  const items = cartItemSelector(state).map((item) => (
    <CartItem key={item.id} item={item} />
  ))
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items
        ) : (
          <span className="empty-message">Your Cart is Empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkOut')
          setToggle()
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  )
}

export default withRouter(CartDropDown)
