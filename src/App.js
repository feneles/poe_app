import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [IS_LOADING, SET_IS_LOADING] = useState(false);

  const [accountName, setAccountName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [accountData, setAccountData] = useState([]);
  const [characterData, setCharacterData] = useState({});
  const [items, setItems] = useState([]);

  const getAccountData = (uName) => {
    const apiKeyAccount = `/character-window/get-characters?accountName=${uName}`;

    SET_IS_LOADING(true);

    fetch(apiKeyAccount)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          data.error.message === "Forbidden"
            ? alert("This account is private!")
            : alert("Wrong account name!");
        } else {
          setAccountData(data);
          SET_IS_LOADING(false);
        }
      })
      .catch((e) => {
        console.error(e);
        SET_IS_LOADING(false);
      });
  };

  useEffect(() => {
    const getEquipement = (uName, chName) => {
      if (!uName || !chName) return;
      const apiKeyCharacter = `/character-window/get-items?accountName=${uName}&character=${chName}`;

      SET_IS_LOADING(true);
      fetch(apiKeyCharacter)
        .then((response) => response.json())
        .then((res) => {
          setItems(res.items);
          SET_IS_LOADING(false);
        })
        .catch((e) => {
          console.error(e);
          SET_IS_LOADING(false);
        });
    };

    return getEquipement(accountName, characterName);
  }, [accountName, characterName]);

  useEffect(() => {
    const foundCharacter = accountData.find(
      (char) => char.name === characterName
    );
    setCharacterData(foundCharacter);
  }, [accountData, characterName]);

  // Create an option for each character found
  const characterList = accountData.map((character) => (
    <option
      key={character.name}
      value={character.name}
    >{`${character.name}, lvl:${character.level}, ${character.class} `}</option>
  ));

  const handleButton = (e) => {
    e.preventDefault();

    if (!accountName) return;
    // search for the user by accountName
    getAccountData(accountName);
  };

  const handleAccountSubmit = (e) => {
    setAccountName(e.target.value);
  };
  const handleCharacterSubmit = (e) => {
    setCharacterName(e.target.value);
  };

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
        <Main items={items} />
      </div>
    </div>
  );
}

export default App;
