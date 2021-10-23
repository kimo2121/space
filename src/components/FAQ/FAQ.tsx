import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { FAQTypes } from "./types";
import { AiOutlineMinus } from "react-icons/ai";
import arrow from "../../assets/images/arrow.png";
import "./FAQ.css";

const Accordion = withStyles({
  root: {
    textAlign: "left",
    fontSize: "16px",
    fontFamily: "Audiowide cursive",
    color: "white",
    borderRadius: "5px",
    fontWeight: "bolder",
    backgroundColor: "transparent",
    boxShadow: "0px 0px 4px 2px #00ffff",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "transparent",
    borderRadius: "5px",
    color: "white",
    margin: "30px 0",
    marginBottom: -1,
    minHeight: 89,
    paddingRight: "50px",
    "&$expanded": {
      minHeight: 89,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2.5),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions: React.FC = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="FAQ" className="faq-component">
      <h1>FAQ</h1>
      <div className="accordion-wrpper">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              className={
                expanded === "panel1"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel1" ? "arrow active" : "arrow"}
              />
              How many SpaceBulls will exist?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>How many SpaceBulls will exist?</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              className={
                expanded === "panel2"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel2" ? "arrow active" : "arrow"}
              />
              How much wiil one SpaceBulls NFT cost?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>How much wiil one SpaceBulls NFT cost?</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              className={
                expanded === "panel3"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel3" ? "arrow active" : "arrow"}
              />
              How many SpaceBulls can i own?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>How many SpaceBulls can i own?</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography
              className={
                expanded === "panel4"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel4" ? "arrow active" : "arrow"}
              />
              Which Ethereum wallets can i use for the mint?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Which Ethereum wallets can i use for the mint?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography
              className={
                expanded === "panel5"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel5" ? "arrow active" : "arrow"}
              />
              How do i sell my NFTs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>How do i sell my NFTs?</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography
              className={
                expanded === "panel6"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel6" ? "arrow active" : "arrow"}
              />
              Where can i see the SpaceBulls i’ve purchased?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Where can i see the SpaceBulls i’ve purchased?
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography
              className={
                expanded === "panel7"
                  ? "question-styles active"
                  : "question-styles"
              }
            >
              <img
                src={arrow}
                className={expanded === "panel7" ? "arrow active" : "arrow"}
              />
              How much will be the resale royalties?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>How much will be the resale royalties?</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default CustomizedAccordions;
