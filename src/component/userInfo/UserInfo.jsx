import React, { Component } from "react";
import RepoCount from "./repoCount/RepoCount";
import UserDetails from "./userDetails/UserDetails";
import "./UserInfo.css";


export default class UserInfo extends Component {
    render() {
        const { userAvatarUrl, userDetails, repoCount } = this.props;

        return (
            <div className={"user-info"} >

                <div className={"user-photo-container"} >
                    <img src={userAvatarUrl} />
                </div>

                <div className={"user-details-container"} >
                    <UserDetails {...userDetails} />
                </div>

                <div className={"repo-count-container"} >
                    <RepoCount count={repoCount} />
                </div>

            </div>
        );
    }
}