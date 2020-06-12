import React, { useContext } from 'react'
import { Context } from '../../context/userContext'
import { Context as ToggleContext } from '../../context/renderToogleContext'
import './header.styles.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import CartIcon from '../cart/CartIcon'
import CartDropDown from '../cart-drop-down/CartDropDown'

const Header = () => {
  const { state } = useContext(Context)
  const { currentUser } = state
  const toggleState = useContext(ToggleContext).state
  const { setToggle } = useContext(ToggleContext)

  const { hidden } = toggleState

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/Contact">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signIn">
            Sign In
          </Link>
        )}
        <CartIcon setHidden={setToggle} />
      </div>
      {hidden ? <CartDropDown /> : null}
    </div>
  )
}

export default Header
