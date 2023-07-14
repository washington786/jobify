import { Fragment } from "react";
import NavComponent from "../components/NavComponent";
import Wrapper from "../components/Wrapper";
import { Outlet } from "react-router-dom";

const AuthOutlet = () => {
  return (
    <Fragment>
      <Wrapper>
        <NavComponent title="Jobify" />
        <Outlet />
      </Wrapper>
    </Fragment>
  );
};

export default AuthOutlet;
