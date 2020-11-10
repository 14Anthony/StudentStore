import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { AdminSideBar, UserSideBar } from "../../console_data/data";
import "./style.css";
// console.log(AdminSideBar);
console.log(UserSideBar);

const Sidebar = () => {
  let { url } = useRouteMatch();

  return (
    // <!-- Sidebar -->
    <div className="bg-dark border-right" id="sidebar-wrapper">
      <div className="sidebar-heading text-light">"AdminPage"</div>
      <div className="list-group list-group-flush">
        {AdminSideBar.map(({ name, id }) => (
          <Link
            key={id}
            to={`${url}/${id}`}
            className="list-group-item list-group-item-action text-light bg-dark"
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
