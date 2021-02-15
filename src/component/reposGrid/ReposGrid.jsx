import React, { Component } from "react";
import RepoCard from "../repoCard/RepoCard";
import "./ReposGrid.css";

export default class ReposGrid extends Component {

    render() {

        let repoCardProps = {
            repoName: "awesome-made-by-brazilians mm mmm mmm mmm mm mm mm mm mm mm",
            repoDescription: "🇧🇷 A collection of amazing open source projects built by brazilian developers" + 
                "mmmmmmmm mmm mmmmmm mm mmmm mm mmmmmmm m mmm mmmmmmm mm mmm mmm mmm mm mm mm mm mm mm mmm mmmm",
            stargazersCount: 993,
            forksCount: 76,
            language: "CoffeeScript"
        } 

        let repos = [];
        for(let i=0 ; i < 13; i++) {
            repos.push(
                <div className={"repo-card-wrapper"} >
                    <RepoCard {...repoCardProps} />
                </div>
            );
        }

        return (
            <div className={"page-content-container grid-repos"}>
                {repos}
            </div>
        );
    }
}