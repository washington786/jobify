import { Link, Outlet } from "react-router-dom";
import SideNav from "./SideNav";

const SharedLayout = () => {
  return (
    <div className="container-fluid min-vh-100 bg-white">
      <div className="row">
        <HeaderLayout />
        <SideNav />
        <Main />
      </div>
    </div>
  );
};

const HeaderLayout = () => {
  return (
    <header
      className="navbar sticky-top bg-light flex-md-nowrap px-3 shadow"
      data-bs-theme="dark px-3"
    >
      <Link
        to={"/dashboard/home"}
        className="text-text-decoration-none text-transparent d-flex g-3 align-items-center justify-content-center"
      >
        <i className="bi bi-briefcase-fill text-success fs-4"></i>
        <p className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-dark text-decoration-none">
          Jobify
        </p>
      </Link>
    </header>
  );
};

type header = {
  title?: String;
};

const Main = (props: header) => {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 min-vh-100">
      <div className="d-flex justify-content-start flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">{props.title}</h1>
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
