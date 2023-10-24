import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, TableRow, TableCell, Modal } from 'commons/components'
import { isMobile } from 'commons/utils/responsive'

import deleteIncome from '../services/deleteIncome.js'

const PemasukanTable = ({ pemasukanItem }) => {
  const { checkPermission } = useAuth()
  const navigate = useNavigate()
  const detail = async () => {
    isMobile() && navigate(`/income/${pemasukanItem.id}`)
  }

  const [
    showModalKonfirmasiHapusPemasukan,
    setShowModalKonfirmasiHapusPemasukan,
  ] = React.useState(false)

  const hapus = async pemasukan => {
    await deleteIncome({
      id: pemasukan.id,
    })
    window.location.reload(false)
  }

  return (
    <TableRow distinct={false} onClick={detail}>
      {/* Data Binding Pemasukan Table Element*/}
      <TableCell isHiddenMobile>{pemasukanItem?.datestamp}</TableCell>
      <TableCell>{pemasukanItem?.programName}</TableCell>
      <TableCell isCurrency>{pemasukanItem?.amount}</TableCell>
      <TableCell isHiddenMobile>{pemasukanItem?.paymentMethod}</TableCell>
      <TableCell isHiddenMobile>
        <div class="btn-group gap-2">
          {/* View Element Event Pemasukan Table Element*/}
          <Link to={`/income/${pemasukanItem.id}`}>
            <Button variant="primary">Detail</Button>
          </Link>

          {checkPermission('UpdateIncome') && (
            <Link to={`/income/ubah?id=${pemasukanItem.id}`}>
              <Button variant="secondary">Ubah</Button>
            </Link>
          )}

          {checkPermission('DeleteIncome') && (
            <Link to="">
              <Button
                variant="tertiary"
                onClick={() => setShowModalKonfirmasiHapusPemasukan(true)}
              >
                Hapus
              </Button>
            </Link>
          )}
        </div>
      </TableCell>
      <Modal isShow={showModalKonfirmasiHapusPemasukan}>
        <Link to="">
          <Button
            variant="tertiary"
            onClick={() => setShowModalKonfirmasiHapusPemasukan(false)}
          >
            Batal
          </Button>
        </Link>
        <Link to="">
          <Button variant="danger" onClick={() => hapus(pemasukanItem)}>
            Hapus
          </Button>
        </Link>
      </Modal>
    </TableRow>
  )
}

export default PemasukanTable
