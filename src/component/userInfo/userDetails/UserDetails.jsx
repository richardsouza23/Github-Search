import React from "react";
import { connect } from "react-redux";
import { getTotalReposStars } from "../../../state/selectors";

import "./UserDetails.css";
import map_icon from "../../../assets/icons/map-marker-alt-solid.svg";
import company_icon from "../../../assets/icons/briefcase-solid.svg";
import users_icon from "../../../assets/icons/users-solid.svg";
import star_icon from "../../../assets/icons/star-solid.svg";
import ExtraInfo from "../../extraInfo/ExtraInfo";


const enhance = connect(
    (state) => ({
        starsCount: getTotalReposStars(state)
    })
);


const UserDetails = ({currentUser, starsCount}) => {

    const { name, login, location, company, followers, following } = currentUser;

    return (
        <div className="user-details" >
            <div className="user-name" >
                <h2>{name}</h2>
                <h4>{login ? `@${login}` : ""}</h4>
            </div>

            <div className="user-extra-info" >
                <ExtraInfo icon={map_icon} text={location}/>
                <ExtraInfo icon={company_icon} text={company ? company.trim() : ""}/>
                <ExtraInfo icon={users_icon} text={followers}/>
                <ExtraInfo icon={users_icon} text={following}/>
                <ExtraInfo icon={star_icon} text={starsCount}/>
            </div>
        </div>
    );
}

export default enhance(UserDetails);