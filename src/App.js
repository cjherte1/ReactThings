import React, { useState } from "react";
import "./App.css";
import MyButton from "./MyButton.js";

function App() {
  console.log("1");
  const [num, setNum] = useState(0);

  function handleClick(number) {
    setNum(number);
  }

  function handleMoveClick(e) {
    var tpos = Math.floor(Math.random() * 80);
    var lpos = Math.floor(Math.random() * 80);
    e.target.style.top = tpos.toString() + "%";
    e.target.style.left = lpos.toString() + "%";
  }

  return (
    <div className="App">
      <div className="Banner"> Buttons </div>
      <div className="ButtonContainer">
        <MyButton num={1} onClick={() => handleClick(1)} />
        <MyButton num={2} onClick={() => handleClick(2)} />
        <MyButton num={3} onClick={() => handleClick(3)} />
        <MyButton num={4} onClick={() => handleClick(4)} />
        <MyButton num={5} onClick={() => handleClick(5)} />
        <MyButton num={6} onClick={() => handleClick(6)} />
      </div>
      <div className="PlayArea">
        <div className="Output"> {num} </div>
        <button className="MovingButton" onClick={handleMoveClick}>
          CLICK ME
        </button>
      </div>
    </div>
  );
}

export default App;
