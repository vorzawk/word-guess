import React from "react";
import data from "./data.json";
import Card from "./Card";

class App extends React.Component {
  renderCard(i) {
    let word = data[i];
    return <Card word={word} />;
  }

  render() {
    return (
      <div className="App">
        <h1> Guess the words </h1>
        <hr />
        <div className="card-grid">
          {this.renderCard(0)}
          {this.renderCard(1)}
          {this.renderCard(2)}
          {this.renderCard(3)}
          {this.renderCard(4)}
          {this.renderCard(5)}
          {this.renderCard(6)}
          {this.renderCard(7)}
          {this.renderCard(8)}
        </div>
      </div>
    );
  }
}

export default App;
