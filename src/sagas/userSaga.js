import { put, takeLeading } from "redux-saga/effects";
import { SEARCH_REQUEST, setCurrentUserAction, setViewResultAction } from "../state/actions";


export function* getUserSaga({githubApi}){
    yield takeLeading(SEARCH_REQUEST, function*({payload}){

        try{
            const user = yield githubApi.getUserByUsername(payload)
                .catch(err => {throw new Error(err);});

            if(user){
                yield put(setCurrentUserAction(user));
                yield put(setViewResultAction());
            }

        } catch(err){
            console.log("ERROR GETTING USER:", err);
        }
    });
}