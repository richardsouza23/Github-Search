import React, { Component } from "react";
import logo_horizontal from "../../assets/logo-horizontal.svg";
import left_arrow from "../../assets/icons/arrow-left-solid.svg";
import "./HeaderResult.css"

export default class HeaderResult extends Component {

    render() {
        return (
            <div className={"header-result"}>
                <div className={"page-content-container header-container"}>
                    <a><img className={"logo"} src={logo_horizontal} /></a>
                    <a><img className={"back-button"} src={left_arrow} /></a>
                </div>
            </div>
        );
    }
}