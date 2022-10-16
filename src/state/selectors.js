import { compose, lensPath, lensProp, pipe, view } from "ramda";

const currentUserLens = lensPath(["mainReducer", "currentUser"]);
const currentViewLens = lensPath(["mainReducer", "view"]);
const userGithubPageUrl = compose(currentUserLens, lensProp('html_url'));

export const getCurrentUser = (state) => view(currentUserLens, state);

export const getCurrentView = (state) => view(currentViewLens, state);

export const getUserGithubPageUrl = (state) => view(userGithubPageUrl, state);