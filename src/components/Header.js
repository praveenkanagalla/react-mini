import React from 'react';

const Header = () => {
  return (
    <nav className='App-header'>
      <a herf="#" className='logo'>SamvidDhi</a>
      <ul className='nav__menu'>
        <li className='nav__item'>
          <a href='#' className='nav__link'>Authers</a>
        </li>
        <li className='nav__item'>
          <a href='#' className='nav__link'>New Article</a>
        </li>
      </ul>
      <div className="login__content">
        <button className="login__btn">Log In</button>
      </div>
    </nav>
  )
}
export default Header;
