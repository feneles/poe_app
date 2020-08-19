import React, { useState, useEffect } from "react";
import "../style/Main.css";

function Main({ items, characterName }) {
  // const [itemHelm, setItemHelm] = useState("");

  // const getHelmet = items.items.find((item) => item.inventoryId === "Helm");

  //  setItemHelm(getHelmet);

  return (
    <div className="main_wrap">
      <div className="main_mainhand"></div>
      <div className="main_helm">
        {/* <img src={getHelmet.icon} alt="helm" /> */}
      </div>
      <div className="main_offhand"></div>
      <div className="main_armour"></div>
      <div className="main_gloves"></div>
      <div className="main_belt"></div>
      <div className="main_boots"></div>
      <div className="main_left--ring"></div>
      <div className="main_right--ring"></div>
      <div className="main_amulet"></div>
    </div>
  );
}

export default Main;
