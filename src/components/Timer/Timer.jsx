import React from "react";
import "./styles.css";
import FlipCountdown from "@rumess/react-flip-countdown";

const Timer = () => {
  return <FlipCountdown hideYear hideMonth endAt={"2021-11-20 17:00:00"} />;
};
export default Timer;
