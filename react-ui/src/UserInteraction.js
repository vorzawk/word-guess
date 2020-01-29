import React from "react";

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
          Good job! Your answer is correct{" "}
          <span role="img" aria-label="smiling face">
            😄
          </span>
        </div>
      );
    }
    /* Submitted response is incorrect */
    return (
      <div className="userInteractions">
        Incorrect answer{" "}
        <span role="img" aria-label="slightly frowning face">
          🙁
        </span>
        <div className="userOptions">
          <button onClick={() => this.setState(this.initialState)}>
            Try Again
          </button>
          <button onClick={() => this.setState({ isAnsRequested: true })}>
            Show answer
          </button>
        </div>
      </div>
    );
  }
}

export default UserInteraction;
