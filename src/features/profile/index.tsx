import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchUserProfile } from './action'
const Userprofile = () => {
    const userprofile = useSelector((state: any) => state.userProfile.profile)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserProfile());
        return (() => {
        })
    }, [])

    const renderUserProfileList = () => {
        if (!userprofile || Object.keys(userprofile).length === 0) {
            return null
        }
        return (
            <div className='container'>
                {userprofile.map((items: any) => {
                    return (< div key={items.id} className='container-item '>
                        <img src={items.Image} alt={items.name} className='image' />
                        <h3 className='items-name'>{items.name}</h3>
                        <Link to={`/${items.id}`}
                            className='view-profile'>View Profile</Link>
                    </ div>)
                })}
            </div>
        )
    }

    return (
        <>
            <h2 className='heading'>Available Candidates</h2>
            {renderUserProfileList()}
        </>
    )
}
export default Userprofile;