
import React, { useState } from "react";
import "../../components/style/login.css"
import API from '../../utils/API'
// import Content from "../components/Content";

function SignUp() {
  const [userCred, setUser] = useState({
    name: '',
    email: '',
    password: '',
    isAdmin: ""

  });

  const resetUser =()=>{
    setUser({
      name: '',
      email: '',
      password: '',
      isAdmin: ''
    })
  }

  const addUser = (e) => {
    e.preventDefault();
    let userArr= [userCred]; 
    // userArr = userArr.push(userCred)
    console.log(userArr);
    API.addUser(userArr).then(()=>{
      localStorage.setItem('loggedIn', 'true');
    })
    
  }

  const getUser = () => {
    console.log(userCred);
   
  }
  const onChangeHandler = (e) => {
    setUser({
      ...userCred,
      [e.target.name]: e.target.value
    });
  }
  return (
    <div>
      <div className='container'>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col login'>
            <div className='card login'>
              <p>Full Name</p>
              <input name='name' onChange={onChangeHandler}></input>
              <p>Email</p>
              <input name='email' onChange={onChangeHandler}></input>
              <p>Password</p>
              <input name='password' onChange={onChangeHandler}></input>
              <p>Shop Owner</p>
              <div className='row'>
                <div className='col-sm-2'>
              <p>Yes</p>
                  <input type="radio" name='isAdmin' value = "yes" onChange={onChangeHandler}></input>
                </div>
                <div className='col'>
              <p>No</p>
                  <input type="radio" name='isAdmin' value = 'no' onChange={onChangeHandler}></input>
                </div>
              </div>
             <div>
              {(userCred.isAdmin === 'yes' ? 
              <>
              <p>What is your stores name?</p>
               <input name='storeName' onChange={onChangeHandler}></input>
               </> 
               :<p></p>)}
             
             </div>
            </div>
            <button className="submit" onClick={addUser}>Submit</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
