import React from 'react'
import { useAuth } from '.'
import { Navigate, useLocation } from 'react-router-dom'

function RequireAuth({ permissionNeeded, children }) {
  const { permissions, isAuth } = useAuth()
  const location = useLocation()

  // user is not logged in
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location.pathname }} />
  }

  // user doesn't have any permission
  if (isAuth && !permissions) {
    return <Navigate to="/unauthorized" />
  }

  // user doesn't have permission needed
  if (
    !permissions.includes(permissionNeeded) &&
    !permissions.includes('administrator')
  ) {
    return <Navigate to="/unauthorized" />
  }

  return children
}

export default RequireAuth
