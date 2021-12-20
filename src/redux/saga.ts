import { all, fork } from 'redux-saga/effects'

import watchGetProfileList from '../features/profile/saga'
import watchRejectCandidate from '../features/rejectCandidate/saga'
import watchSelectCandidate from '../features/selectCandidate/saga'

export default function* rootSaga() {
    yield all([
        fork(watchGetProfileList),
        fork(watchRejectCandidate),
        fork(watchSelectCandidate),
    ]);
}