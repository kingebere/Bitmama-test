import React, {useState} from "react";
import "./SearchInput.css";
import {useDispatch} from "react-redux";
import {setDelete} from "../../redux/features/postSlice";
function SearchInput() {
  const [qwerty, setQwerty] = useState("");
  const dispatch = useDispatch();
  const handleSearch = e => {
    setQwerty(e.target.value);
    dispatch(setDelete(e.target.value));
  };
  return (
    <div className="SearchInput SearchInput-66">
      <input
        type="text"
        title="search"
        className="searchInput__textbox"
        data-testid="search-textfield"
        aria-label="search-textfield"
        placeholder="Find a repository..."
        value={qwerty}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchInput;
