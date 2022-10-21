import { SEARCH_VIEW } from "../../utils/constants";
import { BACK_TO_SEARCH, SET_CURRENT_USER, SET_USER_REPOS, SET_VIEW_RESULT } from "../actions";

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
    console.log('STATE BEFORE ACTION:', state);

    switch(type){
        case BACK_TO_SEARCH:
            return initialState;
        
        case SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        
        case SET_USER_REPOS:
            return {...state, repoList: payload };

        case SET_VIEW_RESULT:
            return { ...state, view: payload };

        default:
            return state;
    }
}