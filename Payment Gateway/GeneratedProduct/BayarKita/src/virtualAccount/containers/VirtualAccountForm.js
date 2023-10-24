import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import FormVirtualAccountForm from '../components/FormVirtualAccountForm'

const VirtualAccountForm = props => {

  return  (
	<div>
		<FormVirtualAccountForm
			{...props}
		/> 
	</div>
  ) 
}

export default VirtualAccountForm

