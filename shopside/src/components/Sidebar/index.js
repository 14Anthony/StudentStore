import React from "react";
import Link from "react-bootstrap/Nav";
import { AdminSideBar, UserSideBar } from "../../console_data/data";
import "./style.css";
// import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    // <!-- Sidebar -->

    
      <div className="bg-dark border-right" id="sidebar-wrapper">
        <div className="sidebar-heading text-light">"UserName"</div>

        <div className="list-group list-group-flush">
          {AdminSideBar.map((data, key) => (
            <Link
              key={key}
              className="list-group-item list-group-item-action text-light bg-dark"
            >
              {data.name}
            </Link>
          ))}
        </div>
      </div>
    
  );
};

export default Sidebar;
