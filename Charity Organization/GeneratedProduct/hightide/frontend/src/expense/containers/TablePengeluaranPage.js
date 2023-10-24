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

import PengeluaranTable from '../components/PengeluaranTable'
import getExpenseListElement from '../services/getExpenseListElement'

const TablePengeluaranPage = props => {
  const { checkPermission } = useAuth()
  const [expenses, setExpenses] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data: expenseListElement } = await getExpenseListElement()
      setExpenses(expenseListElement.data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Table Pengeluaran</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          {checkPermission('CreateExpense') && (
            <Link to="/expense/tambah">
              <Button className="mt-2 sm:mt-0">Tambah Pengeluaran</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="not-prose">
        <TableView {...{ expenses }} />
      </div>
    </div>
  )
}

const TableView = ({ expenses }) => {
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
              <TableCell id="kategori" isHeading isHiddenMobile>
                Kategori
              </TableCell>
              <TableCell isHiddenMobile></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses &&
              expenses.map(pengeluaranItem => (
                <PengeluaranTable
                  key={pengeluaranItem.id}
                  pengeluaranItem={pengeluaranItem}
                />
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default TablePengeluaranPage
