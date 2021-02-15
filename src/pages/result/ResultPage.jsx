import React, { Component } from "react";
import RepoCard from "../../component/repoCard/RepoCard";
import "./ResultPage.css";


export default class ResultPage extends Component {

    render() {
        return (
            <div>
                <div className={"repo-card-wrapper"} >
                    <RepoCard/>
                </div>
            </div>
        );
    }
}