import React from "react";
import Container from "react-bootstrap/Container";
import Sidebar from "../Sidebar";
import FormCard from "../FormCard";
import "./style.css";

const Console = () => {
  return (
    <div id="page-content-wrapper">
    <Container fluid>
      <FormCard />
    </Container>
    </div>
  );
};

export default Console;
