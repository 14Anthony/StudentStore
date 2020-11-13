import React from "react";
import Console from "../components/Console";
import Sidebar from "../components/Sidebar";

const AdminPage = () => {
  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <Console />

    </div>
  );
};

export default AdminPage;
