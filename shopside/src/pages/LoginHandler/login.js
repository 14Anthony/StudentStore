import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import "../../components/style/login.css"
import API from '../../utils/API'
// import Content fr


const setUser = (userCred)=>{

  

  return userCred;
}
const getUser = () =>{
    return setUser();
}

const checkUser = (user) =>{
    API.login(user)
    .then(res => setUser(res))
    .catch(err => console.log(err))
}


function Login() {

  // const [useUser, setUser] = useState({
  //   exists: false,
  // });

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

              <LinkContainer to='/signup.js'>
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
