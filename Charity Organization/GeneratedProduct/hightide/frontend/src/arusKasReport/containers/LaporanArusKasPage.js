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
import ArusTable from '../components/ArusTable'
import getChartOfAccountEntryElement from '../services/getChartOfAccountEntryElement'
import exportArusKasReport from '../services/exportArusKasReport'

const LaporanArusKasPage = props => {
  const { checkPermission } = useAuth()
  const [chartOfAccountEntries, setChartOfAccountEntries] = useState()
  const {} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: chartOfAccountEntryElement,
      } = await getChartOfAccountEntryElement({})
      setChartOfAccountEntries(chartOfAccountEntryElement.data)
    }
    fetchData()
  }, [])

  const navigate = useNavigate()
  const download = async () => {
    await exportArusKasReport()
    navigate('/laporan-arus-kas')
  }
  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Laporan Arus Kas</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          <Button className="mt-2 sm:mt-0" onClick={download}>
            Download
          </Button>
        </div>
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
            <ArusTable arusItem={chartOfAccountEntries} />
          )}
        </Table>
      </div>
    </div>
  )
}

export default LaporanArusKasPage
