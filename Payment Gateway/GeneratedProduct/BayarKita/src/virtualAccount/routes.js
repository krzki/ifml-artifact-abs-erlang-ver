import RequireAuth from 'commons/auth/RequireAuth'

import VirtualAccountForm from './containers/VirtualAccountForm'
import KonfirmasiVirtualAccountPage from './containers/KonfirmasiVirtualAccountPage'

const virtualAccountRoutes = [
	{ 
		path: "/virtualaccount/confirmation",
		element: <KonfirmasiVirtualAccountPage />,
	},
	{ 
		path: "/virtualaccount",
		element: <VirtualAccountForm />,
	}
]

export default virtualAccountRoutes
