import SearchPage from "../pages/search/SearchPage";
import ResultPage from "../pages/result/ResultPage";
import "./App.css"
import { getResponse, STATUS_OK } from "../../utils/apiUtils";
import React, { Component } from "react";


export default class App extends Component {

    githubBaseUrl = process.env.REACT_APP_GITHUB_API_URL || "https://api.github.com";
    
    state = { userData: null }

    render() {
        let { userData } = this.state;

        let page = userData ?
            <ResultPage {...userData} backAction={this.wipeUserData} /> :
            <SearchPage searchUser={this.getUser} /> ;

        return (
            <div className="App">
                {page}
            </div>
        );
    }


    getUser = async (name) => {

        if(name && name !== ""){

            name = name.replaceAll(/\s+/g, "");
            console.log(`Searching for user ${name}`);

            let userData = await this.getUserData(name);

            if(userData){
                this.setState({userData: userData});
            }

        } else {
            console.log("Invalid user name");
        }
    }


    getUserData = async (usernamme) => {

        let urlUser = `${this.githubBaseUrl}/users/${usernamme}`;

        try{
            let { status, body} = await getResponse(urlUser);

            if(status !== STATUS_OK) {
                console.log(body);
                return null;
            }

            return this.buildResultProps(body);
    
        } catch (err) {
            console.log("Error getting user data", err);
            return null;
        }
    }


    buildResultProps = (obj) => {
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

    wipeUserData = () => {
        this.setState({userData: null});
    }
}