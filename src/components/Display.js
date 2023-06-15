import React from "react";

function Display(props) {
    return (
        <div>
            <p>Specialty: {props.hogs.specialty}</p>
            <p>Greased?: {props.hogs.greased}</p>
            <p>Weight: {props.hogs.weight} pounds</p>
            {/* <p>{props.hogs.string}</p> */}
        </div>
    )
}

export default Display;