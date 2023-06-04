import React from 'react';
import '../style.css';

export default function Die(props) {
    return (
        <div className="die">
            <h1 className={props.isHeld ? 'clicked': ""} onClick={() => props.isClicked(props.id)}>{props.number}</h1>
        </div>
    )
}