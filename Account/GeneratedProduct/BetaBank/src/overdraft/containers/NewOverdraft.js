import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import ModifiedFormAddOverdraft from '../components/ModifiedFormAddOverdraft'

const NewOverdraft = props => {

  return  (
	<div>
		<ModifiedFormAddOverdraft
			{...props}
		/> 
	</div>
  ) 
}

export default NewOverdraft

