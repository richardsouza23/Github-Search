import React from "react";
import "./ExtraInfo.css"

export default function ExtraInfo({icon, text, isLink, link}) {
        
    let img = <img className={"icon-info"} src={icon}/>;
    let imageLink = isLink ? (<a href={link} target="_blank" >{img}</a>) : img ;

    return (
        <span className="extra-info">
            {imageLink}
            <span>{text}</span>
        </span>
    );
}