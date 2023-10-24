import React, { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, Detail, VisualizationAttr, Modal } from 'commons/components'

const DetailPengeluaran = ({ objectDetailExpense }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="card-body mx-auto w-full bg-white shadow-xl card not-prose">
      {/* Data Binding Pengeluaran Data */}
      <div className="grid grid-cols-2">
        <VisualizationAttr
          label="Tanggal"
          content={objectDetailExpense?.datestamp}
        />
        <VisualizationAttr
          label="Keterangan"
          content={objectDetailExpense?.description}
        />
        <VisualizationAttr
          label="Jumlah"
          content={objectDetailExpense?.amount}
          isCurrency
        />
        <VisualizationAttr
          label="Nama Program"
          content={objectDetailExpense?.programName}
        />
        <VisualizationAttr
          label="Jenis Pengeluaran"
          content={objectDetailExpense?.coaName}
        />
      </div>
      <div class="card-actions justify-end">
        {/* View Element Event Pengeluaran Element*/}
      </div>
    </div>
  )
}

export default DetailPengeluaran
