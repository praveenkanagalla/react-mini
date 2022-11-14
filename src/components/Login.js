import React from "react";
import { useState, useRef, useEffect } from 'react';

function Login({ setOpenModalLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    const loginDetails = JSON.parse(localStorage.getItem('loginDetails') || "[]");
    const login = { eamil:email, password:password };  
    loginDetails.push(login);

    console.log('loginDetails',JSON.stringify(loginDetails));
    localStorage.setItem('loginDetails',JSON.stringify(loginDetails));
    setOpenModalLogin(false);
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpenModalLogin(false); 
      }      
    };
    document.addEventListener("mousedown", handler);    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });


  return (
    <div className="modalBackground login__background">
      <div className="modalContainer login__Container" ref={menuRef}>
        <div className="titleCloseBtn">
          <button onClick={() => { setOpenModalLogin(false);}}>X</button>
        </div>
        <div className='new-article'>
          <h2 className='Article__heading'>Login Here...</h2>
          <form>
                <input className='login__input' type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required="required" />            
                <input className='login__input' type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required="required" />                      
            <input className='article__submit' type="button" value="Login" onClick={handleLoginClick} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;