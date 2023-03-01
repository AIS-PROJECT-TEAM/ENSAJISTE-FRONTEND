import React from 'react'
import { Route } from 'react-router-dom'
import NotAuthGuard from '../guards/NotAuthGuard'
const Login = React.lazy(() => import('../pages/Login'));
const  NotAuthRoutes = (
      <Route element={<NotAuthGuard />}>
            <Route element={<Login />} path="/login" exact />
      </Route>
)

export default NotAuthRoutes
