import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import "./LoginPage.css";
import Login from "../../components/Login/Login";
import {getUser} from "../../redux/features/postSlice";
function LoginPage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {post} = useSelector(state => ({
    ...state.app,
  }));
  useEffect(() => {
    if (post.length > 0) {
      navigate("/");
    }
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      const code = newUrl[1];
      dispatch(getUser({code}));
    }
  }, []);

  return (
    <div className="LoginPage">
      <Login />
    </div>
  );
}

export default LoginPage;
