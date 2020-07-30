import React from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#5a5a5a",
      }}
    >
      <h1>A Simple Scraper</h1>
      <p>Using React and Service Workers</p>
      <p>
        Go to Inspect (ctrl+shift+i) and navigate to application tab to check
        the ServiceWorker
      </p>
      <p>then check the console to see the output</p>
      <h2>Developed By: Jayraj Shah</h2>
    </div>
  );
}

export default App;
