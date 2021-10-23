import React from "react";
import TypoText from "../TypoText/TypoText";
import "./roadmap.css";
import road_vert_line1 from "../../assets/images/road-vert-line1.png";
import road_vert_line2 from "../../assets/images/road-vert-line2.png";
const Roadmap = () => {
  return (
    <div id="Milestones" className="roadmap">
      <h1>Roadmap</h1>
      <p className="roadmap-p">
        Ceaquidem que pratus moluptatus res ium quas quidele stibus.
      </p>
      <p className="roadmap-p">
        Nientur? Quiatiu mquatque cus volora vit doluptate sunt dolorum ernam
        eium vid
      </p>
      <p className="roadmap-p">
        quodi samet vercimil modit, consererum inus, ut option cor aciis rem
        eaqui nimusti
      </p>
      <div className="road-container">
        <div className="left-roads">
          <TypoText
            className="road left"
            label="Milestone 1"
            text="Ceaquidem que pratus moluptatus res ium quas quidele stibus.
"
          />
          <TypoText
            className="road left"
            label="Milestone 3"
            text="Ceaquidem que pratus moluptatus res ium quas quidele stibus.
"
          />
          <TypoText
            className="road left"
            label="Milestone 5"
            text="Ceaquidem que pratus moluptatus res ium quas quidele stibus.
"
          />
        </div>
        <div className="roads-divider">
          <img src={road_vert_line1} alt="" />
          <img src={road_vert_line2} alt="" />
          <img src={road_vert_line1} alt="" />
          <img src={road_vert_line2} alt="" />
        </div>
        <div className="right-roads">
          <TypoText
            className="road right"
            label="Milestone 2"
            text="Ceaquidem que pratus moluptatus res ium quas quidele stibus.
"
          />
          <TypoText
            className="road right"
            label="Milestone 4"
            text="Ceaquidem que pratus moluptatus res ium quas quidele stibus.
"
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
