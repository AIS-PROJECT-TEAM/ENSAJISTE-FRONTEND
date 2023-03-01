import React from 'react'
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import LayoutContainer from '../components/LayoutContainer'
function NotAuthGuard() {
    const { currentUser } = useAuth(); 
    let location = useLocation();
    if(currentUser){
        return <Navigate to={-1}  state={{ from :  location}}/>
    }
    return <>
            <Outlet />
            </>
    
}

export default NotAuthGuard
