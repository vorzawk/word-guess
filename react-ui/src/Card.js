import React from "react";

const Prompt = props => {
  return (
    <p className="prompt">
      <em>{props.prompt}</em>
    </p>
  );
};

const Clue = props => {
  let clue = props.example.replace(props.word, "______");
  console.log(clue);
  return <p className="clue"> {clue} </p>;
};

const Form = () => {
  return (
    <div>
      <form>
        <input type="text" name="response" />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
};

const Card = props => {
  return (
    <div className="card">
      <p>Guess one word for </p>
      <Prompt prompt={props.prompt} />
      <Clue example={props.example} />
      <Form />
    </div>
  );
};

export default Card;
