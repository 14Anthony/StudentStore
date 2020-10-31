import React from "react";
import Console from "../components/Console";
import Sidebar from "../components/Sidebar";
import { Container, Col, Row } from "react-bootstrap";


const AdminPage = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />

      <Console />
    </div>
  );
};

export default AdminPage;
