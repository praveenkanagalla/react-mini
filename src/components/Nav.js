import React from 'react';
import { useState } from "react";
import Modal from './Modal';
import Login from './Login';

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenLogin, setModalOpenLogin] = useState(false);

  return (
    <nav className='App-header'>
      <a herf="/" className='logo'>SamvidDhi</a>
      <div className='nav__menu'>
        <button className="openModalBtn nav__item" onClick={() => { setModalOpen(true);}}>New Article</button> 
      </div>
      <div className="login__content">
        <button className="nav__item" onClick={() => { setModalOpenLogin(true);}}>Log In</button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {modalOpenLogin && <Login setOpenModal={setModalOpenLogin} />}
    </nav>
  )
}

export default Nav;