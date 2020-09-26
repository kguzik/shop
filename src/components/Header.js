import React from 'react';

function Header(props){
  return (
    <>
      <header className="header">
        <a href="/" className="header__shop-name">{props.shopName}</a>
      </header>
    </>
  )
}

export default Header;