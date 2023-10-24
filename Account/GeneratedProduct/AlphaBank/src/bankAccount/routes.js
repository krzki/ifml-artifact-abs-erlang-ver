import RequireAuth from 'commons/auth/RequireAuth'

import AccountList from './containers/AccountList'
import NewAccount from './containers/NewAccount'

const bankAccountRoutes = [
	{ 
		path: "/account/add",
		element: <NewAccount />,
	},
	{ 
		path: "/account",
		element: <AccountList />,
	}
]

export default bankAccountRoutes
