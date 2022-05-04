import React, {useEffect} from "react";

import "./Home.css";
import Profile from "../../containers/Profile/Profile";
import Repo from "../../containers/Repo/Repo";
import NavBar from "../../components/NavBar/NavBar";
import {useDispatch, useSelector} from "react-redux";
import {getRepo, getUser} from "../../redux/features/postSlice";
function Home() {
  const dispatch = useDispatch();

  const {post} = useSelector(state => ({
    ...state.app,
  }));

  useEffect(() => {
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
