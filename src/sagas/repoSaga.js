import { put, select, takeLatest } from "redux-saga/effects";
import { FETCH_USER_REPOS, setUserReposAction } from "../state/actions";
import { getCurrentUserLogin, getCurrentUserRepoCount } from "../state/selectors";


export function* getCurrentUserRepos({githubApi}){
    yield takeLatest(FETCH_USER_REPOS, function*(){

        try{
            const currentUsername = yield select(getCurrentUserLogin);
            const repoCount = yield select(getCurrentUserRepoCount);

            const repos = yield githubApi.getUserRepos(currentUsername, repoCount);

            yield put(setUserReposAction(repos));

        } catch (err) {
            console.error("ERROR GETTING USER REPOSITORIES:", err);
        }
    });
}