import React from "react";
import "./styles.css";
import { GiCheckMark } from "react-icons/gi";
import Timer from "../Timer/Timer";
const MintComponent = () => {
  return (
    <div id="Mint" className="mint-component">
      <div className="left-div">
        <h2>The SpaceBulls are coming</h2>
        <p>NOVEMBER 20th 17:00 pm utc</p>
        <p>pre-sale starts in</p>
        <br />
        <br />
        <Timer />
      </div>
      <div className="right-div">
        <div className="twisted-frame"></div>
        <div className="numbers">
          <h2>The Numbers</h2>
          <p>
            <GiCheckMark />
            Mint Cost: <strong> 0.25 ETH + GAS</strong>
          </p>
          <p>
            <GiCheckMark />
            Max Supply: <strong>8,888</strong>
          </p>
          <p>
            <GiCheckMark />
            Max Mint per order: <strong>2 NFT</strong>
          </p>
          <p>
            <GiCheckMark />
            Presale Supply: <strong>8838</strong>
          </p>
          <p>
            <GiCheckMark />
            Giveaway Supply: <strong>50</strong>
            <br />
            <p>(reserved for contest)</p>
          </p>
          <p>
            <GiCheckMark />
            Royalty Fees: <strong>3%</strong>
          </p>
          <p>
            <GiCheckMark />
            Token Type: <strong>ERC-721</strong>
          </p>
          <p>
            <GiCheckMark />
            File Hosting: <strong>IPFS</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MintComponent;
