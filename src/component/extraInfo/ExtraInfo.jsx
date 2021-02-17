import React, { Component } from "react";
import "./ExtraInfo.css"

export default class ExtraInfo extends Component {
    render() {
        return (
            <div className={"extra-info"}>
                <img className={"icon-info"} src={this.props.icon}/>
                <span>{this.props.text}</span>
            </div>
        );
    }
}