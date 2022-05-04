import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <button className="login-container btn ">
        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
        >
          <p className="Login__btn">Login with GitHub</p>
        </a>
      </button>
    </>
  );
};

export default Login;
