import { FETCH_USER_PROFILE, FETCH_USER_PROFILE_SUCCESS, FETCH_USER_PROFILE_FAIL } from './type'
const initialState = {
    profile: [],
    loading: false,
}

export const userProfile = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return {
                ...state,
                loading: true
            }
        case FETCH_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.results
            }
        case FETCH_USER_PROFILE_FAIL:
            return {
                ...state,
                loading: false,
                profile: []
            }
        default: return state
    }
}