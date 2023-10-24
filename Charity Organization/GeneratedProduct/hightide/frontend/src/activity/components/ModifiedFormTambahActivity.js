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

import saveActivity from '../services/saveActivity'

const ModifiedFormTambahActivity = ({}) => {
  const { control, handleSubmit } = useForm()

  const [files, setFiles] = useState({})

  const navigate = useNavigate()

  const kirim = data => {
    const cleanData = cleanFormData(data)
    saveActivity({
      ...cleanData,
      ...files,
    })
      .then(({ data: { data } }) => {
        navigate(`/activity`)
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
    <Form title="Tambah Activity" onSubmit={handleSubmit(kirim)}>
      <Controller
        name="name"
        control={control}
        rules={{ required: 'Harap masukkan nama program' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Nama Program"
            placeholder="Masukkan nama program"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="description"
        control={control}
        rules={{ required: 'Harap masukkan deskripsi' }}
        render={({ field, fieldState }) => (
          <TextAreaField
            label="Deskripsi"
            placeholder="Masukkan deskripsi"
            fieldState={fieldState}
            {...field}
            isRequired={true}
          />
        )}
      />
      <Controller
        name="target"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Target"
            placeholder="Masukkan target"
            fieldState={fieldState}
            {...field}
            isRequired={false}
          />
        )}
      />
      <Controller
        name="partner"
        control={control}
        render={({ field, fieldState }) => (
          <InputField
            label="Partner"
            placeholder="Masukkan partner"
            fieldState={fieldState}
            {...field}
            isRequired={false}
          />
        )}
      />
      <FileInputField
        onChange={e => setFiles({ ...files, logoUrl: e.target.files[0] })}
        label="Gambar Program"
        placeholder="Masukkan gambar program"
      />
      <Controller
        name="executionDate"
        control={control}
        rules={{ required: 'Harap masukkan tanggal pelaksanaan' }}
        render={({ field, fieldState }) => (
          <InputField
            label="Tanggal Pelaksanaan"
            placeholder="Masukkan tanggal pelaksanaan"
            type="date"
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

export default ModifiedFormTambahActivity
