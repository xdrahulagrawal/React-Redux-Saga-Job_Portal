import { useSelector, useDispatch } from 'react-redux'
import { incrementCounter, decrementCounter } from '../../features/counter/action'
export function Counter() {
    const count = useSelector((state: any) => state.counterNumber)

    const dispatch = useDispatch()
    return (
        <>
            <p>{count}</p>
            <button onClick={() => dispatch(incrementCounter())}>Add</button>
            <button onClick={() => dispatch(decrementCounter())}>sub</button>
        </>
    )
}

