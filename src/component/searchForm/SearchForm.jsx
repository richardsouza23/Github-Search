import React, { useState } from "react";
import { connect } from "react-redux";

import Input from "../input/Input";
import Button from "../button/Button";

import "./SearchForm.css";
import logo from "../../assets/logo-vertical.svg";
import { searchRequestAction } from "../../state/actions";


const enhance = connect(
    null,
    (dispatch) => ({
        requestSearch: (text) => dispatch(searchRequestAction(text))
    })
);

const SearchForm = ({requestSearch}) => {

    const [text, setText] = useState('');

    return (
        <div id="search-box" >
            <img src={logo}/>
            <div className="input-box-wrapper" >
                <Input placeholder="Enter user name" onChange={setText} />
            </div>
            <div className="button-wrapper clickable" >
                <Button label="Search" onClick={() => requestSearch(text)} />
            </div>
        </div>
    );
}

export default enhance(SearchForm);