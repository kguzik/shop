import React from 'react';
import { Link } from 'react-router-dom';

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
              <Link to="/jackets" className="header__links">jackets</Link>
            </li>
            <li>
              <Link to="/coats" className="header__links">coats</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;