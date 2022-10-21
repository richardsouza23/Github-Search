import React from "react";
import "./RepoCard.css"
import ExtraInfo from "../extraInfo/ExtraInfo"
import starIcon from "../../assets/icons/star-solid.svg"
import branchIcon from "../../assets/icons/code-branch-solid.svg"
import fileCodeIcon from "../../assets/icons/file-code-solid.svg"
import { openUrlNewTab } from "../../utils/utils";



const RepoCard = ({ 
    name, 
    description, 
    stargazers_count, 
    forks_count, 
    language, 
    html_url 
}) => {

    return (
        <div className="repo-card" onClick={() => openUrlNewTab(html_url)} >

            <h4 className="repo-name" >{name}</h4>

            <div className="repo-description-wrapper" >
                <p>{description}</p>
            </div>

            <div className="extra-repo-info-wrapper" >
                <ExtraInfo icon={starIcon} text={stargazers_count} />
                <ExtraInfo icon={branchIcon} text={forks_count} />
                <ExtraInfo icon={fileCodeIcon} text={language} />
            </div>

        </div>
    );
}


export default RepoCard;