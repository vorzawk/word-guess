import React from "react";
import UserInteraction from "./UserInteraction";

const Prompt = props => {
  return (
    <div className="prompt">
      <em>{props.prompt}</em>
    </div>
  );
};

class Clue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
  }

  render() {
    const clue = this.props.example.replace(this.props.wordStr, "______");
    if (this.state.isClicked) {
      return <div className="clue"> {clue} </div>;
    }
    return (
      <div
        className="clue-prompt"
        onClick={() => this.setState({ isClicked: true })}
      >
        Click here for a clue
      </div>
    );
  }
}

class Card extends React.Component {
  prompt = this.props.word["definition"];
  example = this.props.word["example"];
  wordStr = this.props.word["string"];

  render() {
    return (
      <div className="card">
        <p>Guess one word for </p>
        <Prompt prompt={this.prompt} />
        <Clue example={this.example} wordStr={this.wordStr} />
        <UserInteraction wordStr={this.wordStr} />
      </div>
    );
  }
}

export default Card;
