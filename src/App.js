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

  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  const getAccountData = (uName) => {
    const apiKeyAccount = `https://www.pathofexile.com/character-window/get-characters?accountName=${uName}`;

    SET_IS_LOADING(true);

    fetch(proxyUrl + apiKeyAccount)
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
      const apiKeyCharacter = `https://www.pathofexile.com/character-window/get-items?accountName=${uName}&character=${chName}`;

      SET_IS_LOADING(true);
      fetch(proxyUrl + apiKeyCharacter)
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
      <div className="portrait">
        <div className="portrait_bg">
          <h2 className="portrait_firstText">Screen is too tight!</h2>
          <h3 className="portrait_secondText">
            Change the browser orientation to landscape.
          </h3>
          <img className="portrait_img" src="/img/phone.png" alt="" />
        </div>
      </div>
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
        <Main items={items} characterName={characterName} />
        <footer className="footer">
          <h5>Copyright© by Marek Rogala</h5>
        </footer>
      </div>
    </div>
  );
}

export default App;
