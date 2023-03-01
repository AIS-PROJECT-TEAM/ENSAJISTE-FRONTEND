import React from 'react'
import { Route } from 'react-router-dom'
import UserGuard from '../guards/UserGuard'
const Dashboard = React.lazy(() => import('../pages/user/Dashboard'));

const UserRoutes = (
    <Route element={<UserGuard />}>
        <Route element={<Dashboard />} path="/user" exact />
    </Route>
)

export default UserRoutes
