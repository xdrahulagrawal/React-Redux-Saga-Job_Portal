import { put, takeLatest } from 'redux-saga/effects'
import { FETCH_SELECT_CANDIDATE } from './types'
import { fetchSelectCandidateSuccess, fetchSelectCandidateFail } from './action'


function* selectCandidate(): any {
    try {
        console.log('watchSelectCandidate!')
        const getSelectData = localStorage.getItem('sList')
        const SelectList = JSON.parse(getSelectData || '[]');

        if (!getSelectData) {
            return
        }
        if (!SelectList || Object.keys(SelectList).length === 0) {
            yield put(fetchSelectCandidateSuccess(SelectList));
            return;
        }
        yield put(fetchSelectCandidateSuccess(SelectList));
    }
    catch (error) {
        console.log('error');
        yield put(fetchSelectCandidateFail(error));
    }
}
export default function* watchSelectCandidate() {
    yield takeLatest(FETCH_SELECT_CANDIDATE, selectCandidate)
}