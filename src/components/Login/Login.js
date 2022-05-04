import React, {useEffect} from "react";
import "./Login.css";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  const {post} = useSelector(state => ({
    ...state.app,
  }));
  //security checks to prevent and allow unauthorized and authorized users
  useEffect(() => {
    if (post.length > 0) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <button className="login-container btn ">
        <a
          href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${redirect_uri}`}
        >
          <p className="Login__btn">Login with GitHub</p>
        </a>
      </button>
    </>
  );
};

export default Login;
