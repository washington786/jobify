import { Link, useNavigate } from "react-router-dom";
import { useErrorContext } from "../../context/error/ErrorContext";

const SideNav = () => {
  const { logoutUser } = useErrorContext();
  const navigate = useNavigate();
  const logout = () => {
    setTimeout(() => {
      logoutUser();
      navigate("/login");
    }, 3000);
  };
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary min-vh-100">
      <div
        className="offcanvas-lg offcanvas-end bg-body-tertiary"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column text-secondary">
            <li className="nav-item ">
              <Link
                to={"/dashboard/home"}
                className="nav-link d-flex align-items-center gap-2 active"
                aria-current="page"
              >
                <i className="bi bi-house"></i>
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/dashboard/all-jobs"}
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-briefcase"></i>
                All Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/dashboard/add-job"}
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-plus-square"></i>
                Add Job
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/dashboard/stats"}
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-bar-chart-line-fill"></i>
                Stats
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/dashboard/profile"}
                className="nav-link d-flex align-items-center gap-2"
              >
                <i className="bi bi-person-square"></i>
                Profile
              </Link>
            </li>
          </ul>

          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <button
                className={`d-flex align-items-center gap-2 btn btn-sm btn-danger text-light`}
                onClick={logout}
              >
                <i className="bi bi-box-arrow-right"></i>
                Sign out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
