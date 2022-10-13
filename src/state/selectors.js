import { lensPath, view } from "ramda";

const currentUserLens = lensPath(["mainReducer", "currentUser"]);
const currentViewLens = lensPath(["mainReducer", "view"]);

export const getCurrentUser = (state) => view(currentUserLens, state);

export const getCurrentView = (state) => view(currentViewLens, state);