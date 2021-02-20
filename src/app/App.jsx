import SearchPage from "../pages/search/SearchPage";
import ResultPage from "../pages/result/ResultPage";
import "./App.css"
import { getJson } from "../utils/apiUtils";
import React, { Component } from "react";


export default class App extends Component {

    state = {
        userData: {}
    }

    render() {
    
        return (
            <div className="App">
                <ResultPage {...this.state.userData} />
            </div>
        );
    }


    async componentDidMount() {

        let resultProps = await getUserData();

        if(resultProps) {
            this.setState({userData: resultProps});
        }
    }

}



const getUserData = async () => {

    let urlUser = "https://api.github.com/users/vitorsemidio-dev";

    try{
        let responseObj = await getJson(urlUser);
        return buildResultProps(responseObj);

    } catch (err) {
        console.log(err);
        return null;
    }
}


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
    };
}