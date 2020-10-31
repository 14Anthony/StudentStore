import React from 'react'
// make sure to check to see if you imported each of the specific components you need.
import { Container, Col, Row} from 'react-bootstrap'
// so if you import es7  you can create arrow functions for export immediately, by typingin racfe   
const Footer = () => {
    return (
        <footer>
            <Container className="fixed-bottom">
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
