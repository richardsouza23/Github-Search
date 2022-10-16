import { fork } from "redux-saga/effects";
import { getUserSaga } from "./userSaga";


export default function* rootSaga({githubApi}){
    yield fork(getUserSaga, {githubApi});
}