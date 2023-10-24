import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getPrograms from '../services/getPrograms'
import getChartOfAccounts from '../services/getChartOfAccounts'
import getIncome from '../services/getIncome'

import ModifiedFormUbahPemasukan from '../components/ModifiedFormUbahPemasukan'

const UbahPemasukanPage = props => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const [programs, setPrograms] = useState()
  const [chartOfAccounts, setChartOfAccounts] = useState()
  const [income, setIncome] = useState()

  useEffect(() => {
    const fetch = async () => {
      const { data: programsResponse } = await getPrograms()
      const { data: chartOfAccountsResponse } = await getChartOfAccounts()
      const { data: incomeResponse } = await getIncome({ id })

      setPrograms(programsResponse.data)
      setChartOfAccounts(chartOfAccountsResponse.data)
      setIncome(incomeResponse.data)
    }
    fetch()
  }, [])

  return programs && chartOfAccounts && income ? (
    <div>
      <Link to={`/income`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <ModifiedFormUbahPemasukan
        {...{ programs, chartOfAccounts, income }}
        {...props}
      />
    </div>
  ) : (
    <></>
  )
}

export default UbahPemasukanPage
