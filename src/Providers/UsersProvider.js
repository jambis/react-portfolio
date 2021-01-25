import React, { useState, useEffect, createContext } from "react";
import { auth, functions } from "../Utils/firebase";

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  let unsubscribeFromAuth = null;

  const getUser = async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const isUserAdmin = functions.httpsCallable("isUserAdmin");
          const response = await isUserAdmin();

          setUser(response.data.admin);
        } catch (err) {
          console.error(err);
        }
      } else {
        setUser(false);
      }
    });
  };

  useEffect(() => {
    getUser();

    return () => unsubscribeFromAuth();
  }, [unsubscribeFromAuth]);

  return <UsersContext.Provider value={user}>{children}</UsersContext.Provider>;
};

export default UsersProvider;
