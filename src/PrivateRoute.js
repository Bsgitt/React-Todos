<<<<<<< HEAD
  
=======
>>>>>>> 305e7f393a6cccd831988eff8fab62286dec0c9b
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/Auth/AuthContext";
const PriveRoute = ({ conponent: RouteComponent, ...rest }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    />
  );
};

export default PriveRoute;
