import React from "react";
import { useState } from "react";
import { LoginScreen } from "./login";
import { RegisterScreen } from "./register";

export const UnauthenticatedApp = () => {
  const [isRegister, setIsRegister] = useState(true);
  return <div>{isRegister ? <LoginScreen /> : <RegisterScreen />}</div>;
};
