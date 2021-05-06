import React from "react";
import AuthContext, { initialAuthContext } from "./context";

const Provider = ({ children }) => {
  const [value, setValue] = React.useState({ ...initialAuthContext });

  const setToken = (token) => {
    setValue({ ...value, token });
    localStorage.setItem("token", token);
  };

  const values = {
    value,
    methods: {
      setToken,
    },
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default Provider;
