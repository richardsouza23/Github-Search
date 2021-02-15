import React, { Component } from "react";
import RepoCard from "../../component/repoCard/RepoCard";
import ReposGrid from "../../component/reposGrid/ReposGrid";
import "./ResultPage.css";


export default class ResultPage extends Component {

    render() {
        return (
            <ReposGrid />
        );
    }
}