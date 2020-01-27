import React from "react";

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

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" />
      </form>
    );
  }
}

const Card = props => {
  const prompt = props.word["definition"];
  const example = props.word["example"];
  const wordStr = props.word["string"];
  return (
    <div className="card">
      <p>Guess one word for </p>
      <Prompt prompt={prompt} />
      <Clue example={example} wordStr={wordStr} />
      <Form />
    </div>
  );
};

export default Card;
