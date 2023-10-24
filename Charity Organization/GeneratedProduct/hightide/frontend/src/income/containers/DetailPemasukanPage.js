import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailPemasukan from '../components/DetailPemasukan'
import getIncomeData from '../services/getIncomeData'

const DetailPemasukanPage = props => {
  const [objectDetailIncome, setObjectDetailIncome] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const { data: incomeData } = await getIncomeData({ id })
      setObjectDetailIncome(incomeData.data)
    }
    fetchData()
  }, [])

  return objectDetailIncome ? (
    <div className="prose max-w-screen-lg mx-auto p-6">
      <Link to={`/income`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <h2>Detail Pemasukan</h2>
      <DetailPemasukan {...{ objectDetailIncome }} />
    </div>
  ) : (
    <></>
  )
}

export default DetailPemasukanPage
