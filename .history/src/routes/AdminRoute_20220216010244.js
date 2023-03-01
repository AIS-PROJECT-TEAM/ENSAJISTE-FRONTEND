import React from 'react'
import { Route } from 'react-router-dom'
import AdminGuard from '../guards/AdminGuard'
const Dashboard = React.lazy(() => import('../pages/admin/Dashboard'));

export const  AdminRoute = (
   <Route element={<AdminGuard />}>
      <Route element={<Dashboard />} path="/admin" exact />
   </Route>
)

export default AdminRoute
