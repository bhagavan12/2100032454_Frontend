import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex", justifyContent: "center" }}>
        <li style={{ marginRight: "10px" }}>
          <NavLink to="/" style={{color: "black" }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee" style={{ color: "black" }}>
            Employee
          </NavLink>
        </li>
      </ul>
      <hr />
    </nav>
    
  );
};

export default Navbar;
