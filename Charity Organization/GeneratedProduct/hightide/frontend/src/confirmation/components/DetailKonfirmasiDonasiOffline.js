import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components'

const DetailKonfirmasiDonasiOffline = ({
  objectDetailKonfirmasiDonasiOffline,
}) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()

  const updateStatus = async () => {
    navigate(
      '/confirmation/update?' + `id=${objectDetailKonfirmasiDonasiOffline.id}`
    )
  }

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Konfirmasi Data */}
      <VisualizationAttr
        label="Gambar Bukti Transfer"
        content={objectDetailKonfirmasiDonasiOffline?.proofOfTransfer}
      />
      <div className="grid grid-cols-2">
        <VisualizationAttr
          label="Nama"
          content={objectDetailKonfirmasiDonasiOffline?.name}
        />
        <VisualizationAttr
          label="Email"
          content={objectDetailKonfirmasiDonasiOffline?.email}
        />
        <VisualizationAttr
          label="No. Telp"
          content={objectDetailKonfirmasiDonasiOffline?.phone}
        />
        <VisualizationAttr
          label="Tanggal"
          content={objectDetailKonfirmasiDonasiOffline?.date}
        />
        <VisualizationAttr
          label="Jumlah"
          content={objectDetailKonfirmasiDonasiOffline?.amount}
        />
        <VisualizationAttr
          label="Metode Pembayaran"
          content={objectDetailKonfirmasiDonasiOffline?.paymentMethod}
        />
        <VisualizationAttr
          label="Status"
          content={objectDetailKonfirmasiDonasiOffline?.status}
        />
      </div>
      <VisualizationAttr
        label="Deskripsi"
        content={objectDetailKonfirmasiDonasiOffline?.description}
      />
      <div class="card-actions justify-end">
        {/* View Element Event Konfirmasi Element*/}
        {checkPermission('UpdateCOD') && (
          <Button variant="secondary" onClick={updateStatus}>
            Update Status
          </Button>
        )}
      </div>
    </div>
  )
}

export default DetailKonfirmasiDonasiOffline
