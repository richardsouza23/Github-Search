import SearchPage from "../pages/search/SearchPage";
import ResultPage from "../pages/result/ResultPage";
import "./App.css"
import React from "react";
import { connect } from "react-redux";
import { getCurrentView } from "../../state/selectors";
import { SEARCH_VIEW } from "../../utils/constants";




const buildResultProps = (obj) => {
    let { starred_url } = obj, urlCropped = "";

    try {
        urlCropped = starred_url.substring(0, starred_url.indexOf("{"));

    } catch (err) {
        console.log(err);
    }

    return {
        userAvatarUrl: obj.avatar_url,
        userDetails: {
            userName: obj.name, 
            login: obj.login, 
            location: obj.location, 
            company: obj.company, 
            followers: obj.followers, 
            following: obj.following,
            starredUrl: urlCropped
        },
        repoCount: obj.public_repos,
        reposUrl: obj.repos_url,
        urlUser: obj.html_url
    };
}



const enhance = connect(
    (state) => ({
        currentView: getCurrentView(state)
    })
)

const App = ({currentView}) => {
    console.log("CURRENT VIEW:", currentView)
    let page = currentView === SEARCH_VIEW ?
        <SearchPage /> :
        <ResultPage/> ;

    return (
        <div className="App">
            {page}
        </div>
    );
}


export default enhance(App);