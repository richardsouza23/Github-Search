import React from "react";
import logo_horizontal from "../../assets/logo-horizontal.svg";
import left_arrow from "../../assets/icons/arrow-left-solid.svg";
import "./HeaderResult.css"


export default function HeaderResult({handleClickLogo, handleClickBack}) {

    return (
        <div className="header-result" >
            <div className="page-content-container header-container" >
                <img onClick={handleClickLogo} className="logo clickable" src={logo_horizontal} />
                <img onClick={handleClickBack} className="back-button" src={left_arrow} />
            </div>
        </div>
    );
}