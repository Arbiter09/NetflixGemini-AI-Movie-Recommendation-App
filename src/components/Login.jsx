import React from "react";
import { NETFLIX_BACKGROUND } from "../utils/constants";
import Header from "./Header";
import Form from "./Form";

const Login = () => {
  return (
    <div>
      <Header />
      <img src={NETFLIX_BACKGROUND} alt="background" className="absolute" />
      <Form />
    </div>
  );
};

export default Login;
