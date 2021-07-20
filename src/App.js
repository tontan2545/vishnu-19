import "./App.css";
import "./components/TitleSearch";
import React, { useEffect, useState } from "react";
import TitleSearch from "./components/TitleSearch";
import TotalGroup from "./components/TotalGroup";
import FoundGroup from "./components/FoundGroup";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import firebase from "./util/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [findID, setID] = useState("");
  const [groupList, setGroupList] = useState([]);
  var [selectedGroupIndex, setSelectedGroupIndex] = useState(-1);
  const getID = (id) => {
    console.log(id);
    setID(id);
  };
  for (var i = 0; i < groupList.length; i++) {
    for (var name of groupList[i].content) {
      if (findID === name.id) {
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
        findID={findID}
        getID={getID}
        setSelectedGroupIndex={setSelectedGroupIndex}
      />
      <Switch>
        <Route path="/search">
          {selectedGroupIndex > -1 && (
            <FoundGroup
              foundGroup={groupList[selectedGroupIndex]}
              imgIndex={selectedGroupIndex}
              findID={findID}
            />
          )}
          {selectedGroupIndex < 0 && <NotFound />}
        </Route>
        <Route path="/group">
          {selectedGroupIndex > -1 && (
            <FoundGroup
              foundGroup={groupList[selectedGroupIndex]}
              imgIndex={selectedGroupIndex}
              findID={findID}
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
