import RequireAuth from 'commons/auth/RequireAuth'

import PaymentLinkForm from './containers/PaymentLinkForm'
import KonfirmasiPaymentLinkPage from './containers/KonfirmasiPaymentLinkPage'

const paymentLinkRoutes = [
	{ 
		path: "/paymentlink/confirmation",
		element: <KonfirmasiPaymentLinkPage />,
	},
	{ 
		path: "/paymentlink",
		element: <PaymentLinkForm />,
	}
]

export default paymentLinkRoutes
