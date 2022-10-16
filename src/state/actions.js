import { RESULT_VIEW } from "../utils/constants";

export const BACK_TO_SEARCH = "BACK_TO_SEARCH";
export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_VIEW_RESULT = "SET_VIEW_RESULT";


export const backToSearchAction = () => ({
    type: BACK_TO_SEARCH
});

export const searchRequestAction = (text) => ({
    type: SEARCH_REQUEST,
    payload: text
});

export const setCurrentUserAction = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const setViewResultAction = () => ({
    type: SET_VIEW_RESULT,
    payload: RESULT_VIEW
});