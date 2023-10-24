import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components'

const DetailBerhasilKonfirmasiDonasi = ({ confirmationData }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Berhasil Data */}
      <div className="grid grid-cols-2">
        <VisualizationAttr
          label="Donasi Berhasil! Berikut Kode Donasi Anda"
          content={confirmationData?.id}
        />
        <VisualizationAttr label="Donatur" content={confirmationData?.name} />
        <VisualizationAttr
          label="Jumlah Donasi"
          content={confirmationData?.amount}
        />
        <VisualizationAttr
          label="Tanggal Bayar"
          content={confirmationData?.date}
        />
        <VisualizationAttr
          label="Bukti Transfer"
          content={confirmationData?.proofOfTransfer}
        />
      </div>
      <div class="card-actions justify-end">
        {/* View Element Event Berhasil Element*/}
      </div>
    </div>
  )
}

export default DetailBerhasilKonfirmasiDonasi
