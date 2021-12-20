import { FETCH_SELECT_CANDIDATE, FETCH_SELECT_CANDIDATE_SUCCESS, FETCH_SELECT_CANDIDATE_FAIL } from './types'
const initialState = {
    profile: [],
}
export const selectCandidateReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_SELECT_CANDIDATE:
            return {
                ...state
            }
        case FETCH_SELECT_CANDIDATE_SUCCESS:
            return {
                ...state,
                profile: action.results,

            }
        case FETCH_SELECT_CANDIDATE_FAIL:
            return {
                ...state,
                profile: []
            }
        default: return state
    }
}

