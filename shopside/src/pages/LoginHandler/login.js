import React from "react";
import "../../components/style/login.css"
import API from '../../utils/API'
// import Content fr


const setUser = (userCred)=>{
  
  return userCred;
}
const useUser = () =>{
  
}

const checkUser = (user) =>{
    API.login(user)
    .then(res => setUser(res))
    .catch(err => console.log(err))
}


function Login() {
  return (
    <div>
    <div className = 'container'>
    </div>
     <div className = 'container'>
      <div className = 'row'>
        <div className = 'col login'>
          <div className = 'card login'>
          <p>User Name</p>
          <input></input>
          <p> Password</p>
          <input type = "password"></input>
          </div>
          <button className = "submit">Submit</button>
        </div>
        <div className = 'col login'>
          <div className = 'card login'>
            <div className = 'card-body'>
              <div className = 'card-title'>


          <a href= "#"> Click here if you need to sign up</a>
              </div>
            </div>
          </div>
        </div>
      </div>

     </div>
    </div>
  );
}

export default Login;
