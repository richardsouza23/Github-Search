import React, { Component } from "react";
import RepoCard from "../repoCard/RepoCard";
import "./ReposGrid.css";
import {getJson} from "../../utils/apiUtils";

const MAX_REPO_PAGES = process.env.REACT_APP_MAX_REPO_PAGES_QTY || 30;

export default class ReposGrid extends Component {

    state = {
        repos: [],
        reposFetched: false
    }

    render() {
        let {repos} = this.state;

        let reposComponents = [];
        for(let i=0 ; i < repos.length; i++) {
            let repo = repos[i];

            reposComponents.push(
                <div className={"repo-card-wrapper"} key={i} >
                    <RepoCard {...repo} />
                </div>
            );
        }

        return (
            <div className={"page-content-container grid-repos"}>
                {reposComponents}
            </div>
        );
    }

    async componentDidMount() {

        //FIXME: Remove this verification and reposFetched
        if(!this.state.reposFetched){

            let allRepos = [];

            try{
                let page = 1;

                while(page <= MAX_REPO_PAGES) {
                    let reposFullResponsePage = await getJson(`${this.props.reposUrl}?page=${page++}`);
                    let reposPage = await reposFullResponsePage.map(repoAPI => this.extractRepoInfo(repoAPI));

                    if(reposPage.length === 0){
                        break;
                    }

                    allRepos = [...allRepos, ...reposPage];
                }

            } catch (err) {
                console.log(err);
            }
            
            this.setState({repos: allRepos, reposFetched: true});
        }
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