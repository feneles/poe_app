import React from "react";
import "../style/Header.css";

function Header({
  characterName,
  accountName,
  handleAccountSubmit,
  handleCharacterSubmit,
  data,
  setData,
  apiKeyAccount,
  setIsActive,
  isActive,
  setCharacterName,
}) {
  const isDataExist = Array.isArray(data) && data.length;

  const characterList = isDataExist
    ? data.map((character) => (
        <option
          key={character.name}
          value={character.name}
        >{`${character.name}, lvl:${character.level}, ${character.class} `}</option>
      ))
    : null;

  function handleButton(e) {
    e.preventDefault();
    if (accountName === "") {
      return;
    } else {
      fetch(apiKeyAccount)
        .then((response) => response.json())
        .then((data) => setData(data));
      setIsActive(true);
      console.log(characterName);
    }
  }

  return (
    <div className="header_panel">
      <img className="header_logo" src="/img/logo.png" alt="logo poe" />
      <form className="header_form">
        <div class="input-group mb-3">
          <input
            name="accountName"
            type="text"
            class="form-control"
            placeholder="Account Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleAccountSubmit}
            value={accountName}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="submit"
              onClick={handleButton}
            >
              Search
            </button>
          </div>
        </div>

        <div class="input-group mb-3">
          <select
            class="custom-select"
            id="inputGroupSelect02"
            className="header_select"
            value={characterName}
            onChange={handleCharacterSubmit}
          >
            <option style={{ display: "none" }}>-- Select Character --</option>
            {isActive ? characterList : ""}
          </select>
        </div>
      </form>
    </div>
  );
}

export default Header;
