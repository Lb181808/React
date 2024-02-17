//React.createElement take 3 arguement. First one is the element which you want to create, second on the object that is the place where we will give attribute to our tag example we want to give id to the tag we are creating , and the third one is whatever you want to write inside an element.
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World From React");
//console.log(heading)=> it will return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=_1helloWorldInReact.d2493182.js.map
