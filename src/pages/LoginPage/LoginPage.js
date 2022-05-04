import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

import "./LoginPage.css";
import Login from "../../components/Login/Login";
function LoginPage() {
  const navigate = useNavigate();

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
    <div className="LoginPage">
      <Login />
    </div>
  );
}

export default LoginPage;
