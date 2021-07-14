import "./App.css";
import "./components/TitleSearch";
import React, { useEffect, useState } from "react";
import TitleSearch from "./components/TitleSearch";
import TotalGroup from "./components/TotalGroup";
import FoundGroup from "./components/FoundGroup";
import Footer from "./components/Footer";
import firebase from "./util/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [findName, setFindName] = useState("");
  const [groupList, setGroupList] = useState([]);
  var [selectedGroupIndex, setSelectedGroupIndex] = useState(-1);
  const getName = (name) => {
    console.log(name);
    setFindName(name);
  };
  for (var i = 0; i < groupList.length; i++) {
    for (var name of groupList[i].content) {
      if (
        findName.split(" ").length === 2 &&
        findName.split(" ")[0].trim() === name.name &&
        findName.split(" ")[1].trim() === name.surname
      ) {
        selectedGroupIndex = i;
      }
    }
  }
  useEffect(() => {
    firebase
      .database()
      .ref()
      .once("value", (snap) => {
        setGroupList(snap.val());
      });
  }, []);
  const NoMatch = () => {
    return <div>No match</div>;
  };
  return (
    <Router>
      <TitleSearch
        findName={findName}
        getName={getName}
        setSelectedGroupIndex={setSelectedGroupIndex}
      />
      <Switch>
        <Route path="/search">
          {selectedGroupIndex > -1 && (
            <FoundGroup
              foundGroup={groupList[selectedGroupIndex]}
              imgIndex={selectedGroupIndex}
              findName={findName}
            />
          )}
        </Route>
        <Route path="/group">
          {selectedGroupIndex > -1 && (
            <FoundGroup
              foundGroup={groupList[selectedGroupIndex]}
              imgIndex={selectedGroupIndex}
              findName={findName}
            />
          )}
        </Route>
        <Route exact path="/">
          <TotalGroup
            groupList={groupList}
            setSelectedGroupIndex={setSelectedGroupIndex}
          />
        </Route>
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
