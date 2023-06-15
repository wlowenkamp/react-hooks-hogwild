import React from 'react';
import Display from "./Display";

function PigTile(props) {
    return(
        <div key={props.hogs.name} className="pigTile">
         	<img src={props.hogs.image} alt={props.hogs.name} />
        <p>{props.hogs.name}</p>
        {props.hogs.map((hogs) => (
        <Display hogs={props.hogs}/>
        ))}
        </div>
    )
}

export default PigTile;