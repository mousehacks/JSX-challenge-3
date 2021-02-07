import React from "react";
import ReactDOM from "react-dom";

const date = new Date();

const greetingStyle = {
  color: "red"
};

var greeting = "Hello";

if ((date.getHours() >= 0) & (date.getHours() <= 12)) {
  greeting = "Good morning";
  greetingStyle.color = "red";
} else {
  if ((date.getHours() > 12) & (date.getHours() <= 18)) {
    greeting = "Good afternoon";
    greetingStyle.color = "purple";
  } else {
    greeting = "Good night";
    greetingStyle.color = "blue";
  }
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={greetingStyle}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
