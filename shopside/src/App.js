import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h3>
            Welcome to storeFront
        </h3>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
