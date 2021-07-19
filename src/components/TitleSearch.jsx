import React, { useState } from "react";
import "./TitleSearch.css";
import { Link, useHistory } from "react-router-dom";
import VishnuLogo from "../assets/vishnu.png";

function TitleSearch(props) {
  const [nameController, setNameController] = useState(props.findName);
  const history = useHistory();

  function onNameChange(event) {
    setNameController(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.setSelectedGroupIndex(-1);
    props.getName(nameController);
    setNameController("");
    history.push(`/search/${nameController}`);
  }

  return (
    <div className="title">
      <Link
        to="/"
        onClick={() => {
          props.getName("");
          props.setSelectedGroupIndex(-1);
          setNameController("");
        }}
      >
        <img className="title-image" src={VishnuLogo} alt="vishnu logo" />
      </Link>
      <form onSubmit={submitHandler}>
        <input
          className="title-input"
          type="text"
          placeholder="ชื่อจริงและนามสกุล"
          value={nameController}
          onChange={onNameChange}
        />
      </form>
    </div>
  );
}
export default TitleSearch;
