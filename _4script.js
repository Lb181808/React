import React from "react";
import ReactDOM from "react-dom/client";


//Rect Elements-> React.createElement/heading is an object and when we render it to DOM then it becomes the HTML Element.
const heading=React.createElement("h1",{id:"heading"},"Namaste React 🚀");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // it will replace everything that is inside root with heading.



// we can also create elements inside hsx->
const jsxHeading=<h1 className="hello">Namaste React using JSX 🚀</h1>     // here jsxHeading is an React Element which is an object.
root.render(jsxHeading);



//REACT COMPONENT-> Everything in react is component
// There are two types of components->
// i) Class Based Components (old way)
// ii)Functional Component (new way)


//React Function component is just a normal javascript function which returns some jsx. See below
const HeadingComponent=()=>{
    return <h1>Namaste React Functional Component</h1>
}
// here we will see how to render a React Functional Component->
const root1=ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent/>)



// if we want to insert one react component inside another react component then see below->
const Heading2=()=>{
return <h2>Namaste React</h2>
}
const HeadingComponent1=()=>{
    return (
    <div>
        <Heading2/>
    <h1>Namaste React Functional Component</h1>
    </div>
    );
}
// here we will see how to render a React Functional Component->
const root2=ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent1/>)



/**
 * ? We can also use any javascript Expression like addition , substraction, console.log  inside jsx but it should be inside curly braces-> See Below Code
 Similarly we can also insert React element inside react functional Component
* */
const jsxHello=<h1>Hello How are you</h1>
let name="lalit";
const HeadingComponent2=()=>{
    return (
    <div>
        <h2>{5+7}</h2>
        <h2>{console.log("Hello")}</h2>
        <h2>{name}</h2>
        {jsxHello}
        <Heading2/>
    <h1>Namaste React Functional Component</h1>
    </div>
    );
}
root1.render(<HeadingComponent2/>)

