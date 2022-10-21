import SearchPage from "../pages/search/SearchPage";
import ResultPage from "../pages/result/ResultPage";
import "./App.css"
import React from "react";
import { connect } from "react-redux";
import { getCurrentView } from "../../state/selectors";
import { SEARCH_VIEW } from "../../utils/constants";



const enhance = connect(
    (state) => ({
        currentView: getCurrentView(state)
    })
)

const App = ({currentView}) => {

    let page = currentView === SEARCH_VIEW ?
        <SearchPage /> :
        <ResultPage/> ;

    return (
        <div className="App">
            {page}
        </div>
    );
}


export default enhance(App);