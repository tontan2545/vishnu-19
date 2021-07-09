import "./App.css";
import "./components/TitleSearch";
import React, { useState } from "react";
import TitleSearch from "./components/TitleSearch";
import TotalGroup from "./components/TotalGroup";
import FoundGroup from "./components/FoundGroup";
import Footer from "./components/Footer";
import groupList from "./group-list";

function App() {
  const [findName, setFindName] = useState("");
  const getName = (name) => {
    console.log(name);
    setFindName(name);
  };
  var imgIndex = 0;
  const searchGroup = groupList.filter((group, index) => {
    for (var name of group.content) {
      if (
        findName.split(" ").length === 2 &&
        findName.split(" ")[0].trim() === name.name &&
        findName.split(" ")[1].trim() === name.surname
      ) {
        imgIndex = index;
        return true;
      }
    }
    return false;
  });
  if (searchGroup.length > 0) console.log(searchGroup[0].name);
  return (
    <div>
      <TitleSearch findName={findName} getName={getName} />
      {searchGroup.length > 0 ? (
        <FoundGroup
          foundGroup={searchGroup[0]}
          imgIndex={imgIndex}
          findName={findName}
        />
      ) : (
        <TotalGroup groupList={groupList} />
      )}
      <Footer />
    </div>
  );
}

export default App;
