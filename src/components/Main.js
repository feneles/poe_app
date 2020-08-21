import React, { useEffect, useState } from "react";
import "../style/Main.css";

function Main({ items, characterName }) {
  const [helm, setHelm] = useState({});

  const isDataExist = Array.isArray(items) && items.length;

  useEffect(() => {
    // console.log(items);
    if (!isDataExist) {
      return;
    } else {
      const helmet = items.find((item) => item.inventoryId === "Helm");
      setHelm(helmet);
    }
  }, [characterName]);

  return (
    <div className="main_wrap">
      <div className="main_mainhand"></div>
      <div className="main_helm">
        <p></p>
        <img src={helm ? helm.icon : null} alt="helm" />
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
