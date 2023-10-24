import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, TableRow, TableCell, Modal } from 'commons/components'
import { isMobile } from 'commons/utils/responsive'

import deleteExpense from '../services/deleteExpense.js'

const PengeluaranTable = ({ pengeluaranItem }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()
  const detail = async () => {
    isMobile() && navigate(`/expense/${pengeluaranItem.id}`)
  }

  const [
    showModalKonfirmasiHapusPengeluaran,
    setShowModalKonfirmasiHapusPengeluaran,
  ] = React.useState(false)

  const hapus = async pengeluaran => {
    await deleteExpense({
      id: pengeluaran.id,
    })
    window.location.reload(false)
  }

  return (
    <TableRow distinct={false} onClick={detail}>
      {/* Data Binding Pengeluaran Table Element*/}
      <TableCell isHiddenMobile>{pengeluaranItem?.datestamp}</TableCell>
      <TableCell>{pengeluaranItem?.programName}</TableCell>
      <TableCell isCurrency>{pengeluaranItem?.amount}</TableCell>
      <TableCell isHiddenMobile>{pengeluaranItem?.coaName}</TableCell>
      <TableCell isHiddenMobile>
        <div class="btn-group gap-2">
          {/* View Element Event Pengeluaran Table Element*/}
          <Link to={`/expense/${pengeluaranItem.id}`}>
            <Button variant="primary">Detail</Button>
          </Link>

          {checkPermission('UpdateExpense') && (
            <Link to={`/expense/ubah?id=${pengeluaranItem.id}`}>
              <Button variant="secondary">Ubah</Button>
            </Link>
          )}

          {checkPermission('DeleteExpense') && (
            <Link to="">
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusPengeluaran(true)}
              >
                Hapus
              </Button>
            </Link>
          )}
        </div>
      </TableCell>
      <Modal isShow={showModalKonfirmasiHapusPengeluaran}>
        <Link to="">
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusPengeluaran(false)}
          >
            Batal
          </Button>
        </Link>
        <Link to="">
          <Button variant="danger" onClick={() => hapus(pengeluaranItem)}>
            Hapus
          </Button>
        </Link>
      </Modal>
    </TableRow>
  )
}

export default PengeluaranTable
