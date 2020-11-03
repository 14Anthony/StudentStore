
import React, { useState } from "react";
import "../../components/style/login.css"
// import Content from "../components/Content";

function SignUp() {
  const [userCred, setUser] = useState({
    firstName: '',
    lastName:'',
    email:'',
    userName:'',
    password:'',
    amdin:''
  });


  const addUser = () =>{
    console.log(userCred);
  }

  const onChangeHandler = (e) =>{
    setUser({
      ...userCred, 
      [e.target.name]: e.target.value
    });
  }
  return (
    <div>
    <div className = 'container'>
    </div>
     <div className = 'container'>
      <div className = 'row'>
        <div className = 'col login'>
          <div className = 'card login'>
          <p>First Name</p>
          <input name = 'firstName' onChange ={onChangeHandler}></input>
          <p>Last Name</p>
          <input name = 'lastName' onChange ={onChangeHandler}></input>
          <p>Email</p>
          <input name = 'email' onChange ={onChangeHandler}></input>
          <p>User Name</p>
          <input name = 'userName' onChange ={onChangeHandler}></input>
          <p> Password</p>
          <input name = 'password' onChange ={onChangeHandler}></input>
          </div>
          <button className = "submit" onClick= {addUser}>Submit</button>
        </div>
      </div>

     </div>
    </div>
  );
}

export default SignUp;
