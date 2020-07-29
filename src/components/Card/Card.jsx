import React from "react";
import "./Card.css";

const Card = ({ monster }) => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=120x180`}
        alt=""
      />
      <h1 style={{ fontSize: "23px" }}>{monster.name}</h1>
      <h2 style={{ fontSize: "16px" }}>{monster.email}</h2>
    </div>
  );
};

export default Card;
