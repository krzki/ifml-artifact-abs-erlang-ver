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

import paymentlink from '../services/paymentlink'

const FormPaymentLinkForm = ({  }) => {
  const { control, handleSubmit } = useForm()


  const navigate = useNavigate()

  const kirim = (data) => {
    const cleanData = cleanFormData(data)
    paymentlink({
      ...cleanData,
      
    })
    .then(({ data: { data } }) => {
      navigate(`/paymentlink/confirmation`, { state: data })
    })
    .catch((error) => {
      toast.error(error.response?.data?.data?.message || error || 'Terjadi kesalahan pada sistem. Harap coba lagi!');
    });
  }

  return (
    <Form 
	  title="Payment Link Form" 
	  onSubmit={handleSubmit(kirim)}
	  >

		  <Controller
	        name="amount"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="Jumlah"
	            placeholder="Masukkan jumlah"
				type="number"
	            fieldState={fieldState}
				{...field}
				isRequired={false}
	          />
	        )}
	      />
		  <Controller
	        name="sender_name"
	        control={control}
	        render={({ field, fieldState }) => (
			  <InputField
	            label="Nama Pengirim"
	            placeholder="Masukkan nama pengirim"
	            fieldState={fieldState}
				{...field}
				isRequired={false}
	          />
	        )}
	      />
	  <Controller
        name="product_name"
        control={control}
        render={({ field, fieldState }) => (
		<SelectionField
            label="Payment Gateway"
            options={[{ id: "Midtrans", name: "Midtrans" },
            { id: "Oy", name: "Oy" }]}
            placeholder="Masukkan payment gateway"
			fieldState={fieldState}
            {...field}
			isRequired={false}
          />
        )}
      />
		<div className="card-actions justify-end">
			<Button type="submit" variant="primary">Kirim</Button>
		</div>
    </Form>
  )
}

export default FormPaymentLinkForm
