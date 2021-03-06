import React from "react";
import { Navigation, Drawer } from "react-mdl"
import { Link } from "react-router-dom"

function Sidebar(props) {
  return (
    <Drawer title="Title">
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/books">Books</Link>
      </Navigation>
    </Drawer>
  );
}

export default Sidebar;