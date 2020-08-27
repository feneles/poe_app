import React, { useEffect } from "react";

function Main({ items, characterName }) {
  const getItemDetails = (name) => {
    if (!name) return;

    if (Array.isArray(items) && items.length > 0) {
      return items.find((item) => item.inventoryId === name);
    } else {
      return {};
    }
  };
  const getItemIcon = (id) => {
    if (getItemDetails(id)) {
      return <img className="itemIcon" src={getItemDetails(id).icon} alt="" />;
    } else return null;
  };

  const getItemStats = (id) => {
    if (getItemDetails(id)) {
      let curentItemProperties = getItemDetails(id).properties;
      let currentItemHasProperties = curentItemProperties ? true : false;
      return (
        <div className="item">
          <div className="item_name">
            <h6>{getItemDetails(id).name}</h6>
            <h6>{getItemDetails(id).typeLine}</h6>
          </div>
          <div className="item_stats--properties">
            <div>
              {currentItemHasProperties &&
                curentItemProperties.map((prop) => {
                  Object.entries(prop).map(([key, value]) => {
                    if (key === "name") return <p>{value}</p>;
                    else if (key === "values") {
                      if (value.length > 0) return <p>{value[0][0]}</p>;
                      else return null;
                    }
                  });
                })}
            </div>
          </div>
          <div className="item_stats--enchant">
            <p>{getItemDetails(id).enchantedMods}</p>
            <div className="item_stats--explicit">
              {getItemDetails(id).explicitMods
                ? getItemDetails(id).explicitMods.map((mod) => (
                    <p key={mod}>{mod}</p>
                  ))
                : ""}
            </div>
            <p className="">{getItemDetails(id).craftedMods}</p>
          </div>
        </div>
      );
    } else return null;
  };

  return (
    <div className="main_wrap">
      <div className="main_items">
        <div className="main_weapon">
          <div className="stats">{getItemStats("Weapon")}</div>
          {getItemIcon("Weapon")}
        </div>
        <div className="main_helm">{getItemIcon("Helm")}</div>
        <div className="main_offhand">{getItemIcon("Offhand")}</div>
        <div className="main_gloves">{getItemIcon("Gloves")}</div>
        <div className="main_armour">{getItemIcon("BodyArmour")}</div>
        <div className="main_belt">{getItemIcon("Belt")}</div>
        <div className="main_boots">{getItemIcon("Boots")}</div>
        <div className="main_left--ring">{getItemIcon("Ring")}</div>
        <div className="main_right--ring">{getItemIcon("Ring2")}</div>
        <div className="main_amulet">{getItemIcon("Amulet")}</div>/
      </div>
    </div>
  );
}

export default Main;
