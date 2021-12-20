import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_REJECT_CANDIDATE } from './types'
import { fetchRejectCandidateSuccess, fetchRejectCandidateFail } from './action'

function* rejectCandidate() {
    try {
        console.log('watchRejectCandidate!')
        const getRejectData = localStorage.getItem('rList')
        const rejectList = JSON.parse(getRejectData || '[]');
        if (!getRejectData) {
            return
        }
        if (!rejectList || Object.keys(rejectList).length === 0) {
            yield put(fetchRejectCandidateSuccess(rejectList));
            return;
        }
        yield put(fetchRejectCandidateSuccess(rejectList));
    }
    catch (error) {
        console.log('error');
        yield put(fetchRejectCandidateFail(error));
    }
}


export default function* watchRejectCandidate() {
    yield takeLatest(FETCH_REJECT_CANDIDATE, rejectCandidate)
}