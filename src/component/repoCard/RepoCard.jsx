import React, { Component } from "react";
import "./RepoCard.css"
import ExtraInfo from "../extraInfo/ExtraInfo"
import starIcon from "../../assets/icons/star-solid.svg"
import branchIcon from "../../assets/icons/code-branch-solid.svg"
import fileCodeIcon from "../../assets/icons/file-code-solid.svg"
import externalLinkIcon from "../../assets/icons/external-link-alt-solid.svg"


export default class RepoCard extends Component {

    render() {
        let { 
            repoName, 
            repoDescription, 
            stargazersCount, 
            forksCount, 
            language, 
            htmlUrl 
        } = this.props;

        return (
            <div className={"repo-card"} >

                <h4 className={"repo-name"} >{repoName}</h4>

                <div className={"repo-description-wrapper"} >
                    <p>{repoDescription}</p>
                </div>

                <div className={"extra-repo-info-wrapper"}>
                    <ExtraInfo icon={starIcon} text={stargazersCount} />
                    <ExtraInfo icon={branchIcon} text={forksCount} />
                    <ExtraInfo icon={fileCodeIcon} text={language} />
                    <ExtraInfo icon={externalLinkIcon} isLink={true} link={htmlUrl} />
                </div>

            </div>
        );
    }
}