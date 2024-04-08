import React from "react";
import "./Home.css";

import NavBar from "../../Layouts/NavBar";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <div id="container">
        <div id="landing-page">
          <NavBar position="fixed-top" />
          <h1 className="text-center text-light">
            Welcome to Mini <span className="text-danger">Project</span>-5
          </h1>
          <p className="text-light my-3">
            Please use the button below to enter your information.
          </p>
          <Link to={"/CreateCase"} className="btn btn-outline-light ">
            Data Collection
          </Link>
        </div>
      </div>
    </>
  );
};
export default Home;
