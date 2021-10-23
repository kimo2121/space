import React from "react";
import MintComponent from "../MintComponent/MintComponent";
import "./home.css";
import cyan_line from "../../assets/images/cyan-line.png";
import purple_line from "../../assets/images/purple-line.png";
import Welcome from "../Welcome/Welcome";
import Rarity from "../Rarity/Rarity";
import Roadmap from "../Roadmap/Roadmap";
import StandOut from "../StandOut/StandOut";
import Team from "../Team/Team";
import CustomizedAccordions from "../FAQ/FAQ";
import Footer from "../Footer/Footer";
import astronaut from "../../assets/images/astronaut.png";
import flying_bull from "../../assets/images/flying-bull.png";
import rocket_bull from "../../assets/images/rocket-bull.png";
import SliderComponent from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <img src={astronaut} alt="" />
      </div>
      <MintComponent />
      <img className="divider-home" src={cyan_line} alt="" />
      <Welcome />
      <SliderComponent />
      <Rarity />
      <img className="divider-home" src={purple_line} alt="" />
      <div className="road-stand-background">
        <Roadmap />
        <StandOut />
      </div>
      <Team />
      <div className="footer-background">
        <img className="footer-background-1st" src={flying_bull} alt="" />
        <CustomizedAccordions />
        <Footer />
        <img className="footer-background-2nd" src={rocket_bull} alt="" />
      </div>
    </div>
  );
};

export default Home;
