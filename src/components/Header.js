import React from 'react';
import logo from '../images/logo.svg';

const Header = () => {
  return (
    <header className="header">
        <img className="logo header__logo" src={logo} alt="Место" />
    </header>
  );
}
  
export default Header;