import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailPengeluaran from '../components/DetailPengeluaran'
import getExpenseData from '../services/getExpenseData'

const DetailPengeluaranPage = props => {
  const [objectDetailExpense, setObjectDetailExpense] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const { data: expenseData } = await getExpenseData({ id })
      setObjectDetailExpense(expenseData.data)
    }
    fetchData()
  }, [])

  return objectDetailExpense ? (
    <div className="prose max-w-screen-lg mx-auto p-6">
      <Link to={`/expense`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <h2>Detail Pengeluaran</h2>
      <DetailPengeluaran {...{ objectDetailExpense }} />
    </div>
  ) : (
    <></>
  )
}

export default DetailPengeluaranPage
