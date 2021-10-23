import React from "react";
import "./team.css";
interface memberTypes {
  className?: string;
  name?: string;
  description?: string;
  img?: string;
}

const Member: React.FC<memberTypes> = ({
  name,
  className,
  description,
  img,
}) => {
  return (
    <div className={className}>
      <img src={img} alt="" />
      <h1>{name}</h1>
      <span>{description}</span>
    </div>
  );
};

export default Member;
