import React from "react";
import { Link } from "react-router-dom";
// Drawer Component
const Drawer = () => {
  return (
    <>
    {/* Drawer Links  */}
      <div className="drawer">
        <Link className="drawerlinks" to="/gamezop">
          Home
        </Link>{" "}
        &emsp;
        <Link className="drawerlinks" to="/gamezop/news">
          News
        </Link>
        &emsp;
        <Link className="drawerlinks" to="/gamezop/logout">
          Logout
        </Link>
        &emsp;
      </div>
    </>
  );
};

export default Drawer;
