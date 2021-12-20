import { useSelector } from 'react-redux'
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProfileDetails = () => {
    const userprofile = useSelector((state: any) => state.userProfile.profile)
    const params = useParams();
    const navigate = useNavigate();

    const result = userprofile.filter((value: any) => {
        return value.id === params.id
    })

    const _handleSelectProfile = (data: any) => {
        let selectProfileData = JSON.parse(localStorage.getItem('sList') || '[]')
        localStorage.setItem('sList', JSON.stringify([...selectProfileData, ...data]));
        navigate("/");
    }

    const _handleRejectProfile = (data: any) => {
        let rejectProfileData = JSON.parse(localStorage.getItem('rList') || '[]')
        console.log('rejectProfile', rejectProfileData);
        localStorage.setItem('rList', JSON.stringify([...rejectProfileData, ...data]));
        navigate("/");
    }

    return (
        <>
            <h2 className='heading'>ProfileDetails</h2>
            <div className='container  justifyContent'>
                <img src={result[0]?.Image} alt={result[0]?.name} className='borderRadius  container-image-item' />

                <div className='flex-item'>
                    <h2 className='user-name'>
                        <span>Name : {result[0]?.name}</span>
                    </h2>
                    <div className='profile-actions'>
                        <button className='link-profile' onClick={() => _handleSelectProfile(result)} >Select</button>
                        <button className='link-profile danger mx-4' onClick={() => _handleRejectProfile(result)} >Reject</button>
                        <Link to={`/`}                       >
                            <button className='link-profile warning'> Go Back</button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ProfileDetails;