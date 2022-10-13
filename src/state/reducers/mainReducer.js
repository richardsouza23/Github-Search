import { SEARCH_VIEW } from "../../utils/constants";
import { BACK_TO_SEARCH } from "../actions";

const initialState = {
    view: SEARCH_VIEW,
    searchExpression: null,
    searchResult: [],
    currentUser: null,
    repoList: null
}

export default (state = initialState, {type, payload}) => {

    console.log('ACTION TYPE:', type);
    console.log('ACTION PAYLOAD:', payload);

    switch(type){
        case BACK_TO_SEARCH:
            return initialState;

        default:
            return state;
    }
}