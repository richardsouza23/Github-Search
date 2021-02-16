import React, { Component } from "react";
import Footer from "../../component/footer/Footer";
import HeaderResult from "../../component/headerResult/HeaderResult";
import ReposGrid from "../../component/reposGrid/ReposGrid";
import "./ResultPage.css";


export default class ResultPage extends Component {

    render() {
        return (
            <div id={"content"} >

                <div id={"header-result-wrapper"}>
                    <HeaderResult />
                </div>

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