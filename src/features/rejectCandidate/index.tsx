import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchRejectCandidate } from './action'

const RejectCandidate = () => {
    const rejectProfile = useSelector((state: any) => state.rejectCandidateReducer.profile)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRejectCandidate())
    }, [])

    const renderRejectProfile = () => {
        if (!rejectProfile || Object.keys(rejectProfile).length === 0) {
            return null
        }
        return (
            <div className='container'>
                {rejectProfile.map((items: any) => {
                    return (< div key={items.id} className='container-item container-item-height '>
                        <img src={items.Image} alt={items.name} className='image' />
                        <h3 className='items-name'>{items.name}</h3>
                    </ div>)
                })}
            </div>
        )
    }
    return (
        <>
            <h2>RejectCandidate</h2>
            {renderRejectProfile()}
        </>
    )
}

export default RejectCandidate;