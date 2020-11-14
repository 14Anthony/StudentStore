import React, { useState, useEffect } from 'react'
// make sure to check to see if you imported each of the specific components you need.
import { Row, Col, Container, CardDeck } from 'react-bootstrap'
import Product from '../components/Product'
// import products from '../products'moving the products db to the backend. trying to get it to connect, possible an async await with axios.
import axios from 'axios'
const HomePage = () => {
    //getter and setters.
    const [products, setProducts] = useState([])
    // axios request....useEffect, async await
    useEffect(() => {
        const getProducts = async () => {
            const { data } = await axios.get('/api/products')
            setProducts(data)
        }
        getProducts()
    }, [])
    return (
        <Container>
            <h1 id="header">The most recent Bootcamp Graduates</h1>
            <CardDeck>
                {products.map((product, key) => (
                    // this needs to be a mobile first application so maybe we should just keep it consistent throughout, I am putting this here for copy and paste needs we will have the small devices take up 12 column, medium devices we can take up 6 , large screens take up four columns and lets have extra large screens take up 3 
                    <Col key={key} sm={12} md={6} lg={4} xl={3}>
                        {/* we will need somekind of component that renders just the photos as we loop thru the products.js */}
                        <Product product={product} />
                    </Col>
                ))}
            </CardDeck>
        </Container>
    )
}
export default HomePage