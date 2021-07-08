import React, { useState } from "react";
import "./TitleSearch.css";

function TitleSearch(props) {
  const [nameController, setNameController] = useState(props.findName);

  function onNameChange(event) {
    setNameController(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    props.getName(nameController);
    setNameController("");
  }
  return (
    <div className="title">
      <img className="title-image" src="vishnu.png" alt="vishnu logo" />
      <form onSubmit={submitHandler}>
        <input
          className="title-input"
          type="text"
          placeholder="ชื่อจริงและนามสกุล"
          value={nameController}
          onChange={onNameChange}
        ></input>
      </form>
    </div>
  );
}
export default TitleSearch;
