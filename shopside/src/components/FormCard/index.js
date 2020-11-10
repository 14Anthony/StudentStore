import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Input, TextArea } from "../Form";
import { Button, Form } from "react-bootstrap";
import productAPI from "../../utils/productAPI.js"

function FormCard() {
  const [products, setProducts] = useState({
  name: "",
  brand:"",
  category:"",
  description:"",
  salary: "",
  countInStock:"",
  
  
  })
  const [formObject, setFormObject] = useState({});
  // console.log(formObject);
  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  // Loads all products and sets them to products
  function loadProducts() {
   
    productAPI
      .getProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.price) {
        productAPI.saveProduct({
          name: formObject.title,
          description: formObject.description,
          salary: formObject.price
        })
          .then(res => loadProducts())
          .catch(err => console.log(err));
    }
  }

  return (
    <Container fluid className="py-3">
      <Row>
        <Col size="md-6">
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Product Name (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Product Description (Optional)"
            />
            <Input
              onChange={handleInputChange}
              name="price"
              placeholder="Price (required)"
            />
            <Form.Group>
              <Form.File
                className="mb-2"
                onChange={handleInputChange}
                name="image"
                label="Product Photo"
              />
            </Form.Group>

            <Button
              className="mb-2"
              disabled={!(formObject.price && formObject.title)}
              onClick={handleFormSubmit}
            >
              Add Product
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormCard;
