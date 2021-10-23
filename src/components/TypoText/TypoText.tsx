import React from "react";
import "./styles.css";

interface TypoTextTypes {
  className?: string;
  text?: string;
  label?: string;
}

const TypoText: React.FC<TypoTextTypes> = ({ className, text, label }) => {
  return (
    <div className={className}>
      <h1>{label}</h1>
      <span></span>
      <p>{text}</p>
    </div>
  );
};

export default TypoText;
