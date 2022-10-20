import { compose, lensPath, lensProp, prop, pipe, view } from "ramda";

const currentUserLens = lensPath(["mainReducer", "currentUser"]);
const currentViewLens = lensPath(["mainReducer", "view"]);
const userGithubPageUrlLens = compose(currentUserLens, lensProp('html_url'));
const repoListLens = lensPath(["mainReducer", "repoList"]);

export const getCurrentUser = (state) => view(currentUserLens, state);

export const getCurrentUserLogin = (state) => pipe(getCurrentUser, prop("login"))(state);

export const getCurrentUserRepoCount = (state) => pipe(getCurrentUser, prop("public_repos"))(state);

export const getCurrentView = (state) => view(currentViewLens, state);

export const getUserGithubPageUrl = (state) => view(userGithubPageUrlLens, state);

export const getRepoList = (state) => view(repoListLens, state);