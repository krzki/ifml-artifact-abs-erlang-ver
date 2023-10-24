import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, TableRow, TableCell, Modal } from 'commons/components'
import { isMobile } from 'commons/utils/responsive'

const KonfirmasiTable = ({ konfirmasiItem }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()
  const detail = async () => {
    isMobile() && navigate(`/confirmation/detail/${konfirmasiItem.id}`)
  }

  return (
    <TableRow distinct={false} onClick={detail}>
      {/* Data Binding Konfirmasi Table Element*/}
      <TableCell>{konfirmasiItem?.name}</TableCell>
      <TableCell isHiddenMobile>{konfirmasiItem?.email}</TableCell>
      <TableCell isHiddenMobile>{konfirmasiItem?.phone}</TableCell>
      <TableCell isHiddenMobile>{konfirmasiItem?.paymentMethod}</TableCell>
      <TableCell isCurrency>{konfirmasiItem?.amount}</TableCell>
      <TableCell isHiddenMobile>{konfirmasiItem?.status}</TableCell>
      <TableCell isHiddenMobile>
        <div class="btn-group gap-2">
          {/* View Element Event Konfirmasi Table Element*/}
          {checkPermission('UpdateCOD') && (
            <Link to={`/confirmation/update?id=${konfirmasiItem.id}`}>
              <Button variant="secondary">Update Status</Button>
            </Link>
          )}

          <Link to={`/confirmation/detail/${konfirmasiItem.id}`}>
            <Button variant="primary">Detail</Button>
          </Link>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default KonfirmasiTable
