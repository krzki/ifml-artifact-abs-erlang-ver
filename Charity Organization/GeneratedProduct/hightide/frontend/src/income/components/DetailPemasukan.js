import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components'

const DetailPemasukan = ({ objectDetailIncome }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Pemasukan Data */}
      <div className="grid grid-cols-2">
        <VisualizationAttr
          label="Tanggal"
          content={objectDetailIncome?.datestamp}
        />
        <VisualizationAttr
          label="Keterangan"
          content={objectDetailIncome?.description}
        />
        <VisualizationAttr
          label="Jumlah"
          content={objectDetailIncome?.amount}
          isCurrency
        />
        <VisualizationAttr
          label="Nama Program"
          content={objectDetailIncome?.programName}
        />
        <VisualizationAttr
          label="Jenis Pemasukan"
          content={objectDetailIncome?.coaName}
        />
        <VisualizationAttr
          label="Metode Pembayaran"
          content={objectDetailIncome?.paymentMethod}
        />
      </div>
      <div class="card-actions justify-end">
        {/* View Element Event Pemasukan Element*/}
      </div>
    </div>
  )
}

export default DetailPemasukan
