import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getPrograms from '../services/getPrograms'
import getChartOfAccounts from '../services/getChartOfAccounts'

import ModifiedFormTambahPengeluaran from '../components/ModifiedFormTambahPengeluaran'

const TambahPengeluaranPage = props => {
  const [programs, setPrograms] = useState()
  const [chartOfAccounts, setChartOfAccounts] = useState()

  useEffect(() => {
    const fetch = async () => {
      const { data: programsResponse } = await getPrograms()
      const { data: chartOfAccountsResponse } = await getChartOfAccounts()

      setPrograms(programsResponse.data)
      setChartOfAccounts(chartOfAccountsResponse.data)
    }
    fetch()
  }, [])

  return programs && chartOfAccounts ? (
    <div>
      <Link to={`/expense`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <ModifiedFormTambahPengeluaran
        {...{ programs, chartOfAccounts }}
        {...props}
      />
    </div>
  ) : (
    <></>
  )
}

export default TambahPengeluaranPage
