import React from "react";

function Main({ items }) {
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
            <div className="item_stats--topProperties">
              {currentItemHasProperties &&
                curentItemProperties.map((prop) => {
                  return Object.entries(prop).map(([key, value]) => {
                    if (key === "name")
                      return (
                        <span className="item_stats--name">
                          <br />
                          {value}
                        </span>
                      );
                    else if (key === "values") {
                      if (value.length > 0)
                        return (
                          <span className="item_stats--value">
                            {`: ${value[0][0]}`}
                          </span>
                        );
                      else return null;
                    } else return null;
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
            <p className="item_crafted">{getItemDetails(id).craftedMods}</p>
          </div>
        </div>
      );
    } else return null;
  };

  return (
    <div className="main_wrap">
      <div className="main_items">
        <div className="main_weapon">
          {getItemIcon("Weapon")}
          <div className="stats">{getItemStats("Weapon")}</div>
        </div>
        <div className="main_helm">
          {getItemIcon("Helm")}
          <div className="stats">{getItemStats("Helm")}</div>
        </div>
        <div className="main_offhand">
          {getItemIcon("Offhand")}
          <div className="stats">{getItemStats("Offhand")}</div>
        </div>
        <div className="main_gloves">
          {getItemIcon("Gloves")}
          <div className="stats">{getItemStats("Gloves")}</div>
        </div>
        <div className="main_armour">
          {getItemIcon("BodyArmour")}
          <div className="stats">{getItemStats("BodyArmour")}</div>
        </div>
        <div className="main_belt">
          {getItemIcon("Belt")}
          <div className="stats">{getItemStats("Belt")}</div>
        </div>
        <div className="main_boots">
          {getItemIcon("Boots")}
          <div className="stats">{getItemStats("Boots")}</div>
        </div>
        <div className="main_left--ring">
          {getItemIcon("Ring")}
          <div className="stats">{getItemStats("Ring")}</div>
        </div>
        <div className="main_right--ring">
          {getItemIcon("Ring2")}
          <div className="stats">{getItemStats("Ring2")}</div>
        </div>
        <div className="main_amulet">
          {getItemIcon("Amulet")}
          <div className="stats">{getItemStats("Amulet")}</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
