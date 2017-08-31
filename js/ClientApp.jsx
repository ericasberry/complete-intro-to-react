import React from "react";
import { render } from "react-dom";

// className instead of class because class is a reserved word
// in Javascript, and this is JSX ... not pure html
const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

render(<App />, document.getElementById("app"));
