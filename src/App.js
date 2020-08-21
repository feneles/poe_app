import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

// import apiAccount from "./apiAccount";

function App() {
  const [accountName, setAccountName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [data, setData] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const [items, setItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const apiKeyAccount = `/character-window/get-characters?accountName=${accountName}`;
  const apiKeyCharacter = `/character-window/get-items?accountName=${accountName}&character=${characterName}`;
  const isDataExist = Array.isArray(data) && data.length;

  useEffect(() => {
    console.log(items);
    const getCharacter = isDataExist
      ? data.find((char) => char.name === characterName)
      : null;
    setCharacterData(getCharacter);

    fetch(apiKeyCharacter)
      .then((response) => response.json())
      .then((res) => setItems(res.items));
    console.log(items);
  }, [characterName]);

  const handleAccountSubmit = (e) => {
    setAccountName(e.target.value);
  };
  const handleCharacterSubmit = (e) => {
    setCharacterName(e.target.value);
  };

  // Find, wyszukuje z tablicy wartości characterName

  // UseEffect odswieza characterData z kazda zmiana characterName

  return (
    <div className="wrapper">
      <div className="app">
        <Header
          accountName={accountName}
          characterName={characterName}
          handleAccountSubmit={handleAccountSubmit}
          handleCharacterSubmit={handleCharacterSubmit}
          setCharacterName={setCharacterName}
          data={data}
          apiKeyAccount={apiKeyAccount}
          setData={setData}
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <Aside characterName={characterName} characterData={characterData} />
        <Main
          items={items}
          characterName={characterName}
          characterData={characterData}
          setItems={setItems}
        />
      </div>
    </div>
  );
}

export default App;
