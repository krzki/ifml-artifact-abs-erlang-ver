import bankAccountRoutes from 'bankAccount/routes'

import { useRoutes } from 'react-router-dom'
import commonRoutes from 'commons/routes.js'
import userRoutes from 'user/routes'
import roleRoutes from 'role/routes'
import staticPageRoutes from 'staticPage/routes'

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,

	...bankAccountRoutes, 
  ])
  return router
}

export default GlobalRoutes
