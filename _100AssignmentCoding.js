import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement(
//     'div',
//     { className: 'title' },
//     [React.createElement('h1', null, 'First h1'),
//     React.createElement('h2', null, 'Second h2'),
//     React.createElement('h3', null, 'Third h3')
// ]);
  
//   const root = ReactDOM.createRoot(document.getElementById('result'));
//   root.render(element);





// Using jSX->
// const element=(
//     <div className="title">
//         <h1>First h1</h1>
//         <h1>Second h1</h1>
//         <h1>Third h1</h1>
//     </div>
// )
// const root=ReactDOM.createRoot(document.querySelector("#result"));
// root.render(element);





// Functional Component of the same JSX->
// const FComponent=()=>{
//     return (
//         <div className="title">
//             <h1>First</h1>
//             <h2>Second</h2>
//             <h3>Third</h3>
//         </div>
//     )
// }
// const root=ReactDOM.createRoot(document.querySelector("#result"));
// root.render(<FComponent />)




// const InnerComponent=()=>{
//     return (
//         <div>
//             <p>This is the inner component</p>
//         </div>
//     );
// };
// const OuterComponent=()=>{
//     return (
//         <div>
//             <h1>This is the outer Component.</h1>
//             <InnerComponent />
//         </div>
//     )
// }
// const root=ReactDOM.createRoot(document.querySelector("#result"));
// root.render(<OuterComponent />)






// In simple terms:

// {TitleComponent} is like holding a sign pointing to the component. It doesn't directly render the component but allows you to reference it within JavaScript code.
// <TitleComponent /> and <TitleComponent></TitleComponent> is like a button that you press to immediately render the component. It directly renders the component as a JSX element.
// So, {TitleComponent} is for referring to the component in JavaScript expressions, while <TitleComponent /> is for actually rendering the component as part of your JSX code.



const Elements=()=>{
    return (
        <div className="container">
            <div className="logo">
            <img id="logo-img" src="https://cdn-icons-png.flaticon.com/128/14354/14354635.png" />
            </div>
            
            
            <div className="search">
            <input type="search" id="search"/>
            </div>

            <div className="userIcon">
            <img id="userIcon-img" src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" />
            </div>
            </div>
        
    )
}

const Header=()=>{
    return(
        <Elements></Elements>
    )
}

const root=ReactDOM.createRoot(document.querySelector("body"));
root.render(<Header></Header>)