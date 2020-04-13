import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const userLogged = useSelector(state => state.userReducer.userLogged);
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token") && userLogged) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
© 2020 GitHub, Inc.