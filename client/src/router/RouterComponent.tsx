import { Route, Routes } from "react-router-dom";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ErrPage from "../screens/404Page";
import AuthOutlet from "../screens/AuthOutlet";
import { ResetPassword } from "../screens/ResetPassword";
import Dashboard from "../screens/Dashboard";
import CreateJob from "../screens/main/createJob";
import AllJobs from "../screens/main/AllJobs";
import Stats from "../screens/main/Stats";
import Profile from "../screens/main/Profile";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Index } from "../screens/main/Index";


const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthOutlet />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Route>

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      >
        <Route path="home" index element={<Index />} />
        <Route path="all-jobs" element={<AllJobs />} />
        <Route path="add-job" element={<CreateJob />} />
        <Route path="stats" element={<Stats />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      <Route path="*" element={<ErrPage />} />
    </Routes>
  );
};

export default RouterComponent;
