import React from "react";
import { connect } from "react-redux";
import { backToSearchAction } from "../../../state/actions";
import { getUserGithubPageUrl } from "../../../state/selectors";
import Footer from "../../footer/Footer";
import HeaderResult from "../../headerResult/HeaderResult";
import ReposGrid from "../../reposGrid/ReposGrid";
import UserInfo from "../../userInfo/UserInfo";
import "./ResultPage.css";


const enhance = connect(
    (state) => ({
        userGithubPageUrl: getUserGithubPageUrl(state)
    }),
    (dispatch) => ({
        backToSearch: () => dispatch(backToSearchAction())
    })
)

const ResultPage = ({
    userGithubPageUrl, 
    backToSearch 
}) => {

    return (
        <div id="content" >

            <div id="header-result-wrapper">
                <HeaderResult handleClickLogo={backToSearch} handleClickBack={backToSearch} />
            </div>

            <div id="user-info-wrapper" className="page-content-container">
                <UserInfo />
            </div>

            <div id="grid-repos-wrapper">
                <ReposGrid />
            </div>

            <div id="footer-wrapper">
                <Footer gitHubUrl={userGithubPageUrl}  />
            </div>

        </div>
    );
}

export default enhance(ResultPage);