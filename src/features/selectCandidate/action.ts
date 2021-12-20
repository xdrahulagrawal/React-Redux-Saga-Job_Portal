import { FETCH_SELECT_CANDIDATE, FETCH_SELECT_CANDIDATE_SUCCESS, FETCH_SELECT_CANDIDATE_FAIL } from './types'


export const fetchSelectCandidate = () => {
    return {
        type: FETCH_SELECT_CANDIDATE
    }
}
export const fetchSelectCandidateSuccess = (results: any) => {
    return {
        type: FETCH_SELECT_CANDIDATE_SUCCESS,
        results
    }
}
export const fetchSelectCandidateFail = (err: any) => {
    return {
        type: FETCH_SELECT_CANDIDATE_FAIL,
        err
    }
}