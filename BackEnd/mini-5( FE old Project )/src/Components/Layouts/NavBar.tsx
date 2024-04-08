import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  color?: string;
  position?: string;
}
const NavBar: React.FC<IProps> = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark ${props.color} ${props.position}`}
    >
      <div className="container mt-2">
        <Link className="navbar-brand " to="/">
          Mini <span className="text-danger">Project</span>-5
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className=" nav-item me-4">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
