import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailKonfirmasiDonasiOffline from '../components/DetailKonfirmasiDonasiOffline'
import getKonfirmasiDonasiOfflineData from '../services/getKonfirmasiDonasiOfflineData'

const DetailKonfirmasiDonasiOfflinePage = props => {
  const [
    objectDetailKonfirmasiDonasiOffline,
    setObjectDetailKonfirmasiDonasiOffline,
  ] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: konfirmasiDonasiOfflineData,
      } = await getKonfirmasiDonasiOfflineData({ id })
      setObjectDetailKonfirmasiDonasiOffline(konfirmasiDonasiOfflineData.data)
    }
    fetchData()
  }, [])

  return objectDetailKonfirmasiDonasiOffline ? (
    <div className="prose max-w-screen-lg mx-auto p-6">
      <h2>Detail Konfirmasi Donasi Offline</h2>
      <DetailKonfirmasiDonasiOffline
        {...{ objectDetailKonfirmasiDonasiOffline }}
      />
    </div>
  ) : (
    <></>
  )
}

export default DetailKonfirmasiDonasiOfflinePage
