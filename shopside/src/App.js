import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/login';
const App = () => {
  return (
    <div>
      <Header />
      <main className='py-3' >
        <Container>
          <h3>
            Welcome to storeFront
        </h3>
        </Container>
        <Login />
      </main>
      <Footer />
    </div>
  );
}

export default App;
