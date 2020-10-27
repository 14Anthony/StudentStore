import React from "react";
import "../../components/style/login.css"
// import Content from "../components/Content";

function SignUp() {
  return (
    <div>
    <div className = 'container'>
    </div>
     <div className = 'container'>
      <div className = 'row'>
        <div className = 'col login'>
          <div className = 'card login'>
          <p>First Name</p>
          <input></input>
          <p>Last Name</p>
          <input></input>
          <p>Email</p>
          <input></input>
          <p>User Name</p>
          <input></input>
          <p> Password</p>
          <input></input>
          </div>
          <button className = "submit">Submit</button>
        </div>
      </div>

     </div>
    </div>
  );
}

export default SignUp;
