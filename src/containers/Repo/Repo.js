import React from "react";
import "./Repo.css";
import SearchInput from "../../components/SearchInput/SearchInput";
import Buttons from "../../components/Buttons/Buttons";
import Repository from "../../components/Repository/Repository";
function Repo() {
  return (
    <div className="Repo Repo-73">
      <div className="Repo__container">
        <SearchInput />
        <Buttons />
      </div>

      <Repository />
    </div>
  );
}

export default Repo;
