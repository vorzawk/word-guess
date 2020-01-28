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

  onSubmit = () => {
    const { value } = this.state;
    this.props.handleSubmit(value);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="button" value="Submit" onClick={this.onSubmit} />
      </form>
    );
  }
}
class UserInteraction extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      isSubmitted: false,
      isCorrect: false,
      isAnsRequested: false
    };
    this.state = this.initialState;
  }

  handleSubmit = userResponse => {
    const isCorrect = userResponse.toLowerCase() === this.props.wordStr;
    const isSubmitted = true;
    this.setState({ isSubmitted, isCorrect });
  };

  requestAnswer = () => {
    this.setState({ isAnsRequested: true });
  };

  render() {
    if (this.state.isAnsRequested) {
      return (
        <div className="userInteractions">
          The correct answer is <strong>{this.props.wordStr}</strong>.
        </div>
      );
    }
    if (!this.state.isSubmitted) {
      return (
        <div className="userInteractions">
          <Form handleSubmit={this.handleSubmit} />
        </div>
      );
    }
    if (this.state.isCorrect) {
      return (
        <div className="userInteractions">
          Correct answer
          <span role="img" aria-label="smiling face">
            😄
          </span>
        </div>
      );
    }
    return (
      <div className="userInteractions">
        <div>
          Incorrect response
          <span role="img" aria-label="slightly frowning face">
            🙁
          </span>
        </div>
        <div className="userOptions">
          <button onClick={() => this.setState(this.initialState)}>
            Try Again
          </button>
          <button onClick={this.requestAnswer}>Show answer</button>
        </div>
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
