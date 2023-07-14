import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.item.name}</h2>
        <img src={props.item.imgURL} alt="" />
      </div>
      <div className="bottom">
        <p>{props.item.liked}</p>
        <p>{props.item.year}</p>
      </div>
    </div>
  );
};

export default Card;
