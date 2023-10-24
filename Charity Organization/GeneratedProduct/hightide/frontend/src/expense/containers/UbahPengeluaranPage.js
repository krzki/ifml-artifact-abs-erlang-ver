import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getPrograms from '../services/getPrograms'
import getChartOfAccounts from '../services/getChartOfAccounts'
import getExpense from '../services/getExpense'

import ModifiedFormUbahPengeluaran from '../components/ModifiedFormUbahPengeluaran'

const UbahPengeluaranPage = props => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const [programs, setPrograms] = useState()
  const [chartOfAccounts, setChartOfAccounts] = useState()
  const [expense, setExpense] = useState()

  useEffect(() => {
    const fetch = async () => {
      const { data: programsResponse } = await getPrograms()
      const { data: chartOfAccountsResponse } = await getChartOfAccounts()
      const { data: expenseResponse } = await getExpense({ id })

      setPrograms(programsResponse.data)
      setChartOfAccounts(chartOfAccountsResponse.data)
      setExpense(expenseResponse.data)
    }
    fetch()
  }, [])

  return programs && chartOfAccounts && expense ? (
    <div>
      <Link to={`/expense`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <ModifiedFormUbahPengeluaran
        {...{ programs, chartOfAccounts, expense }}
        {...props}
      />
    </div>
  ) : (
    <></>
  )
}

export default UbahPengeluaranPage
