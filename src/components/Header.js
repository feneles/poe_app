import React from "react";

const Header = ({
  handleCharacterSubmit,
  handleAccountSubmit,
  accountName,
  handleButton,
  characterName,
  characterList,
  isLoading,
}) => {
  return (
    <div className="header_panel">
      <img className="header_logo" src="/img/logo.png" alt="logo poe" />
      <form className="header_form">
        <div className="input-group mb-3">
          <input
            name="accountName"
            type="text"
            className="form-control"
            placeholder="Account Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleAccountSubmit}
            value={accountName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              onClick={handleButton}
            >
              Search
            </button>
          </div>
        </div>

        <div className="input-group mb-3">
          <select
            id="inputGroupSelect02"
            className="header_select custom-select"
            value={characterName}
            onChange={handleCharacterSubmit}
          >
            {isLoading && <option>Loading data...</option>}
            {!isLoading && characterList.length <= 0 && (
              <option>No data</option>
            )}
            {!isLoading && characterList.length > 0 && (
              <option>-- Select Character --</option>
            )}
            {!isLoading && characterList.length > 0 && characterList}
          </select>
        </div>
      </form>
    </div>
  );
};

export default Header;
