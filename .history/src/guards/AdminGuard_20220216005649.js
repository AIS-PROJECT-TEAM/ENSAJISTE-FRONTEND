import React from 'react'
import { Navigate, Outlet, useLocation} from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import { useAuth } from '../Context/AuthContext';
import LayoutContainer from '../components/LayoutContainer';

function AdminGuard() {
    const { currentUser } = useAuth(); 
    let location = useLocation();
    if(currentUser && currentUser.roles.includes("Admin")){
        return <>
            {/* here we put the navbar*/}
            <LayoutContainer>
                <Outlet />
            </LayoutContainer>
        </>
    }else if(currentUser && !currentUser.roles.includes("Admin")){
        return <Navigate to={-1} state={{ from :  location}}/>
    }
    return <Navigate to="/login"  state={{ from :  location}}/>
}

export default AdminGuard


const ContentWrapper = styled.div`
    position: absolute;
    left: 240px;
    width: calc(100% - 240px);
`