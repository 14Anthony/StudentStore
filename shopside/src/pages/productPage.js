import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'


const productPage = ({ match }) => {

    //Need to find a way to capture the id the product from the params. maybe match....?  find.... findall???I can't remember.........\\

    const product = products.find(p => p._id === match.params.id)

    return (
        <>
            {/* using react dom to get the buttion, linked */}
            <Link className='btn btn-dark my-3' to='/'>
                Back
        </Link>
            {/* I need to pull in the image, and the product information using the current list from products.js */}
            <Row>
                <Col md={6}>

                    <Image src={product.image} alt={product.name} fluid />

                </Col>
                <Col md={3}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

            </Row>
        </>
    )
}

export default productPage
