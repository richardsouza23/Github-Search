import React, { Component } from "react";
import "./UserDetails.css";
import map_icon from "../../../assets/icons/map-marker-alt-solid.svg";
import company_icon from "../../../assets/icons/briefcase-solid.svg";
import users_icon from "../../../assets/icons/users-solid.svg";
import star_icon from "../../../assets/icons/star-solid.svg";
import ExtraInfo from "../../extraInfo/ExtraInfo";
import { getResponse, STATUS_OK } from "../../../utils/apiUtils";


export default class UserDetails extends Component {

    state = {
        starsCount: null,
        starsFetched: false
    }

    render() {
        const { userName, login, location, company, followers, following} = this.props;

        return (
            <div className="user-details" >
                <div className="user-name" >
                    <h2>{userName}</h2>
                    <h4>{login ? `@${login}` : ""}</h4>
                </div>

                <div className="user-extra-info" >

                    <ExtraInfo icon={map_icon} text={location}/>
                    <ExtraInfo icon={company_icon} text={company ? company.trim() : ""}/>
                    <ExtraInfo icon={users_icon} text={followers}/>
                    <ExtraInfo icon={users_icon} text={following}/>
                    <ExtraInfo icon={star_icon} text={this.state.starsCount}/>

                </div>
            </div>
        );
    }

    async componentDidMount() {
        let { starredUrl } = this.props;

        try{
            let { status, headers } = await getResponse(`${starredUrl}?per_page=1`);

            if(status === STATUS_OK) {
                let starredCount = this.extractPageCountFromHeaders(headers);
                this.setState({starsCount: starredCount})
            }

        } catch (err) {
            console.log(err);
        }
    }


    extractPageCountFromHeaders = (headers) => {

        let linkHeader = headers.get('link');
        if(!linkHeader) {
            return null;
        }

        return linkHeader.match(/&page=(\d+)>; rel="last"/)[1];
    }
}