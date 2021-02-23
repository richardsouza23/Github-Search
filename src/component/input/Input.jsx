import React from 'react';
import "./Input.css";

export default function Input(props) {
    return (
        <div className="input-box" >
            <input type="text" placeholder={props.placeholder} />
        </div>
    );
}
