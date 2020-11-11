import React, { useContext, useState } from 'react'
// make sure to check to see if you imported each of the specific components you need.
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/LoginHandler/LoginHandler';
import HomePage from './pages/homePage'
import productPage from './pages/productPage'
import Context from "./utils/context.js"
import AdminPage from "./pages/AdminPage"
import Signup from "./pages/LoginHandler/signup"
import cartContext from './utils/cartContext'
import CartPage from './pages/CartPage'
// I deleted the HomePage tag, and imported route, given the path = "tosomepath"  it will render component={pulling in somecomponent}  then make sure you have "exact" path. if you are
const App = () => {
  const { userStatus } = useContext(Context);
  const [cartItems, setCartItems] = useState([]);

  console.log(Context.userStatus);

  return (
    <Router>
      {/* <Context.Provider > */}


      <cartContext.Provider value={{ cartItems, setCartItems }}>
      <Header />
        <main className='py-3' >
          <Container>
            <Route
              path='/'
              component={HomePage}
              exact />
            {/* used the below routing patterns for future connections to the grid. */}

            <Route
              path='/product/:id'
              component={productPage}
            />

            <Route
              path='/CART'
              component={CartPage}
            />
            
            <Route
              path='/login'
              render={() => (
                <Context.Provider>
                  <Login userStatus={userStatus} />
                </Context.Provider>
              )}
              exact />

            <Route
              path='/admin'
              component={AdminPage}
              exact />

            <Route
              path="/signup"
              component={Signup}
              exact />

          </Container>

        </main>
      </cartContext.Provider>
      <Footer />
    </Router>
  );
}

export default App;
