import React, { Component } from "react";
import RepoCard from "../repoCard/RepoCard";
import "./ReposGrid.css";
import { getResponse, STATUS_OK } from "../../utils/apiUtils";

const MAX_REPO_PAGES = process.env.REACT_APP_MAX_REPO_PAGES_QTY || 30;

export default class ReposGrid extends Component {

    state = {
        repos: []
    }

    render() {
        let {repos} = this.state;

        let reposComponents = [];
        for(let i=0 ; i < repos.length; i++) {
            let repo = repos[i];

            reposComponents.push(
                <div className="repo-card-wrapper clickable" key={i} >
                    <RepoCard {...repo} />
                </div>
            );
        }

        return (
            <div className="page-content-container grid-repos" >
                {reposComponents}
            </div>
        );
    }

    async componentDidMount() {

        let allRepos = [];

        try{
            let page = 1;

            while(page <= MAX_REPO_PAGES) {
                let { status, body } = await getResponse(`${this.props.reposUrl}?page=${page++}`);
                    
                if(status !== STATUS_OK){
                    console.log(body);
                    break;
                }

                let reposPage = body.map(repoAPI => this.extractRepoInfo(repoAPI));

                if(reposPage.length === 0){
                    break;
                }

                allRepos = [...allRepos, ...reposPage];
            }

        } catch (err) {
            console.log(err);
        }
            
        this.setState({repos: allRepos});
    }

    extractRepoInfo(repoAPI) {
        let { 
            name, 
            description, 
            stargazers_count, 
            forks_count, 
            language, 
            html_url 
        } = repoAPI;

        return {
            repoName: name,
            repoDescription: description,
            stargazersCount: stargazers_count,
            forksCount: forks_count,
            language: language,
            htmlUrl: html_url
        };
    }
}