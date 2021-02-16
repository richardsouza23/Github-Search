import React, { Component } from "react";
import Footer from "../../component/footer/Footer";
import ReposGrid from "../../component/reposGrid/ReposGrid";
import "./ResultPage.css";


export default class ResultPage extends Component {

    render() {
        return (
            <div id={"content"} >

                <div id={"grid-repos-wrapper"} >
                    <ReposGrid />
                </div>

                <div id={"footer-wrapper"}>
                    <Footer />
                </div>
                
            </div>
        );
    }
}