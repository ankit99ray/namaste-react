
const structure = React.createElement(
    "div", 
    {id: "parent"}, 
    [
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "I'm h1"), 
        React.createElement("h2", {}, "I'm h2")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1", {}, "I'm h1 child2"), 
        React.createElement("h2", {}, "I'm h2 child2")
    ])
    ]
);


const heading = React.createElement("h1", {id : "heading"}, "Hello world from react");

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(structure);