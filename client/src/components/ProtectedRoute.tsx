import { Navigate } from "react-router-dom";
import { useErrorContext } from "../context/error/ErrorContext";

interface route {
  children: any;
}

export const ProtectedRoute = (props: route) => {
  const { state } = useErrorContext();
  const { user } = state;
  const { children } = props;

  if (!user) {
    return <Navigate to={"/login"} />;
  }

  return children;
};
