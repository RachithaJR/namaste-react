import React from "react";
import ReactDOM from "react-dom/client";
//React.CreateElement=> JS object => render(JS object)=> HTML 
const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])])
// console.log(parent);

//JSX=>Babel transpiles JSX to React.CreateElement React Object=> React.CreateElement=> JS object => render(JS object)=> HTML
const jsxHeading=<h1 className="head">
  Namaste React from JSX
  </h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// root.render(<h1 className="head">
// This is same as giving JSX object directly
// </h1>);
// console.log(jsxHeading);
