import { set } from "mongoose";
import React, {useState} from "react";
import "../../components/style/login.css"
import API from '../../utils/API'
// import Content from "../components/Content";

function SignUp() {
  // const [useUser, setUser] = useState({
  //   exists: false,
  // });

  const [userState, setNewUser] = useState({
        userStatus: '',
        firstName: '',
        lastName:'',
        email: '',
        userName: '',
        pswd:''
  });



  const handleInputChange= (e) =>{
    setNewUser({...userState, [e.target.name]:e.target.value})
  }
  function addUser(){
    API.addUser(userState);
    console.log(userState);
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
          <input name= {"firstName"} onChange={handleInputChange}></input>
          <p>Last Name</p>
          <input name= {"lastName"} onChange={handleInputChange}></input>
          <p>Email</p>
          <input name = {"email"} onChange={handleInputChange}></input>
          <p>User Name</p>
          <input name = {"userName"} onChange={handleInputChange}></input>
          <p> Password</p>
          <input type='password' name = {"pswd"} onChange={handleInputChange}></input>
          </div>
          <button className = "submit" onClick = {addUser}>Submit</button>
        </div>
      </div>

     </div>
    </div>
  );
}

export default SignUp;
