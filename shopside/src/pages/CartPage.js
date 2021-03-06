import DeleteBtn from "../components/DeleteBtn";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Container } from "react-bootstrap";
import Rating from "../components/Rating";
import axios from "axios";
import cartContext from "../utils/cartContext";
import Total from "../components/Total";
import "./prod.css"

// import productPage from '../pages/productPage'

const CartPage = ({}) => {
  const { cartItems, setCartItems } = useContext(cartContext);
  // same functionality from the homePage.js file, as I mimick.
  const delProd = (id) => {
    const newCart = cartItems.filter((item) => item._id !== id);
    setCartItems(newCart);
    console.log("new Cart", newCart);
  };
  console.log("cartItems", cartItems);
  return (
    <Container>
      <Row>
        {cartItems.map((product) => (
          <Col md={2}>
            <DeleteBtn onClick={() => delProd(product._id)} />
            {/* the name keeps popping out of the cards....how do I fix.??? */}
            <Image src={product.image} alt={product.name} fluid />
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>
                  <strong>{product.name}</strong>
                </h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Salary: ${product.salary}</ListGroup.Item>
              <ListGroup.Item>
                <strong> Description: {product.description}</strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          // <Col md={3}>

          //     </Col>
        ))}
      </Row>
      <Row>
        <Total cart={cartItems}> </Total>
      </Row>
    </Container>
  );
};

export default CartPage;
