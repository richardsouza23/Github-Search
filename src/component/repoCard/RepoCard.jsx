import React, { Component } from "react";
import "./RepoCard.css"
import ExtraRepoInfo from "../extraRepoInfo/ExtraRepoInfo"
import starIcon from "../../assets/icons/star-solid.svg"
import branchIcon from "../../assets/icons/code-branch-solid.svg"
import fileCodeIcon from "../../assets/icons/file-code-solid.svg"
import externalLinkIcon from "../../assets/icons/external-link-alt-solid.svg"


export default class RepoCard extends Component {

    render() {
        return (
            <div className={"repo-card"} >

                <h4 className={"repo-name"} >awesome-made-by-brazilians mm mmm mmm mmm mm mm mm mm mm mm</h4>

                <div className={"repo-description-wrapper"} >
                    <p>🇧🇷 A collection of amazing open source projects built by brazilian developers 
                        mmmmmmmm mmm mmmmmm mm mmmm mm mmmmmmm m mmm mmmmmmm mm mmm mmm mmm mm mm mm mm mm mm mmm mmmm </p>
                </div>

                <div className={"extra-repo-info-wrapper"}>

                    <ExtraRepoInfo icon={starIcon} text={"40"} />
                    <ExtraRepoInfo icon={branchIcon} text={"50"} />
                    <ExtraRepoInfo icon={fileCodeIcon} text={"JavaScript"} />
                    <ExtraRepoInfo icon={externalLinkIcon} text={""} />
                </div>

            </div>
        );
    }
}