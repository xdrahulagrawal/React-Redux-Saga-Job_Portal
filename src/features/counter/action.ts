import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './type'


export const incrementCounter = () => {
    return {
        type: INCREMENT_COUNTER,

    }
}


export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}