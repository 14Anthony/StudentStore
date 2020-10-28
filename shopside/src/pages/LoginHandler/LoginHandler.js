import React from 'react';
import Login from "./login";
import SignUp from "./signup";
import Home from "../../pages/homePage"
// import "../../components/style/login.css"
const LoginHandler = (props) => {
    const loggedIn = true;
    // if user exists show login if user does not exist sent them to the login form
    // if (x){
    //     return <Login />
    // }
    // return <SignUp />

    switch(loggedIn){
        case true: return <Home />
        break;
        case false: return <SignUp />
        break;
        default: return <Login />
    }
}

export default LoginHandler;
