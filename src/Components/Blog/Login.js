import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { signInWIthGoogle, signOut } from "../../Utils/firebase";
import { UsersContext } from "../../Providers/UsersProvider";

const Login = () => {
  const user = useContext(UsersContext);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/admin");
    }
  }, [user, history]);

  return (
    <>
      <p>Login as admin</p>
      <button onClick={signInWIthGoogle}>Sign In With Google</button>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
};

export default Login;
