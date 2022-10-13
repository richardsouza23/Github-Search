import React from "react";
import { connect } from "react-redux";
import { backToSearchAction } from "../../../state/actions";
import Footer from "../../footer/Footer";
import HeaderResult from "../../headerResult/HeaderResult";
import ReposGrid from "../../reposGrid/ReposGrid";
import UserInfo from "../../userInfo/UserInfo";
import "./ResultPage.css";


const enhance = connect(
    null,
    (dispatch) => ({
        backToSearch: () => dispatch(backToSearchAction())
    })
)

const ResultPage = ({
    userAvatarUrl, 
    userDetails, 
    repoCount, 
    reposUrl, 
    urlUser, 
    backToSearch 
}) => {

    return (
        <div id="content" >

            <div id="header-result-wrapper">
                <HeaderResult handleClickLogo={backToSearch} handleClickBack={backToSearch} />
            </div>

            <div id="user-info-wrapper" className="page-content-container">
                <UserInfo userAvatarUrl={userAvatarUrl} userDetails={userDetails} repoCount={repoCount} />
            </div>

            <div id="grid-repos-wrapper">
                <ReposGrid reposUrl={reposUrl} />
            </div>

            <div id="footer-wrapper">
                <Footer gitHubUrl={urlUser}  />
            </div>

        </div>
    );
}

export default enhance(ResultPage);