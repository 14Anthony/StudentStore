import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
// make sure to check to see if you imported each of the specific components you need.
import { Container, Nav, Navbar } from 'react-bootstrap'

// so if you import es7  you can create arrow functions for export immediately, by typingin racfe 

const Header = () => {
    return (
        <header>

            {/* copied this off of the git hub repo and deleted drop down menus, but we can add them back if you want. */}


            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>

                        <Navbar.Brand href="/">storeFront</Navbar.Brand>
                        {/* found how we can use the bootstrap router containers, using the link wrapping of a full container. */}
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            {/* fontawesome for the cart, and users */}

                            <LinkContainer to='/CART'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i>CART</Nav.Link>
                            </LinkContainer>


                            {(localStorage.getItem('loggedIn') === 'true' ?
                                <LinkContainer to='/'>
                                    <Nav.Link onClick={() => {
                                        localStorage.setItem('loggedIn', '');
                                        localStorage.setItem('admin', '')
                                        window.location.reload();
                                    }}><i className="fas fa-user"></i>Sign Out</Nav.Link>
                                </LinkContainer>
                                :
                                <LinkContainer to='/LOGIN'>
                                    <Nav.Link ><i className='fas fa-user'>
                                    </i>LOGIN</Nav.Link>
                                </LinkContainer>
                            )}


                            <LinkContainer to='/ADMIN'>{(
                                localStorage.getItem('admin') === 'yes' ?
                                    <Nav.Link ><i className='fas fa-user'></i>Admin</Nav.Link> :
                                    <>

                                    </>
                            )}
                            </LinkContainer>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header


