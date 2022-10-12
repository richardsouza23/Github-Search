import React, { Component } from "react";
import Footer from "../../footer/Footer";
import HeaderResult from "../../headerResult/HeaderResult";
import ReposGrid from "../../reposGrid/ReposGrid";
import UserInfo from "../../userInfo/UserInfo";
import "./ResultPage.css";


export default class ResultPage extends Component {


    render() {
        const { userAvatarUrl, userDetails, repoCount, reposUrl, urlUser, backAction } = this.props;

        return (
            <div id={"content"} >

                <div id={"header-result-wrapper"}>
                    <HeaderResult handleClick={backAction} />
                </div>

                <div id={"user-info-wrapper"} className={"page-content-container"}>
                    <UserInfo userAvatarUrl={userAvatarUrl} userDetails={userDetails} repoCount={repoCount} />
                </div>

                <div id={"grid-repos-wrapper"} >
                    <ReposGrid reposUrl={reposUrl} />
                </div>

                <div id={"footer-wrapper"}>
                    <Footer gitHubUrl={urlUser}  />
                </div>

            </div>
        );
    }
}