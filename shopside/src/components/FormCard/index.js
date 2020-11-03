import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
// import Jumbotron from "./Jumbotron";
import DeleteBtn from "../DeleteBtn";
// import API from "../utils/API";
// import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import { Button, Form } from "react-bootstrap";
function FormCard() {
  // Setting our component's initial state
  // const [books, setBooks] = useState([]);
  const [formObject, setFormObject] = useState({});
  console.log(formObject);
  // Load all books and store them with setBooks
  useEffect(() => {}, []);

  // Loads all books and sets them to books
  //   function loadBooks() {
  //     API.getBooks()
  //       .then(res =>
  //         setBooks(res.data)
  //       )
  //       .catch(err => console.log(err));
  //   };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      //   API.saveBook({
      //     title: formObject.title,
      //     author: formObject.author,
      //     synopsis: formObject.synopsis
      //   })
      //     .then(res => loadBooks())
      //     .catch(err => console.log(err));
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
              name="synopsis"
              placeholder="Product Description (Optional)"
            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Price (required)"
            />
            <Form.Group>
              <Form.File
                className="mb-2"
                id="exampleFormControlFile1"
                label="Product Photo"
              />
            </Form.Group>

            <Button
              className="mb-2"
              disabled={!(formObject.author && formObject.title)}
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
