import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardContainer;
