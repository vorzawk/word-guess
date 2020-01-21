import React from "react";
import data from "./data.json";
import Card from "./Card";

const App = () => {
  return (
    <div className="App">
      <h1> Guess the words based on the prompts </h1>
      <Card prompt={data[0]["definition"]} />
      <Card prompt={data[1]["definition"]} />
    </div>
  );
};

export default App;
