import React from "react";
import ReactDOM from "react-dom/client";

const number=100;
const Header=()=>(<React.Fragment><h1>{0 +1} Hello I am React Functional Component
{console.log("My name is Rachitha")}</h1><div> JSX can have single parent</div></React.Fragment>)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)




