import { FETCH_REJECT_CANDIDATE, FETCH_REJECT_CANDIDATE_SUCCESS, FETCH_REJECT_CANDIDATE_FAIL } from './types'
const initialState = {
    profile: [],
}
export const rejectCandidateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_REJECT_CANDIDATE:
            return {
                ...state
            }
        case FETCH_REJECT_CANDIDATE_SUCCESS:
            return {
                ...state,
                profile: action.results,

            }
        case FETCH_REJECT_CANDIDATE_FAIL:
            return {
                ...state,
                profile: []
            }
        default: return state
    }
}

