import React from "react";
import logo_horizontal from "../../assets/logo-horizontal.svg";
import left_arrow from "../../assets/icons/arrow-left-solid.svg";
import "./HeaderResult.css"

export default function HeaderResult(props) {

    let { handleClick } = props;

    return (

        <div className="header-result" >
            <div className="page-content-container header-container" >
                <img onClick={handleClick} className="logo clickable" src={logo_horizontal} />
                <img onClick={handleClick} className="back-button" src={left_arrow} />
            </div>
        </div>
    );
}