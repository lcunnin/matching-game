import React from "react";
import "./Card.css";

const url = "https://source.unsplash.com/category/animals";

export default function Card(props) {
  return (
    <div
      className={`animal-card ${props.isFlipped ? "flipped" : ""} `}
      onClick={() => props.flipCard(props.index)}
    >
      <div className="inside-card">
        <div className="frontside">
          <img
            src={`${url}/${props.animal.id}.png`}
            alt="animal"
            height="200"
            width="150"
          />
        </div>
        <div className="backside" />
      </div>
    </div>
  );
}
