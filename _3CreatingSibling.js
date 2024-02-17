import React from "react";
import ReactDOM from "react-dom";

/*How can we create below type of structure using react->

<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h1>I am anotherh1 tag</h1>
        
    </div>
<div>

*/


//here parent is the object and when we are writing resut.render(parent) then parent object is being converted into an html element
const parent=React.createElement(
    "div",
{id:"parent"},
React.createElement(
    "div",
    {id:"child"}
    ,[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h1",{},"I am another h1 tag")]
    )
)

const result=ReactDOM.createRoot(document.querySelector("body"));
result.render(parent);
