import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import {
  Button,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  List,
} from 'commons/components'

import KonfirmasiTable from '../components/KonfirmasiTable'
import getKonfirmasiDonasiOfflineListElement from '../services/getKonfirmasiDonasiOfflineListElement'

const TableKonfirmasiDonasiOfflinePage = props => {
  const { checkPermission } = useAuth()
  const [jsonAllDonasiOffline, setJsonAllDonasiOffline] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: konfirmasiDonasiOfflineListElement,
      } = await getKonfirmasiDonasiOfflineListElement()
      setJsonAllDonasiOffline(konfirmasiDonasiOfflineListElement.data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Table Konfirmasi Donasi Offline</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          <Link to="/confirmation">
            <Button className="mt-2 sm:mt-0">Konfirmasi Donasi</Button>
          </Link>
        </div>
      </div>
      <div className="not-prose">
        <TableView {...{ jsonAllDonasiOffline }} />
      </div>
    </div>
  )
}

const TableView = ({ jsonAllDonasiOffline }) => {
  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <Table className={'table-fixed sm:table-auto'}>
          <TableHead>
            <TableRow>
              <TableCell id="nama" isHeading>
                Nama
              </TableCell>
              <TableCell id="email" isHeading isHiddenMobile>
                Email
              </TableCell>
              <TableCell id="no.Telp" isHeading isHiddenMobile>
                No. Telp
              </TableCell>
              <TableCell id="metodePembayaran" isHeading isHiddenMobile>
                Metode Pembayaran
              </TableCell>
              <TableCell id="jumlah" isHeading isCurrency>
                Jumlah
              </TableCell>
              <TableCell id="status" isHeading isHiddenMobile>
                Status
              </TableCell>
              <TableCell isHiddenMobile></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jsonAllDonasiOffline &&
              jsonAllDonasiOffline.map(konfirmasiItem => (
                <KonfirmasiTable
                  key={konfirmasiItem.id}
                  konfirmasiItem={konfirmasiItem}
                />
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TableKonfirmasiDonasiOfflinePage
