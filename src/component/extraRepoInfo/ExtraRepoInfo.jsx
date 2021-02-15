import React, { Component } from "react";
import "./ExtraRepoInfo.css"

export default class ExtraRepoInfo extends Component {
    render() {
        return (
            <div className={"extra-info"}>
                <img className={"icon-info"} src={this.props.icon}/>
                <span>{this.props.text}</span>
            </div>
        );
    }
}