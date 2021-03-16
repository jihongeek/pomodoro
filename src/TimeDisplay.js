import React from "react"
import "./TimeDisplay.css"
function TimeDisplay(props) {
    return (
        <div>
            {props.timeToFocus}
        </div>
    );
}

export default TimeDisplay