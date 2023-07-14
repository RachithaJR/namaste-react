import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//To convert React Element to React Component make arrow function and capitalize
const jsxHeading=(<h1 className="head" tabIndex="5">
  Namaste React from JSX
  </h1>);
root.render(jsxHeading);

//React Component
//should always be in capital letter
//For rendering React component use <ComponentName/>
//with return
const ReactComponent=()=>{return <h1> Namaste React from React Functional Component</h1>}


//without return and {}
const ReactComponent2=()=><h1>React functional Component without Return keyword</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent2/>)
