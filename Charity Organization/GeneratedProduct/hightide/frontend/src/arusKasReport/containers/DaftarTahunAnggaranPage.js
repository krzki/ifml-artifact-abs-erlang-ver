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

import TahunCard from '../components/TahunCard'
import getPeriodeListElement from '../services/getPeriodeListElement'

const DaftarTahunAnggaranPage = props => {
  const { checkPermission } = useAuth()
  const [allPeriode, setAllPeriode] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data: periodeListElement } = await getPeriodeListElement()
      setAllPeriode(periodeListElement.data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">Daftar Tahun Anggaran</h2>
      </div>
      <div className="not-prose">
        <GridView {...{ allPeriode }} />
      </div>
    </div>
  )
}

const GridView = ({ allPeriode }) => {
  return (
    <List column="4">
      {allPeriode &&
        allPeriode.map(tahunItem => (
          <TahunCard key={tahunItem.id} tahunItem={tahunItem} />
        ))}
    </List>
  )
}

export default DaftarTahunAnggaranPage
