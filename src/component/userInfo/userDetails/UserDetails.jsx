import React, { Component } from "react";
import "./UserDetails.css";
import map_icon from "../../../assets/icons/map-marker-alt-solid.svg";
import company_icon from "../../../assets/icons/briefcase-solid.svg";
import users_icon from "../../../assets/icons/users-solid.svg";
import star_icon from "../../../assets/icons/star-solid.svg";
import ExtraInfo from "../../extraInfo/ExtraInfo";
import {getJson} from "../../../utils/apiUtils";


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

    componentDidMount() {
        let { starredUrl } = this.props;

        //FIXME: Remove this verification and starsFetched
        if(!this.state.starsFetched) {
            getJson(starredUrl)
                .then(list => this.setState({starsCount: list.length, starsFetched: true}))
                .catch(err => console.log(err));
        }
    }
}