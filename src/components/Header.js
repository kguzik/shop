import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header(props){
  return (
    <>
      <header className="header">
        <nav>
          <ul className="header__menu--left">
            <li>
              <Link to="/" className="header__shop-name">{props.shopName}</Link>
            </li>
          </ul>
          <ul className="header__menu--right">
            <li>
              <Link to="/products/jackets" className="header__links">jackets</Link>
            </li>
            <li>
              <Link to="/products/coats" className="header__links">coats</Link>
            </li>
            <li>
              <Link to="/shopping-cart" className="header__links"><ShoppingCartIcon/></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;