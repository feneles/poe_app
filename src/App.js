import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.css";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

// import apiAccount from "./apiAccount";

function App() {
  const [IS_LOADING, SET_IS_LOADING] = useState(false);

  const [accountName, setAccountName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [accountData, setAccountData] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const [items, setItems] = useState([]);

  const apiKeyAccount = `/character-window/get-characters?accountName=${accountName}`;
  const apiKeyCharacter = `/character-window/get-items?accountName=${accountName}&character=${characterName}`;

  useEffect(() => {
    const foundCharacter = accountData.find(
      (char) => char.name === characterName
    );
    setCharacterData(foundCharacter);

    // fetch(apiKeyCharacter)
    //   .then((response) => response.json())
    //   .then((res) => setItems(res.items)); // Wrong URL
  }, [accountData, apiKeyCharacter, characterName]);

  const characterList = accountData.map((character) => (
    <option
      key={character.name}
      value={character.name}
    >{`${character.name}, lvl:${character.level}, ${character.class} `}</option>
  ));
  useEffect(() => {
    console.log(characterList);
  }, [characterList]);

  const handleButton = (e) => {
    e.preventDefault();

    if (!accountName) return;
    SET_IS_LOADING(true);
    fetch(apiKeyAccount)
      .then((response) => response.json())
      .then((data) => {
        setAccountData(data);
        SET_IS_LOADING(false);
      })
      .catch((e) => {
        console.error(e);
        SET_IS_LOADING(false);
      });
  };

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
          handleAccountSubmit={handleAccountSubmit}
          accountName={accountName}
          handleButton={handleButton}
          characterName={characterName}
          handleCharacterSubmit={handleCharacterSubmit}
          characterList={characterList}
          isLoading={IS_LOADING}
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
