import "./Navigation.css";
import * as React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
      <h1 className="logo"><NavLink to="quotes">GreatQuotes</NavLink></h1>
      <ul>
        <NavLink to="/"><li>Welcome Page</li></NavLink>
        <NavLink to="/quotes"><li>Quotes</li></NavLink>
        <NavLink to="/add-quote"><li>Add Quote</li></NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
