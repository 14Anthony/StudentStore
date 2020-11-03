import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
// import products from '../products'
import axios from 'axios'


const ProductPage = ({ match }) => {

    //Need to find a way to capture the id the product from the params. maybe match....?  find.... findall???I can't remember.........\\

    // const product = products.find(p => p._id === match.params.id) moving over to the back end .......like I just did on homePage, 
    const [product, setProduct] = useState({})
    // same functionality from the homePage.js file, as I mimick.
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`)

            setProduct(data)
        }
        getProduct()
    }, [match])
    return (
        <>
            {/* using react dom to get the buttion, linked */}
            <Link className='btn btn-secondary my-3' to='/'>
                Back
        </Link>
            {/* I need to pull in the image, and the product information using the current list from products.js */}
            <Row>
                <Col md={6}>
                    {/* the name keeps popping out of the cards....how do I fix.??? */}
                    <Image src={product.image} alt={product.name} fluid />

                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3><strong>{product.name}</strong></h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />

                        </ListGroup.Item>
                        <ListGroup.Item>
                            Salary:  ${product.salary}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong> Description:  {product.description}</strong>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <ListGroup >
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Salary:
                                </Col>
                                <Col>
                                    <strong>${product.salary}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                    Status:
                                </Col>
                                <Col>
                                    {product.countInStock > 0 ? 'Available for Hire' : 'Out of Stock'}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                Add To Cart
                            </Button>
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

            </Row>
        </>
    )
}

export default ProductPage
