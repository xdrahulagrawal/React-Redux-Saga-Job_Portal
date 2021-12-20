import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './type'
const intialState = 0

export const counterNumber = (state = intialState, action: any) => {

    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1
        case DECREMENT_COUNTER:
            return state - 1
        default: return state
    }
}