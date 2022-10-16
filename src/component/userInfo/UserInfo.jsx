import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentUser } from "../../state/selectors";
import RepoCount from "./repoCount/RepoCount";
import UserDetails from "./userDetails/UserDetails";
import "./UserInfo.css";


const enhance = connect(
    (state) => ({
        currentUser: getCurrentUser(state)
    })
)


const UserInfo = ({currentUser}) => {

    const { avatar_url, public_repos } = currentUser;

    return (
        <div className={"user-info"} >

            <div className={"user-photo-container"} >
                <img src={avatar_url} />
            </div>

            <div className={"user-details-container"} >
                <UserDetails currentUser={currentUser} />
            </div>

            <div className={"repo-count-container"} >
                <RepoCount count={public_repos} />
            </div>

        </div>
    );

}


export default enhance(UserInfo);