import React from 'react'
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../Context/AuthContext';

function StudentGuard() {
    const { currentUser } = useAuth(); 
    let location = useLocation();
    if(currentUser && currentUser.roles.includes("Student")){
        return <>
            {/* here we put the navbar*/}
            <Navbar />
            <Outlet />
        </>
    }else if(currentUser && !currentUser.roles.includes("Student")){
        return <Navigate to={-1} state={{ from :  location}}/>
    }
    return <Navigate to="/login"  state={{ from :  location}}/>
}

export default StudentGuard
