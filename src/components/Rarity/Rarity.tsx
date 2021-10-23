import React from "react";
import "./rarity.css";
import unknownBull from "../../assets/images/unknownBull.png";

const data = [
  { name: "SpaceBulls", number: 8888 },
  { name: "Earring", number: 8 },
  { name: "Background", number: 12 },
  { name: "Clothes", number: 35 },
  { name: "Body", number: 15 },
  { name: "Eyes/Eyewear", number: 25 },
  { name: "Hat/Hair", number: 18 },
  { name: "Mouth", number: 23 },
  { name: "Mask", number: 3 },
  { name: "Nose", number: 5 },
];
const Rarity = () => {
  return (
    <div className="rarity">
      <h2>Rarity</h2>
      <p>Ceaquidem que pratus moluptatus res ium quas quidele stibus.</p>
      <p>
        Nientur? Quiatiu mquatque cus volora vit doluptate sunt dolorum ernam
        eium vid
      </p>
      <p>
        quodi samet vercimil modit, consererum inus, ut option cor aciis rem
        eaqui nimusti
      </p>
      <div className="unknown-bulls">
        <div className="unknow-bull-start">
          <img src={unknownBull} alt="" />
          <img src={unknownBull} alt="" />
          <img src={unknownBull} alt="" />
          <img src={unknownBull} alt="" />
        </div>
        <div className="unknow-bull-mid">
          <img src={unknownBull} alt="" />
        </div>
        <div className="unknow-bull-start">
          <img src={unknownBull} alt="" />
          <img src={unknownBull} alt="" />
          <img src={unknownBull} alt="" />
          <img src={unknownBull} alt="" />
        </div>
      </div>
      <div className="statistics">
        {data.map((item, index) => (
          <div>
            <h4>{item.number}</h4>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rarity;
