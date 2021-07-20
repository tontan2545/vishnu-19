import React, { useState } from "react";
import "./TitleSearch.css";
import { Link, useHistory } from "react-router-dom";
import VishnuLogo from "../assets/vishnu.svg";

function TitleSearch(props) {
  const [IDController, setIDController] = useState(props.findID);
  const history = useHistory();

  function onIDChange(event) {
    setIDController(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.setSelectedGroupIndex(-1);
    props.getID(IDController.trim());
    setIDController("");
    history.push(`/search/${setIDController}`);
  }

  return (
    <div className="title">
      <Link
        to="/"
        onClick={() => {
          props.getID("");
          props.setSelectedGroupIndex(-1);
          setIDController("");
        }}
      >
        <img className="title-image" src={VishnuLogo} alt="vishnu logo" />
      </Link>
      <form onSubmit={submitHandler}>
        <input
          className="title-input"
          type="text"
          placeholder="รหัสนิสิต 10 หลัก"
          value={IDController}
          onChange={onIDChange}
        />
      </form>
    </div>
  );
}
export default TitleSearch;
