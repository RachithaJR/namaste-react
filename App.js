import React from "react";
import ReactDOM from "react-dom/client";

//React Element used inside Component
// const title=<h1>Namaste React using JSX</h1>;
// const HeadingComponent=()=>(
// <div>
// {title}
// <h1>Namaste React Using Functional Component</h1>
// </div>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>)

//React Element inside React Element
// const title=<h1>Namaste React using JSX</h1>;
// const headingComponent=(
// <div>
// {title}
// <h1>Namaste React Using Functional Component</h1>
// </div>);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(headingComponent)

//React Component inside React Element
const HeadingComponent=()=>(<div>
  <h1>Namaste React Using Functional Component</h1>
  </div>);
const title=<h1><HeadingComponent/>Namaste React using JSX</h1>;



//infinite loop title and HeadingComponent is used insid eeach other
//if react element used before defining then inifinite loop
// const HeadingComponent=()=>(<div>
//   {title}
//   <h1>Namaste React Using Functional Component</h1>
//   </div>);
// const title=<h1><HeadingComponent/>Namaste React using JSX</h1>;

//if component is used before defining then results in error
// ReferenceError: Cannot access 'HeadingComponent' before initialization

// const title=<h1><HeadingComponent/>Namaste React using JSX</h1>;
// const HeadingComponent=()=>(<div>
//   {title}
//   <h1>Namaste React Using Functional Component</h1>
//   </div>);



const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(title)




