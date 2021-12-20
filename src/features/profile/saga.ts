import { put, takeLatest } from 'redux-saga/effects'
import { getRequest } from '../../utitiles/network';
import { FETCH_USER_PROFILE } from './type'
import { fetchUserProfileFail, fetchUserProfileSuccess } from './action'


function* getProfile(): any {
    try {
        const URL = 'http://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json'
        const apiResponse = yield getRequest(URL);
        if (!apiResponse || Object.keys(apiResponse).length === 0) {
            yield put(fetchUserProfileFail(apiResponse));
            return;
        }
        let selectProfileData = JSON.parse(localStorage.getItem('sList') || '[]')
        let rejectProfileData = JSON.parse(localStorage.getItem('rList') || '[]')
        const elementsToRemove = [...selectProfileData, ...rejectProfileData]
        const filterresponse = apiResponse.filter((el: any) => {
            return !elementsToRemove.find(element => element.id === el.id)
        });
        yield put(fetchUserProfileSuccess(filterresponse));

    }
    catch (error) {
        console.log('error');
        yield put(fetchUserProfileFail(error));
    }
}

export default function* watchGetProfileList() {
    yield takeLatest(FETCH_USER_PROFILE, getProfile)
}

