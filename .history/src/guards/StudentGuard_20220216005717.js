import React from 'react'
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useAuth } from '../Context/AuthContext';
import LayoutContainer from '../components/LayoutContainer'

function StudentGuard() {
    const { currentUser } = useAuth(); 
    let location = useLocation();
    if(currentUser && currentUser.roles.includes("Student")){
        return <>
            <LayoutContainer>
                <Outlet />
            </LayoutContainer>

        </>
    }else if(currentUser && !currentUser.roles.includes("Student")){
        return <Navigate to={-1} state={{ from :  location}}/>
    }
    return <Navigate to="/login"  state={{ from :  location}}/>
}

export default StudentGuard
