import React from "react";
import ReactDOM from "react-dom/client";

const number=100;
const Header=()=>(<h1>{number+ 10}Hello I am React Functional Component
{console.log("My name is Rachitha")}</h1>)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>)




