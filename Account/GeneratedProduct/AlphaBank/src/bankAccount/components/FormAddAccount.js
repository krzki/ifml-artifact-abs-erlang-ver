import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {
  Button,
  Form,
  SelectionField,
  MultiSelectionField,
  InputField,
  MultiSelectField,
  TextAreaField,
  VisualizationAttr,
  
} from 'commons/components'
import { ALLOWED_PERMISSIONS, findAllowedPermission } from 'commons/constants/allowedPermission'
import cleanFormData from 'commons/utils/cleanFormData'

import saveAccount from '../services/saveAccount'

const FormAddAccount = ({  }) => {
  const { control, handleSubmit } = useForm()


  const navigate = useNavigate()

  const submit = (data) => {
    const cleanData = cleanFormData(data)
    saveAccount({
      ...cleanData,
      
    })
    .then(({ data: { data } }) => {
      navigate(`/account`)
    })
    .catch((error) => {
      toast.error(error.response?.data?.data?.message || error || 'Terjadi kesalahan pada sistem. Harap coba lagi!');
    });
  }

  return (
    <Form 
	  title="Add Account" 
	  onSubmit={handleSubmit(submit)}
	  >

		  <Controller
	        name="id_account"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="Id Account"
	            placeholder="Masukkan id account"
	            fieldState={fieldState}
				{...field}
				isRequired={false}
	          />
	        )}
	      />
		  <Controller
	        name="balance"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="Balance"
	            placeholder="Masukkan balance"
	            fieldState={fieldState}
				{...field}
				isRequired={false}
	          />
	        )}
	      />
		<div className="card-actions justify-end">
			<Button type="submit" variant="primary">Submit</Button>
		</div>
    </Form>
  )
}

export default FormAddAccount
