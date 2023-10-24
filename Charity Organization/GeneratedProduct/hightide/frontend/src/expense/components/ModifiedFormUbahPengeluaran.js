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
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from 'commons/constants/allowedPermission'
import cleanFormData from 'commons/utils/cleanFormData'

import updateExpense from '../services/updateExpense'

const ModifiedFormUbahPengeluaran = ({
  programs,
  chartOfAccounts,
  expense,
}) => {
  const { control, handleSubmit } = useForm({ defaultValues: expense })

  const navigate = useNavigate()

  const kirim = data => {
    const cleanData = cleanFormData(data)
    updateExpense({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/expense/${expense.id}`)
      })
      .catch(error => {
        toast.error(
          error.response?.data?.data?.message ||
            error ||
            'Terjadi kesalahan pada sistem. Harap coba lagi!'
        )
      })
  }

  return (
    <Form title="Ubah Pengeluaran" onSubmit={handleSubmit(kirim)}>
      <Controller
        name="datestamp"
        control={control}
        rules={{ required: 'Harap masukkan tanggal' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Tanggal"
            placeholder="Masukkan tanggal"
            type="date"
            defaultValue={expense.datestamp}
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: 'Harap masukkan keterangan' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Keterangan"
            placeholder="Masukkan keterangan"
            defaultValue={expense.description}
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="amount"
        control={control}
        rules={{ required: 'Harap masukkan jumlah' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Jumlah"
            placeholder="Masukkan jumlah"
            type="number"
            defaultValue={expense.amount}
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="idProgram"
        control={control}
        render={({ field, fieldState }) => (
          <SelectionField
            label="Nama Program Terkait"
            options={programs}
            placeholder="Masukkan nama program terkait"
            fieldState={fieldState}
            defaultValue={expense.idProgram}
            {...field}
            isRequired={false}
          />
        )}
      />
      <Controller
        name="idCoa"
        control={control}
        render={({ field, fieldState }) => (
          <SelectionField
            label="Kode Akun"
            options={chartOfAccounts}
            placeholder="Masukkan kode akun"
            fieldState={fieldState}
            defaultValue={expense.idCoa}
            {...field}
            isRequired={false}
          />
        )}
      />
      <div className="card-actions justify-end">
        <Button type="submit" variant="primary">
          Kirim
        </Button>
      </div>
    </Form>
  )
}

export default ModifiedFormUbahPengeluaran
