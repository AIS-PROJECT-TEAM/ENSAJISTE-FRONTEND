import React from 'react'
import { Route } from 'react-router-dom'
import StudentGuard from '../guards/StudentGuard'
import Documents from '../pages/student/Documents/Documents';
const Dashboard = React.lazy(() => import('../pages/student/Dashboard'));


const StudentRoutes = (
    <Route element={<StudentGuard />}>
        <Route element={<Dashboard />} path="/student" exact />
        <Route element={<Documents />} path="/student/documents" exact />

    </Route>
)


export default StudentRoutes
