
export const BACK_TO_SEARCH = "BACK_TO_SEARCH";
export const SEARCH_REQUEST = "SEARCH_REQUEST";


export const backToSearchAction = () => ({
    type: BACK_TO_SEARCH
});

export const searchRequestAction = (text) => ({
    type: SEARCH_REQUEST,
    payload: text
})