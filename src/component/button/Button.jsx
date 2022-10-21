import React , { Component } from "react";
import "./Button.css"


export default function Button({label, onClick}) {

    return (
        <button className={"button"} onClick={onClick} >
            {label}
        </button>
    );
}