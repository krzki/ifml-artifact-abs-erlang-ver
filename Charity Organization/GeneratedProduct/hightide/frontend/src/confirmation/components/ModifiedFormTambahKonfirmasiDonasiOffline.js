import React, { useState } from 'react'
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
  FileInputField,
} from 'commons/components'
import {
  ALLOWED_PERMISSIONS,
  findAllowedPermission,
} from 'commons/constants/allowedPermission'
import cleanFormData from 'commons/utils/cleanFormData'

import saveOfflineDonation from '../services/saveOfflineDonation'

const ModifiedFormTambahKonfirmasiDonasiOffline = ({ programs }) => {
  const { control, handleSubmit } = useForm()

  const [files, setFiles] = useState({})

  const navigate = useNavigate()

  const kirim = data => {
    const cleanData = cleanFormData(data)
    saveOfflineDonation({
      ...cleanData,
      ...files,
    })
      .then(({ data: { data } }) => {
        navigate(`/confirmation/${data.id}`)
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
    <Form
      title="Tambah Konfirmasi Donasi Offline"
      onSubmit={handleSubmit(kirim)}
    >
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Harap masukkan nama donatur' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Nama Donatur"
            placeholder="Masukkan nama donatur"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{ required: 'Harap masukkan email' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Email"
            placeholder="Masukkan email"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="phone"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Nomor Telepon"
            placeholder="Masukkan nomor telepon"
            fieldState={fieldState}
            {...field}
            isRequired={false}
          />
        )}
      />
      <Controller
        name="amount"
        control={control}
        rules={{ required: 'Harap masukkan jumlah donasi' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Jumlah Donasi"
            placeholder="Masukkan jumlah donasi"
            type="number"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        rules={{ required: 'Harap masukkan tanggal transfer' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Tanggal Transfer"
            placeholder="Masukkan tanggal transfer"
            type="date"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="paymentMethod"
        control={control}
        rules={{ required: 'Harap masukkan metode pembayaran' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Metode Pembayaran"
            placeholder="Masukkan metode pembayaran"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <FileInputField
        onChange={e =>
          setFiles({ ...files, proofoftransfer: e.target.files[0] })
        }
        label="Bukti Transfer"
        placeholder="Masukkan bukti transfer"
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
        name="idprogram"
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
      <div className="card-actions justify-end">
        <Button type="submit" variant="primary">
          Kirim
        </Button>
      </div>
    </Form>
  )
}

export default ModifiedFormTambahKonfirmasiDonasiOffline
