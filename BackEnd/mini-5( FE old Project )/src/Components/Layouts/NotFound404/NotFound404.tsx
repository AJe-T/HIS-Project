import React from "react";
import "./NotFound404.css";

import NavBar from "../NavBar";
const NotFound404: React.FC = () => {
  return (
    <>
      <NavBar color="bg-dark" />
      <div className="content">
        <h1>Page Not Found</h1>
      </div>
    </>
  );
};
export default NotFound404;
