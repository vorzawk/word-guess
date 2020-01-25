import React from "react";

const Card = props => {
  const clue = props.example.replace(props.word, "______");
  return (
    <div className="card">
      <p>Guess one word for </p>
      <p className="prompt">
        <em>{props.prompt}</em>
      </p>
      <p className="clue"> {clue} </p>
      <div>
        <form>
          <input id="response" type="text" name="response" />
          <input type="button" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Card;
