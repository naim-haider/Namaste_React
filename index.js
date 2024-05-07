const content = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "hey I am a h1 tag from react"),
    React.createElement("h2", {}, "hey I am a h2 tag from react")
  )
);

const heading = React.createElement("h1", {}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
