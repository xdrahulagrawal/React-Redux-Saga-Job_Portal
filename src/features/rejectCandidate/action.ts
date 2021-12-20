import { FETCH_REJECT_CANDIDATE, FETCH_REJECT_CANDIDATE_SUCCESS, FETCH_REJECT_CANDIDATE_FAIL } from './types'


export const fetchRejectCandidate = () => {
    return {
        type: FETCH_REJECT_CANDIDATE
    }
}
export const fetchRejectCandidateSuccess = (results: any) => {
    return {
        type: FETCH_REJECT_CANDIDATE_SUCCESS,
        results
    }
}
export const fetchRejectCandidateFail = (err: any) => {
    return {
        type: FETCH_REJECT_CANDIDATE_FAIL,
        err
    }
}