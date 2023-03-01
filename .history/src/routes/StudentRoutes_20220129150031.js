import React from 'react'
import { Route } from 'react-router-dom'
import StudentGuard from '../guards/StudentGuard'
// import Dashboard from '../pages/student/Dashboard'
const Dashboard = React.lazy(() => import('../pages/student/Dashboard'));


const StudentRoutes = (
    <Route element={<StudentGuard />}>
        <Route element={<Dashboard />} path="/student" exact />
    </Route>
)


export default StudentRoutes
