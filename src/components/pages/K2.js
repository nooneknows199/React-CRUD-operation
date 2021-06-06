import React from "react";
import {Link} from "react-router-dom";

const K2 = () => {
  return (
    <div id="container"> 
    <div id="main">
      <Link className="btn btn-secondary btn-lg" to="/home">Register</Link>
    </div>
    <div id="head">
      <h1>CRUD OPERATION</h1>
    </div>
    </div>
  );
};

export default K2;