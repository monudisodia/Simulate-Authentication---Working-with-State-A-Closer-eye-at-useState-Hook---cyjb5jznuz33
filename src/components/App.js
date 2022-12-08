import React, { useEffect, useState } from "react";
import "../styles/App.css";
import User from "../models/user";

const App = () => {
 
  const [val,setVal] = useState({
    name: '',
    email: '',
    password: '',
    conPass: '',
  });

  const [status,setStatus] = useState(false);
  const[loginStatus,setLoginStatus] = useState(false);

  const clickHandler = ((e)=>{
    e.persist();
   const {name,value} = e.target;
   setVal((prev)=>{
    if(name === 'signupName'){
      return {
      name: value,
      email: prev.email,
      password: prev.password,
      conPass: prev.conPass
      }
    }else if(name === 'signupEmail'){
      return {
      name: prev.name,
      email: value,
      password: prev.password,
      conPass: prev.conPass
      }
    }else if(name == 'signupPassword'){
      return {
      name: prev.name,
      email: prev.email,
      password: value,
      conPass: prev.conPass
      }
    }else if(name == 'signupConfirmPassword'){
      return {
      name: prev.name,
      email: prev.email,
      password: prev.password,
      conPass: value,
      }
    }
   })
  })
 const [print,setPrint] = useState({
   pName:'',
   pEmail:'',
   pPassword:'',
 })
 const [log,setLog] = useState({
  email:'',
  password:''
 })
  const signup = ((e) =>{
   
   // e.preventDefault();

    setPrint(()=>{
      return{
      pName: val.name,
      pEmail:val.email,
      pPassword:val.password,
    }
    })
    if(val.password === val.conPass){
     // console.log(val.password)
      setStatus(true);
    }
  })
  const loginHandler=((e)=>{
    const {name,value} = e.target;
    setLog((prev)=>{
      if(name === 'loginEmail'){
        return{
          email:value,
          password:prev.password
        }
      }else  if(name === 'loginPassword'){
        return{
          email:prev.email,
          password:value
        }
      }
    
    })
  })
  const login=(()=>{
     if(val.email == log.email && val.password == log.password ){
       setLoginStatus(true)
     }
  })
  const logout = (()=>{
    setLoginStatus(false)
    setStatus(false)
  })
 
  return (
    <div id="main">
      
      <table id="all-users">
      <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
          {status  ?
          <tr>
            <td>{print.pName}</td>
            <td>{print.pEmail}</td>
            <td>{print.pPassword}</td>
          </tr>:''
          }
        </tbody>
      </table>
    
    {loginStatus == false ?
      <div>
        <form className="signup-form">
          <label htmlFor="name">Name</label>
          <input type="text" name="signupName" id="signupName" onChange={clickHandler}/>
          <label htmlFor="email">Email</label>
          <input type="email" name="signupEmail" id="signupEmail" onChange= {clickHandler} />
          <label htmlFor="password">Password</label>
          <input type="password" name="signupPassword" id="signupPassword" onChange={clickHandler} />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="signupConfirmPassword"
            id="signupConfirmPassword"
            onChange={clickHandler}
          />
        </form>
        <button id="signup-button" onClick={signup}>Signup</button>
        <form className="login-styles">
          <label htmlFor="loginEmail">Email</label>
          <input id="loginEmail" name="loginEmail" type="email"  onChange={loginHandler}/>
          <label htmlFor="loginPassword">Password</label>
          <input id="loginPassword" name="loginPassword" type="password"  onChange={loginHandler}/>
        </form>
        <button id="login-button" onClick={login}>Login</button>
      </div> : ''
}
    
    {loginStatus ?
      <div>
        <h3 id="username">{val.name}</h3>
        <h3 id="email">{log.email}</h3>
        <button id="logout-button" onClick={logout}>Logout</button>
      </div> : ''
   }
    </div>
  );
};

export default App;
