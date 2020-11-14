import React, { useState } from "react";
// make sure to check to see if you imported each of the specific components you need.
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/LoginHandler/LoginHandler";
import Signup from "./pages/LoginHandler/signup";
import HomePage from "./pages/homePage";
import productPage from "./pages/productPage";
import Context from "./utils/context.js";
import AdminPage from "./pages/AdminPage";
import "./index.css";

// I deleted the HomePage tag, and imported route, given the path = "tosomepath"  it will render component={pulling in somecomponent}  then make sure you have "exact" path. if you are
const App = () => {
  const [userState, setState] = useState({});

  return (
    <Router>
      <Context.Provider value={{ userState, setState }}>
        <Header />

        <Route path="/" component={HomePage} exact />
        {/* used the below routing patterns for future connections to the grid. */}

        <Route path="/product/:id" component={productPage} />

        <Route
          path="/login"
          render={() => <Login userStatus={localStorage.getItem("loggedIn")} />}
        />

        <Route path="/admin" component={AdminPage} />

        <Route path="/signup" component={Signup} />

        <Footer />
      </Context.Provider>
    </Router>
  );
};

export default App;
