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

import updateStatusOfflineDonation from '../services/updateStatusOfflineDonation'

const ModifiedFormUpdateStatusKonfirmasiDonasiOffline = ({
  updateStatusDonasi,
  statuses,
  updateStatusKonfirmasiDonasiOffline,
}) => {
  const { control, handleSubmit } = useForm({
    defaultValues: updateStatusKonfirmasiDonasiOffline,
  })

  const navigate = useNavigate()

  const kirim = data => {
    const cleanData = cleanFormData(data)
    updateStatusOfflineDonation({
      ...cleanData,
    })
      .then(({ data: { data } }) => {
        navigate(
          `/confirmation/detail/${updateStatusKonfirmasiDonasiOffline.id}`
        )
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
      title="Update Status Konfirmasi Donasi Offline"
      onSubmit={handleSubmit(kirim)}
    >
      <VisualizationAttr
        label="Nama"
        content={updateStatusKonfirmasiDonasiOffline?.name}
      />
      <VisualizationAttr
        label="Deskripsi"
        content={updateStatusKonfirmasiDonasiOffline?.description}
      />
      <VisualizationAttr
        label="Tanggal"
        content={updateStatusKonfirmasiDonasiOffline?.date}
      />
      <VisualizationAttr
        label="Metode Pembayaran"
        content={updateStatusKonfirmasiDonasiOffline?.paymentMethod}
      />
      <VisualizationAttr
        label="Jumlah"
        content={updateStatusKonfirmasiDonasiOffline?.amount}
      />

      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <SelectionField
            label="Status"
            options={statuses}
            placeholder="Masukkan status"
            fieldState={fieldState}
            defaultValue={updateStatusKonfirmasiDonasiOffline.status}
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

export default ModifiedFormUpdateStatusKonfirmasiDonasiOffline
