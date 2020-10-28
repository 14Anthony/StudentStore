import React from 'react'
// make sure to check to see if you imported each of the specific components you need.
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/LoginHandler/LoginHandler';
import HomePage from './pages/homePage'
import productPage from './pages/productPage'
import AdminPage from "./pages/AdminPage"

// I deleted the HomePage tag, and imported route, given the path = "tosomepath"  it will render component={pulling in somecomponent}  then make sure you have "exact" path. if you are
const App = () => {

 

  return (
    <Router>

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
            path='/LOGIN'
            component={Login}
            exact />

          {/* <Route
            path='/'
            component={}
            exact />

          <Route
            path='/'
            component={}
            exact />  */}
        </Container>
        
      </main>
      <Footer />
    </Router>
  );
}

export default App;
