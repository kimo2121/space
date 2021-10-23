import React from "react";
import TypoText from "../TypoText/TypoText";
import "./standOut.css";
const StandOut = () => {
  return (
    <div id="Features" className="stand-out">
      <h1>What makes us stand out from the rest?</h1>
      <p className="stand-out-p">
        Ceaquidem que pratus moluptatus res ium quas quidele stibus.
      </p>
      <p className="stand-out-p">
        Nientur? Quiatiu mquatque cus volora vit doluptate sunt dolorum ernam
        eium vid quodi
      </p>
      <div className="notes-container">
        <TypoText
          className="road stand"
          label="Fair Pricing"
          text="The pricing of our NFT artwork is completely fair. Absolutely no hidden charges at all."
        />
        <TypoText
          className="road stand"
          label="Ownership"
          text="The owners of the SpaceBulls will have full commercial rights."
        />
        <TypoText
          className="road stand"
          label="Fair Distribution"
          text="All SpaceBull NFTs will be distributed fairly and without any discrimination. We believe in giving equal change to everyone."
        />
        <TypoText
          className="road stand"
          label="Artist"
          text="All the SpaceBull NFT artworks are created by artists using best technology and with greaprecision."
        />
        <TypoText
          className="road stand"
          label="No Reserved NFT"
          text="We believe in transparency. None of the NFT artwork isreserved. They are 100% reserved for the public."
        />
        <TypoText
          className="road stand"
          label="Charity"
          text="5% of the income we make will be donated for animal welfare. Join us and be a part of a good deed."
        />
      </div>
    </div>
  );
};

export default StandOut;
