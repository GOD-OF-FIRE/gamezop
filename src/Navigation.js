import React from "react";
import { Link } from "react-router-dom";
// Navigation Component
const Navigation = () => {
  return (
    <nav>
      <div className="header">
        <Link className="links" to="/gamezop">
          News
        </Link>
        &emsp;
        <Link className="links" to="/gamezop/users">
          Users
        </Link>{" "}
        &emsp;
        <Link className="links" to="/gamezop/topusers">
          Top Users
        </Link>
        &emsp;
      </div>
    </nav>
  );
};

export default Navigation;
