import React, { Component } from "react";
import "./Footer.css";
import gitHubBrand from "../../assets/icons/github-brands.svg"
import linkedinBrand from "../../assets/icons/linkedin-brands.svg"

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <div className={"page-content-container footer-content"}>
                    <div className={"footer-logos"}>
                        <a href={this.props.gitHubUrl} target={"_blank"} >
                            <img src={gitHubBrand} />
                        </a>
                        <a href={this.props.linkedinUrl} target={"_blank"} >
                            <img src={linkedinBrand} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }


}