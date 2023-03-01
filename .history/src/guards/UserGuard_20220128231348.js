import React from 'react'
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../Context/AuthContext';

function UserGuard() {
    const { currentUser } = useAuth(); 
    let location = useLocation();
    if(currentUser && currentUser.roles.includes("User")){
        return <>
            {/* here we put the navbar*/}
            <Navbar />
            <Outlet />
        </>
    }else if(currentUser && !currentUser.roles.includes("User")){
        return <Navigate to={-1} state={{ from :  location}}/>
    }
    return <Navigate to="/login"  state={{ from :  location}}/>
}

export default UserGuard
