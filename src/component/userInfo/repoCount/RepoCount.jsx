import React, { Component } from "react";
import ExtraInfo from "../../extraInfo/ExtraInfo";
import "./RepoCount.css"
import branchIcon from "../../../assets/icons/code-branch-solid.svg";

export default class RepoCount extends Component {

    render() {
        return (
            <div className={"repo-count"}>

                <p>Total Repositories</p>

                <div className={"extra-info-wrapper"}>
                    <ExtraInfo icon={branchIcon} text={this.props.count}/>
                </div>
                
            </div>
        );
    }
}