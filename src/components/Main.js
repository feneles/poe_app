import React from "react";

function Main({ items }) {
  // const [helm, setHelm] = useState({});

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

  return (
    <div className="main_wrap">
      <div className="main_items">
        <div className="main_weapon">{getItemIcon("Weapon")}</div>
        <div className="main_helm">{getItemIcon("Helm")}</div>
        <div className="main_offhand">{getItemIcon("Offhand")}</div>
        <div className="main_gloves">{getItemIcon("Gloves")}</div>
        <div className="main_armour">{getItemIcon("BodyArmour")}</div>
        <div className="main_belt">{getItemIcon("Belt")}</div>
        <div className="main_boots">{getItemIcon("Boots")}</div>
        <div className="main_left--ring">{getItemIcon("Ring")}</div>
        <div className="main_right--ring">{getItemIcon("Ring2")}</div>
        <div className="main_amulet">{getItemIcon("Amulet")}</div>
      </div>
    </div>
  );
}

export default Main;
