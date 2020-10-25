import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'

const HomePage = () => {
    return (
        <div>
            <h1>The most recent Bootcamp Graduates</h1>
            <Row>
                {products.map(products => (
                    // this needs to be a mobile first application so maybe we should just keep it consistent throughout, I am putting this here for copy and paste needs we will have the small devices take up 12 column, medium devices we can take up 6 , large screens take up four columns and lets have extra large screens take up 3 
                    <Col sm={12} md={6} lg={4} xl={3}>
                        {/* we will need somekind of component that renders just the photos as we loop thru the products.js */}
                        <h3>
                            {products.name}
                        </h3>
                    </Col>

                ))}

            </Row>

        </div>
    )
}

export default HomePage
