import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/login';
import HomePage from './pages/homePage'

const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3' >
        <Container>
          <HomePage />
        </Container>
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
