import React from "react"
import "./App.css"
import TimeDisplay from "./TimeDisplay"
function App() {
  return (
    <div>
      <div className = "logo">
        <div className = "logo-top">pomodoro</div>
        <div className = "logo-bottom">the timer</div>
      </div>
      <TimeDisplay timeToFocus = "24:59"/>
    </div>
  );
}

export default App;
