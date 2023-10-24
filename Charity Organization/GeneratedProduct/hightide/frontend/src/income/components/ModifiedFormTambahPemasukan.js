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

import saveIncome from '../services/saveIncome'

const ModifiedFormTambahPemasukan = ({ programs, chartOfAccounts }) => {
  const { control, handleSubmit } = useForm()

  const navigate = useNavigate()

  const kirim = data => {
    const cleanData = cleanFormData(data)
    saveIncome({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(`/income`)
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
    <Form title="Tambah Pemasukan" onSubmit={handleSubmit(kirim)}>
      <Controller
        name="datestamp"
        control={control}
        rules={{ required: 'Harap masukkan tanggal' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Tanggal"
            placeholder="Masukkan tanggal"
            type="date"
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
            {...field}
            isRequired={false}
          />
        )}
      />
      <Controller
        name="paymentMethod"
        control={control}
        rules={{ required: 'Harap pilih metode pembayaran' }}
        render={({ field, fieldState }) => (
          <SelectionField
            label="Metode Pembayaran"
            options={[
              { id: 'ShopeePay', name: 'ShopeePay' },
              { id: 'Transfer Bank', name: 'Transfer Bank' },
              { id: 'Ovo', name: 'Ovo' },
              { id: 'Gopay', name: 'Gopay' },
            ]}
            placeholder="Masukkan metode pembayaran"
            fieldState={fieldState}
            {...field}
            isRequired={true}
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

export default ModifiedFormTambahPemasukan
