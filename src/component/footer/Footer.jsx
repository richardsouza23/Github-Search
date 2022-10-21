import React from "react";
import "./Footer.css";
import gitHubBrand from "../../assets/icons/github-brands.svg"
import linkedinBrand from "../../assets/icons/linkedin-brands.svg"
import { openUrlNewTab } from "../../utils/utils";

export default function Footer({gitHubUrl, linkedinUrl}) {
    
    return (
        <div className="footer" >
            <div className="page-content-container footer-content" >
                <div className="footer-logos" >
                    <img src={gitHubBrand} onClick={() => openUrlNewTab(gitHubUrl)} />
                    <img src={linkedinBrand} onClick={() => openUrlNewTab(linkedinUrl)} />
                </div>
            </div>
        </div>
    );
}
