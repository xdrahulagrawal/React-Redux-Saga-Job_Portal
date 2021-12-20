import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav >
                <ul className='container-ul'>
                    <li>
                        <NavLink to='/' className='navLink'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/selectcandidate' className='navLink'>My Selected</NavLink>
                    </li>
                    <li>
                        <NavLink to='/rejectcandidate' className='navLink'>My Rejected</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;