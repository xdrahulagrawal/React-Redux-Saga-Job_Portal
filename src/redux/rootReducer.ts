import { combineReducers } from 'redux'
import { counterNumber } from '../features/counter/reducer'
import { userProfile } from '../features/profile/reducer'
import { rejectCandidateReducer } from '../features/rejectCandidate/reducer'
import { selectCandidateReducer } from '../features/selectCandidate/reducer'


export default combineReducers({
    counterNumber,
    userProfile,
    rejectCandidateReducer,
    selectCandidateReducer
})