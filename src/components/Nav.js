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
        {/* <button className='nav__item'>More Articles</button>      */}
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













// import { Link } from "react-router-dom";


// const Nav = () => {
//   return (
//     <nav className='App-header'>
//       <Link to="/" className='logo'>SamvidDhi</Link>
//       <ul className='nav__menu'>
//         <li className='nav__item'>
//           <Link to='/Comment' className='nav__link'>Authers</Link>
//         </li>
//         <li className='nav__item'>
//           <Link to='/NewArticle' className='nav__link'>New Article</Link>
//         </li>
//       </ul>
//       <div className="login__content">
//         <button className="login__btn">Log In</button>
//       </div>
//     </nav>
//   )
// }
// export default Nav;