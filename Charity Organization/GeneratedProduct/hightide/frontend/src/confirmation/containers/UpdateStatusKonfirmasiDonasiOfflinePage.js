import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getUpdateStatusDonasi from '../services/getUpdateStatusDonasi'
import getStatuses from '../services/getStatuses'
import getUpdateStatusKonfirmasiDonasiOffline from '../services/getUpdateStatusKonfirmasiDonasiOffline'

import ModifiedFormUpdateStatusKonfirmasiDonasiOffline from '../components/ModifiedFormUpdateStatusKonfirmasiDonasiOffline'

const UpdateStatusKonfirmasiDonasiOfflinePage = props => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const [updateStatusDonasi, setUpdateStatusDonasi] = useState()
  const [statuses, setStatuses] = useState()
  const [
    updateStatusKonfirmasiDonasiOffline,
    setUpdateStatusKonfirmasiDonasiOffline,
  ] = useState()

  useEffect(() => {
    const fetch = async () => {
      const { data: updateStatusDonasiResponse } = await getUpdateStatusDonasi({
        id,
      })
      const { data: statusesResponse } = await getStatuses()
      const {
        data: updateStatusKonfirmasiDonasiOfflineResponse,
      } = await getUpdateStatusKonfirmasiDonasiOffline({ id })

      setUpdateStatusDonasi(updateStatusDonasiResponse.data)
      setStatuses(statusesResponse.data)
      setUpdateStatusKonfirmasiDonasiOffline(
        updateStatusKonfirmasiDonasiOfflineResponse.data
      )
    }
    fetch()
  }, [])

  return updateStatusDonasi &&
    statuses &&
    updateStatusKonfirmasiDonasiOffline ? (
    <div>
      <ModifiedFormUpdateStatusKonfirmasiDonasiOffline
        {...{
          updateStatusDonasi,
          statuses,
          updateStatusKonfirmasiDonasiOffline,
        }}
        {...props}
      />
    </div>
  ) : (
    <></>
  )
}

export default UpdateStatusKonfirmasiDonasiOfflinePage
