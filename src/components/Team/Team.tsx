import React from "react";
import Member from "./Member";
import "./team.css";
import space_rocket1 from "../../assets/images/space-rocket1.png";
import space_rocket2 from "../../assets/images/space-rocket2.png";
import space_rocket3 from "../../assets/images/space-rocket3.png";
import space_rocket4 from "../../assets/images/space-rocket4.png";

const Team = () => {
  return (
    <div id="Team" className="team">
      <h1>Meet the movers and shakers behind the SpaceBulls</h1>
      <p className="team-p">
        The SpaceBulls was established by a squad that are devoted to NFTs.
      </p>
      <p className="team-p">
        These highly experienced crew created the marvelous world of the
        SpaceBulls.
      </p>
      <div className="members">
        <Member
          className="each-member"
          name="Name"
          description="All the SpaceBull NFT artworks are created by artists using best tech"
          img={space_rocket1}
        />
        <Member
          className="each-member"
          name="Name"
          description="All the SpaceBull NFT artworks are created by artists using best tech"
          img={space_rocket2}
        />
        <Member
          className="each-member"
          name="Name"
          description="All the SpaceBull NFT artworks are created by artists using best tech"
          img={space_rocket3}
        />
        <Member
          className="each-member"
          name="Name"
          description="All the SpaceBull NFT artworks are created by artists using best tech"
          img={space_rocket4}
        />
      </div>
    </div>
  );
};

export default Team;
