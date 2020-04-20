import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UsersContext } from "../Providers/UsersProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useContext(UsersContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
