import React from "react";

const Context = React.createContext({
  userStatus: '',
  permissions:'',
  userName: '',
  lastName: '',
  pwd: ''
});

export default Context;
//////////////////////////////////////