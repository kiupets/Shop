import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <Logo  className="logo"/>
        </Link>
      </div>
      <div className="options">
          <Link className="option" to="/shop">
              Shop
          </Link>
          <Link className="option" to="/Contact">
              Contact
          </Link>
          {
            currentUser ?
            <div className='option' onClick={()=> auth.signOut()}>Sign Out</div>
            :
            <Link className='option' to='/signIn'>
              Sign In
            </Link>
          }
      </div>
     
    </div>
  );
};

export default Header;
