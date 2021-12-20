import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchSelectCandidate } from './action'

const SelectCandidate = () => {
    const selectProfile = useSelector((state: any) => state.selectCandidateReducer.profile)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSelectCandidate())
    }, [])

    const renderSelectProfile = () => {
        if (!selectProfile || Object.keys(selectProfile).length === 0) {
            return null
        }

        return (
            <div className='container'>
                {selectProfile.map((items: any) => {
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
            <h2>SelectCandidate</h2>
            {renderSelectProfile()}
        </>
    )
}

export default SelectCandidate;