import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Aside from "./components/Aside";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import apiAccount from "./apiAccount";

function App() {
  const [accountName, setAccountName] = useState("");
  const [characterName, setCharacterName] = useState("WeLoveJS");
  const [data, setData] = useState(apiAccount);
  const [characterData, setCharacterData] = useState({});
  const [items, setItems] = useState({});
  const [isActive, setIsActive] = useState(false);

  const apiKeyAccount = `/character-window/get-characters?accountName=${accountName}`;
  const apiKeyCharacter = `/character-window/get-items?accountName=${accountName}&character=${characterName}`;

  useEffect(() => {
    fetch(apiKeyCharacter)
      .then((response) => response.json())
      .then((data) => setItems(data));
    console.log(items);
  }, [characterName]);

  const handleAccountSubmit = (e) => setAccountName(e.target.value);
  const handleCharacterSubmit = (e) => {
    setCharacterName(e.target.value);
  };

  // Find, wyszukuje z tablicy wartości characterName

  // UseEffect odswieza characterData z kazda zmiana characterName
  useEffect(() => {
    const getCharacter = data.find((char) => char.name === characterName);
    setCharacterData(getCharacter);
    console.log(characterData);
  }, [characterName]);

  return (
    <div className="wrapper">
      <div className="app">
        <Header
          accountName={accountName}
          characterName={characterName}
          handleAccountSubmit={handleAccountSubmit}
          handleCharacterSubmit={handleCharacterSubmit}
          data={data}
          apiKeyAccount={apiKeyAccount}
          setData={setData}
          setIsActive={setIsActive}
          isActive={isActive}
        />
        <Aside data={data} characterName={characterName} />
        <Main
          items={items}
          characterName={characterName}
          characterData={characterData}
        />
      </div>
    </div>
  );
}

export default App;
