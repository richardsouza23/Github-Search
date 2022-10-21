import React from 'react';
import { identity } from 'ramda';
import "./Input.css";


export default function Input({
    placeholder,
    onChange = identity
}) {
    return (
        <div className="input-box" >
            <input 
                type="text"
                 placeholder={placeholder}
                 onChange={e => onChange(e.target.value)} />
        </div>
    );
}
