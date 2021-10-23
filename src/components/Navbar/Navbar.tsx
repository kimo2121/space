import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineTwitter } from "react-icons/ai";
import navLogo from "../../assets/images/logo.png";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { ReactComponent as Close } from "../../assets/images/close.svg";
import { Link } from "react-scroll";
const Navbar = () => {
  const [state, setstate] = useState(false);
  const showMenu = () => {
    setstate(!state);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={navLogo} alt="" />
      </div>
      <div className="nav-links">
        <Link smooth={true} duration={800} to="Mint" href="/">
          Mint
        </Link>
        <Link smooth={true} duration={800} to="the-story" href="/">
          The Story
        </Link>
        <Link smooth={true} duration={800} to="Milestones" href="/">
          Milestones
        </Link>
        <Link smooth={true} duration={800} to="Features" href="/">
          Features
        </Link>
        <Link smooth={true} duration={800} to="Team" href="/">
          Team
        </Link>
        <Link smooth={true} duration={800} to="FAQ" href="/">
          FAQ
        </Link>
      </div>
      <div className={state ? "mob-nav-links active" : "mob-nav-links"}>
        <Close onClick={showMenu} className="close-icon" />
        <Link
          onClick={showMenu}
          smooth={true}
          duration={800}
          to="Mint"
          href="/"
        >
          Mint
        </Link>
        <Link
          onClick={showMenu}
          smooth={true}
          duration={800}
          to="the-story"
          href="/"
        >
          The Story
        </Link>
        <Link
          onClick={showMenu}
          smooth={true}
          duration={800}
          to="Milestones"
          href="/"
        >
          Milestones
        </Link>
        <Link
          onClick={showMenu}
          smooth={true}
          duration={800}
          to="Features"
          href="/"
        >
          Features
        </Link>
        <Link
          onClick={showMenu}
          smooth={true}
          duration={800}
          to="Team"
          href="/"
        >
          Team
        </Link>
        <Link onClick={showMenu} smooth={true} duration={800} to="FAQ" href="/">
          FAQ
        </Link>
        <div onClick={showMenu} className="mob-ext-links">
          <a href="/">
            <AiOutlineTwitter />
          </a>
          <a onClick={showMenu} href="/">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>
      <div className="combination">
        <div className="ext-links">
          <a href="/">
            <AiOutlineTwitter />
          </a>
          <a href="/">
            <AiOutlineTwitter />
          </a>
        </div>
        <button className="connect-btn">Connect</button>
        <Menu onClick={showMenu} className="menu-icon" />
      </div>
    </div>
  );
};

export default Navbar;
