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

import { useParams } from 'react-router-dom'
import ChartTable from '../components/ChartTable'
import getAutomaticReportPeriodicElement from '../services/getAutomaticReportPeriodicElement'

const LaporanArusKasTahunAnggaranPage = props => {
  const { checkPermission } = useAuth()
  const [chartOfAccountEntries, setChartOfAccountEntries] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: automaticReportPeriodicElement,
      } = await getAutomaticReportPeriodicElement({ id })
      setChartOfAccountEntries(automaticReportPeriodicElement.data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Laporan Arus Kas Tahun Anggaran</h2>
      </div>
      <div className="not-prose">
        <TableView {...{ chartOfAccountEntries }} />
      </div>
    </div>
  )
}

const TableView = ({ chartOfAccountEntries }) => {
  return (
    <div className="card bg-base-100">
      <div className="card-body p-0 sm:p-8 border sm:border-none">
        <Table compact>
          {chartOfAccountEntries && (
            <ChartTable chartItem={chartOfAccountEntries} />
          )}
        </Table>
      </div>
    </div>
  )
}

export default LaporanArusKasTahunAnggaranPage
