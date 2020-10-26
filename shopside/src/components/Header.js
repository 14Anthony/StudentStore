import React from 'react'
// make sure to check to see if you imported each of the specific components you need.
import { Container, Nav, Navbar } from 'react-bootstrap'

// so if you import es7  you can create arrow functions for export immediately, by typingin racfe 

const Header = () => {
    return (
        <header>

            {/* copied this off of the git hub repo and deleted drop down menus, but we can add them back if you want. */}


            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">storeFront</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {/* fontawesome for the cart, and users */}

                            <Nav.Link href="/cart"><i className='fas fa-shopping-cart'></i>CART</Nav.Link>

                            <Nav.Link href="/login"><i className='fas fa-user'></i>LOGIN</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
