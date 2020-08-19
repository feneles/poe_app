import React from "react";
import "../style/Aside.css";

function Aside({ characterData, characterName }) {
  // const characters = data.map((character) => (
  //   <h1 key={character.name}>
  //     {character.name}
  //     LVL:
  //     {character.level}
  //   </h1>
  // ));

  const handleImg = characterData ? characterData.class : "Marauder";

  return (
    <div className="aside_wrap">
      <div className="aside_class">
        <img
          className="aside_class--icon"
          src={`/img/${handleImg}.png`}
          alt="class icon"
        />
        <h4 className="aside_text">Name: {characterName}</h4>
        <h4 className="aside_text">
          Class: {characterData ? characterData.class : null}
        </h4>
        <h4 className="aside_text">
          Level: {characterData ? characterData.level : null}
        </h4>
        <h4 className="aside_text">
          League: {characterData ? characterData.league : null}
        </h4>
      </div>
    </div>
  );
}

export default Aside;
