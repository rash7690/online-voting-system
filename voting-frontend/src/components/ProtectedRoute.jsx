import { Navigate }

from "react-router-dom";

function ProtectedRoute({

  children

}) {

  const token =
    localStorage.getItem("token");

  // NOT LOGGED IN
  if (!token) {

    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;