import { Route, Routes } from "react-router-dom";
import Landing from "../screens/Landing";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ErrPage from "../screens/404Page";
import AuthOutlet from "../screens/AuthOutlet";
import { ResetPassword } from "../screens/ResetPassword";
import Dashboard from "../screens/Dashboard";

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthOutlet />}>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Route>
      
      <Route path="/dashboard" element={<Dashboard/>} />
      
      <Route path="*" element={<ErrPage />} />
    </Routes>
  );
};

export default RouterComponent;
