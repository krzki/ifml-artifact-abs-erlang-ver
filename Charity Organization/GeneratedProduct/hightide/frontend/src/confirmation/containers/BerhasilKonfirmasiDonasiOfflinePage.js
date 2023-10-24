import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailBerhasilKonfirmasiDonasi from '../components/DetailBerhasilKonfirmasiDonasi'
import getDonationData from '../services/getDonationData'

const BerhasilKonfirmasiDonasiOfflinePage = props => {
  const [confirmationData, setConfirmationData] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const { data: donationData } = await getDonationData({ id })
      setConfirmationData(donationData.data)
    }
    fetchData()
  }, [])

  return confirmationData ? (
    <div className="prose max-w-screen-lg mx-auto p-6">
      <h2>Berhasil Konfirmasi Donasi Offline</h2>
      <DetailBerhasilKonfirmasiDonasi {...{ confirmationData }} />
    </div>
  ) : (
    <></>
  )
}

export default BerhasilKonfirmasiDonasiOfflinePage
