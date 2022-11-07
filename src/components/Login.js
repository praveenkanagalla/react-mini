import React from "react";
import { useState } from 'react';

function Login({ setModalOpenLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    const loginDetails = JSON.parse(localStorage.getItem('loginDetails') || "[]");
    const login = { eamil:email, password:password };  
    loginDetails.push(login);

    console.log('loginDetails',JSON.stringify(loginDetails));
    localStorage.setItem('loginDetails',JSON.stringify(loginDetails));
    setModalOpenLogin(false);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer login__Container">
        <div className="titleCloseBtn">
          <button onClick={() => { setModalOpenLogin(false);}}>X</button>
        </div>
        <div className='new-article'>
          <h2 className='Article__heading'>Login Here...</h2>
          <form>
                <input className='login__input' type="name" name="name" placeholder="Email id" required value={email} onChange={(e) => setEmail(e.target.value)} />            
                <input className='login__input' type="name" name="name" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />                      
            <input className='article__submit' type="button" value="Login" onClick={handleLoginClick} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;