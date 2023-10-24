import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import FormPaymentLinkForm from '../components/FormPaymentLinkForm'

const PaymentLinkForm = props => {

  return  (
	<div>
		<FormPaymentLinkForm
			{...props}
		/> 
	</div>
  ) 
}

export default PaymentLinkForm

