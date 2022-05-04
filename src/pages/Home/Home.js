import React, {useEffect, useState} from "react";
import "./Home.css";

import {useNavigate} from "react-router-dom";
import Profile from "../../containers/Profile/Profile";
import Repo from "../../containers/Repo/Repo";
import NavBar from "../../components/NavBar/NavBar";

import {useDispatch, useSelector} from "react-redux";
import {getRepo} from "../../redux/features/postSlice";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {post} = useSelector(state => ({
    ...state.app,
  }));
  const [code] = useState(post);
  //security checks to prevent and allow unauthorized and authorized users
  useEffect(() => {
    if (code.length === 0) {
      navigate("/login");
      return;
    }
  }, [navigate, code]);

  console.log(code);
  useEffect(() => {
    //add  question mark fallback incase of when empty
    const logins = post[0]?.data.login;
    dispatch(getRepo({logins}));
  }, [post]);
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="Home">
        <div className="Home__row">
          <Profile />
          <Repo />
        </div>
      </div>
    </>
  );
}

export default Home;
