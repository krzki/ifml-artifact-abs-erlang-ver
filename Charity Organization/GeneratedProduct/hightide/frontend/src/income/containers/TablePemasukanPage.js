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

import PemasukanTable from '../components/PemasukanTable'
import getIncomeListElement from '../services/getIncomeListElement'

const TablePemasukanPage = props => {
  const { checkPermission } = useAuth()
  const [incomes, setIncomes] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data: incomeListElement } = await getIncomeListElement()
      setIncomes(incomeListElement.data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Table Pemasukan</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          {checkPermission('CreateIncome') && (
            <Link to="/income/tambah">
              <Button className="mt-2 sm:mt-0">Tambah Pemasukan</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="not-prose">
        <TableView {...{ incomes }} />
      </div>
    </div>
  )
}

const TableView = ({ incomes }) => {
  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <Table className={'table-fixed sm:table-auto'}>
          <TableHead>
            <TableRow>
              <TableCell id="tanggal" isHeading isHiddenMobile>
                Tanggal
              </TableCell>
              <TableCell id="program" isHeading>
                Program
              </TableCell>
              <TableCell id="jumlah" isHeading isCurrency>
                Jumlah
              </TableCell>
              <TableCell id="metodePembayaran" isHeading isHiddenMobile>
                Metode Pembayaran
              </TableCell>
              <TableCell isHiddenMobile></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incomes &&
              incomes.map(pemasukanItem => (
                <PemasukanTable
                  key={pemasukanItem.id}
                  pemasukanItem={pemasukanItem}
                />
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TablePemasukanPage
