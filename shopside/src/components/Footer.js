import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
// so if you import es7  you can create arrow functions for export immediately, by typingin racfe   
const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>

                    <Col className='text-center py-3'>
                        storeFront
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
