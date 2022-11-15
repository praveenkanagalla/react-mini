import React from 'react';
import { useState } from "react";
import Modal from './Modal';
import Login from './Login';

const Nav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenLogin, setModalOpenLogin] = useState(false);

  return (
    <nav className='App-header'>
      <h2 className='logo'>SamvidDhi</h2>
      <div className='nav__menu'>
        <button className="openModalBtn nav__item" onClick={() => { setModalOpen(true);}}>New Article</button> 
      </div>
      <div className="login">
        <button className="nav__item" onClick={() => { setModalOpenLogin(true);}}>Log In</button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
      {modalOpenLogin && <Login setOpenModalLogin={setModalOpenLogin} />}
    </nav>
  )
}

export default Nav;