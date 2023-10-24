import RequireAuth from 'commons/auth/RequireAuth'

import OverdraftAccountList from './containers/OverdraftAccountList'
import NewOverdraft from './containers/NewOverdraft'

const overdraftRoutes = [
	{ 
		path: "/overdraft/add",
		element: <NewOverdraft />,
	},
	{ 
		path: "/overdraft",
		element: <OverdraftAccountList />,
	}
]

export default overdraftRoutes
