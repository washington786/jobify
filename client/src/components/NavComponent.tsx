import React from "react";
import { Link } from "react-router-dom";

type nav = {
  title: string;
};

const NavComponent = (props: nav) => {
  return (
    <div className="d-flex gap-2 align-items-center my-auto justify-align-content-start position-relative container align-align-self-start position-absolute top-0 start-0 py-3 px-4">
      <div className="container d-flex gap-2 align-items-center my-auto px-5">
        <Link to={"/"} className="text-text-decoration-none">
          <i className="bi bi-briefcase-fill text-success fs-1"></i>
        </Link>
        <p className="text-secondary text-center my-auto display-6">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default NavComponent;
