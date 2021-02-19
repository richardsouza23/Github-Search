import React, { Component } from "react";
import RepoCount from "./repoCount/RepoCount";
import UserDetails from "./userDetails/UserDetails";
import "./UserInfo.css";


export default class UserInfo extends Component {
    render() {
        return (
            <div className={"user-info"} >

                <div className={"user-photo-container"} >
                    <img src="https://avatars.githubusercontent.com/u/8683378?v=4" />
                </div>

                <div className={"user-details-container"} >
                    <UserDetails />
                </div>

                <div className={"repo-count-container"} >
                    <RepoCount count={20} />
                </div>

            </div>
        );
    }
}