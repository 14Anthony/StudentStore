import React from "react";
import "../components/style/login.css"
// import Content from "../components/Content";

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
          <input></input>
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
