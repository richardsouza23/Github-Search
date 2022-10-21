import { fork } from "redux-saga/effects";
import { getCurrentUserRepos } from "./repoSaga";
import { getUserSaga } from "./userSaga";


export default function* rootSaga({githubApi}){
    yield fork(getUserSaga, {githubApi});
    yield fork(getCurrentUserRepos, {githubApi});
}