import React from "react";
import "./welcome.css";
import spaceMed from "../../assets/images/spaceMed.png";

const Welcome = () => {
  return (
    <div id="the-story" className="welcome">
      <div className="welcome-left">
        <img src={spaceMed} alt="" />
      </div>
      <div className="welcome-right">
        <p>Welcome to</p>
        <h2>the SpaceBulls</h2>
        <span>
          Ceaquidem que pratus moluptatus res ium quas quidele stibus. Nientur?
          Quiatiu mquatque cus volora vit doluptate sunt dolorum ernam eium vid
          quodi samet vercimil modit, consererum inus, ut option cor aciis rem
          eaqui nimusti occaborum hillestiae dolorerundit facienit, qui dit
          optat. Et quo magnatios quuntiusci ditisquae nis velit, sendesc illaut
          et qui blabo. Nam rem faces es et est, nonem restrum quia quatia eost,
          se dolupta tecatio. Nequi quia volorum fugias.
        </span>
      </div>
    </div>
  );
};

export default Welcome;
