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

  return (
    <div className="main_wrap">
      <div className="main_weapon">
        {getItemDetails("Weapon") ? (
          <img src={getItemDetails("Weapon").icon} alt="" />
        ) : null}
      </div>
      <div className="main_helm">
        {getItemDetails("Helm") ? (
          <img src={getItemDetails("Helm").icon} alt="" />
        ) : null}
      </div>
      <div className="main_offhand">
        {getItemDetails("Offhand") ? (
          <img src={getItemDetails("Offhand").icon} alt="" />
        ) : null}
      </div>

      <div className="main_gloves">
        {getItemDetails("Gloves") ? (
          <img src={getItemDetails("Gloves").icon} alt="" />
        ) : null}
      </div>
      <div className="main_armour">
        {getItemDetails("BodyArmour") ? (
          <img src={getItemDetails("BodyArmour").icon} alt="" />
        ) : null}
      </div>
      <div className="main_belt">
        {getItemDetails("Belt") ? (
          <img src={getItemDetails("Belt").icon} alt="" />
        ) : null}
      </div>
      <div className="main_boots">
        {getItemDetails("Boots") ? (
          <img src={getItemDetails("Boots").icon} alt="" />
        ) : null}
      </div>
      <div className="main_left--ring">
        {getItemDetails("Ring") ? (
          <img src={getItemDetails("Ring").icon} alt="" />
        ) : null}
      </div>
      <div className="main_right--ring">
        {getItemDetails("Ring2") ? (
          <img src={getItemDetails("Ring2").icon} alt="" />
        ) : null}
      </div>
      <div className="main_amulet">
        {getItemDetails("Amulet") ? (
          <img src={getItemDetails("Amulet").icon} alt="" />
        ) : null}
      </div>
    </div>
  );
}

export default Main;
