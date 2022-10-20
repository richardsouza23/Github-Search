import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import RepoCard from "../repoCard/RepoCard";
import "./ReposGrid.css";
import { getRepoList } from "../../state/selectors";
import { fetchUserReposAction } from "../../state/actions";
import { identity, map } from "ramda";


const enhance = connect(
    (state) => ({
        repoList: getRepoList(state)
    }),
    (dispatch) => ({
        fetchRepos: () => dispatch(fetchUserReposAction())
    })
);


const ReposGrid = ({repoList, fetchRepos = identity}) => {

    useEffect(() => {
        if(!repoList){
            fetchRepos();
        }

    }, [repoList])

    const reposComponents = !repoList ? 
        null : 
        map(
            (repo) => ( 
                <div className="repo-card-wrapper clickable" key={repo.id} >
                    <RepoCard {...repo} />
                </div>
            ),
            repoList
        );

    return (
        <div className="page-content-container grid-repos" >
            {reposComponents}
        </div>
    );
    
}
 


export default enhance(ReposGrid);