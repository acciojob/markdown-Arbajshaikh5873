import React, { useState } from "react";
import "../styles/index.css";
import "../styles/App.css";

function App() {
  const [text, setText] = useState();
  function updateInput(event) {
    setText(event.target.value);
  }
  return (
    <div
      className="card-container app"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      <div className="card" style={{ width: "50%", height: "100vh" }}>
        <textarea value={text} onChange={updateInput} />
      </div>
      <div
        className="card"
        style={{ width: "50%", backgroundColor: "#999292ff", height: "100vh" }}
      >
        {text}
      </div>
    </div>
  );
}

export default App;
