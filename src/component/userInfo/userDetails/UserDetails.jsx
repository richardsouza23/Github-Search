import React, { Component } from "react";
import "./UserDetails.css";
import map_icon from "../../../assets/icons/map-marker-alt-solid.svg";
import company_icon from "../../../assets/icons/briefcase-solid.svg";
import users_icon from "../../../assets/icons/users-solid.svg";
import star_icon from "../../../assets/icons/star-solid.svg";
import ExtraInfo from "../../extraInfo/ExtraInfo";

export default class UserDetails extends Component {
    render() {
        return (
            <div className="user-details" >
                <div className="user-name" >
                    <h2>Gustavo Guanabara</h2>
                    <h4>@gustavoguanabara</h4>
                </div>

                <div className="user-extra-info" >

                    <ExtraInfo icon={map_icon} text={"São Paulo - Brazil"}/>
                    <ExtraInfo icon={company_icon} text={"@juntossomosmais, @frontendb"}/>
                    <ExtraInfo icon={users_icon} text={4700}/>
                    <ExtraInfo icon={users_icon} text={233}/>
                    <ExtraInfo icon={star_icon} text={30}/>

                </div>
            </div>
        );
    }
}