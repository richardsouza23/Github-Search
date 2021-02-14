import React, { Component } from "react";
import logo from "../../assets/logo-vertical.svg"
import Input from "../input/Input";
import Button from "../button/Button"
import "./SearchForm.css"


export default class SearchForm extends Component {

    state = {
        inputPlaceHolder: "Enter user name"
    }
    
    render() {
        return (
            <div id={"search-box"}>

                <img src={logo}/>

                <div className={"input-box-wrapper"}>
                    <Input placeholder={"Enter user name"} />
                </div>

                <div className={"button-wrapper"} >
                    <Button label={"Search"} />
                </div>

            </div>
        );
    }
}