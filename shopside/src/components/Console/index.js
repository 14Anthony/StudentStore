import React from "react";
import Container from "react-bootstrap/Container";
import FormCard from "../FormCard";
import ProductList from "../productList"
import "./style.css";



const Console = () => {
  // const [consoleObject, setconsoleObject] = useState({option: ""});
  return (
    <div id="page-content-wrapper">
      <Container fluid>
        <FormCard />
        <ProductList/>
      </Container>
    </div>
  );
};

export default Console;
