import React from 'react';

function Header(props){
  return (
    <>
      <header className="header">
        <nav>
          <ul className="header__menu--left">
            <li>
              <a href="/" className="header__shop-name">{props.shopName}</a>
            </li>
          </ul>
          <ul className="header__menu--right">
            <li>
              <a href="/jackets" className="header__links">jackets</a>
            </li>
            <li>
              <a href="/coats" className="header__links">coats</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;