import React from "react";
import SearchForm from "../../searchForm/SearchForm";
import "./SearchPage.css"


export default function SearchPage({searchUser}) {

    return (
        <div id="login-box-wrapper">
            <SearchForm searchUser={searchUser} />
        </div>
    );
}