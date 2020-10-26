import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/homePage'

// I deleted the HomePage tag, and imported route, given the path = "tosomepath"  it will render component={pulling in the component}  then make sure you have exact path. if you are
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
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
