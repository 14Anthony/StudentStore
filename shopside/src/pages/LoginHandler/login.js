import React , {useState, useContext}from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import "../../components/style/login.css"
import API from '../../utils/API'
import Context from '../../utils/context.js'
// import Content fr




function Login() {
  
  const {userState, setState} = useContext(Context);
  console.log(userState);
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
    API.getUser(login.email, login.password).then((data)=>{
                  
      localStorage.setItem('loggedIn', data.data);
      // localStorage.setItem('admin', ) 
    console.log(data.data);
      console.log('logged in status', localStorage.getItem('loggedIn'));
  
    setState({
      userStatus: data.data
    })
  })
    
  }

  const submitLogin = (e) =>{
      e.preventDefault();
      checkUser();
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
