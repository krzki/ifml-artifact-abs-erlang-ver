import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import FormAddAccount from '../components/FormAddAccount'

const NewAccount = props => {

  return  (
	<div>
		<FormAddAccount
			{...props}
		/> 
	</div>
  ) 
}

export default NewAccount

