import { RESULT_VIEW } from "../utils/constants";

export const BACK_TO_SEARCH = "BACK_TO_SEARCH";
export const FETCH_USER_REPOS = "FETCH_USER_REPOS";
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_USER_REPOS = "SET_USER_REPOS";
export const SET_VIEW_RESULT = "SET_VIEW_RESULT";


export const backToSearchAction = () => ({
    type: BACK_TO_SEARCH
});

export const fetchUserReposAction = () => ({
    type: FETCH_USER_REPOS
})

export const searchRequestAction = (text) => ({
    type: SEARCH_REQUEST,
    payload: text
});

export const setCurrentUserAction = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const setUserReposAction = (repoList) => ({
    type: SET_USER_REPOS,
    payload: repoList
});

export const setViewResultAction = () => ({
    type: SET_VIEW_RESULT,
    payload: RESULT_VIEW
});