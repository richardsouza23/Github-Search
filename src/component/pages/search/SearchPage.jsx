import React, { Component } from "react";
import SearchForm from "../../searchForm/SearchForm";
import "./SearchPage.css"

export default class SearchPage extends Component {

    render() {
        return (
            <div id={"login-box-wrapper"}>
                <SearchForm searchUser={this.props.searchUser} />
            </div>
        );
    }
}