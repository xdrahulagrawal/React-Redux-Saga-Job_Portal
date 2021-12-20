import { FETCH_USER_PROFILE, FETCH_USER_PROFILE_FAIL, FETCH_USER_PROFILE_SUCCESS } from './type'


export const fetchUserProfile = () => {
    console.log("🚀 ~ file: action.ts ~ line 8 ~ fetchUserProfile ~ FETCH_USER_PROFILE")
    return {
        type: FETCH_USER_PROFILE,
    }
}

export const fetchUserProfileSuccess = (results: any) => {
    return {
        type: FETCH_USER_PROFILE_SUCCESS,
        results
    }
}

export const fetchUserProfileFail = (err: any) => {
    return {
        type: FETCH_USER_PROFILE_FAIL,
        err
    }
}