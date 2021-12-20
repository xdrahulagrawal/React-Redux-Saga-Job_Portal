import Navbar from '../navbar';
import { Routes, Route } from 'react-router-dom'
import Userprofile from '../profile';
import ProfileDetails from '../profileDetails/index';
import RejectCandidate from '../rejectCandidate/index';
import SelectCandidate from '../selectCandidate/index';
import Error from '../error/index';
const Navigation = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Userprofile />} />
                <Route path='/:id' element={<ProfileDetails />} />
                <Route path='/rejectcandidate' element={<RejectCandidate />} />
                <Route path='/selectcandidate' element={<SelectCandidate />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

export default Navigation;