import React , {useState}from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import "../../components/style/login.css"
import API from '../../utils/API'
// import Content fr




function Login() {

  // const [useUser, setUser] = useState({
  //   exists: false,
  // });

  const [login, setLogin] = useState({
    email: '',
    password: ''
  });

  const onChange =(e) =>{
    setLogin({
      ...login, 
      [e.target.name]: e.target.value
    });
  }
  const checkUser=(input)=>{
    console.log('clicked');
    API.getUser();
  }

  const submitLogin = () =>{
      checkUser(login)
  }

  return (
    <div>
    <div className = 'container'>
    </div>
     <div className = 'container'>
      <div className = 'row'>
        <div className = 'col login'>
          <div className = 'card login'>
          <p>Email</p>
          <input name = 'email' onChange={onChange}></input>
          <p> Password</p>
          <input type = "password" name = 'password' onChange= {onChange} ></input>
          </div>
          <button className = "submit" onClick = {submitLogin}>Submit</button>
        </div>
        <div className = 'col login'>
          <div className = 'card login'>
            <div className = 'card-body'>
              <div className = 'card-title'>

              <LinkContainer to='/signup'>
                                <Nav.Link ><i className='fas fa-user'></i>Click Here If You Need To Create A User</Nav.Link>
              </LinkContainer>
        
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
