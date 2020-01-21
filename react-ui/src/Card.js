import React from "react";

const Card = props => {
  return (
    <div>
      <h3> Word 1 </h3>
      <p> {props.prompt} </p>
    </div>
  );
};

export default Card;
