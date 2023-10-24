import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getPrograms from '../services/getPrograms'

import ModifiedFormTambahKonfirmasiDonasiOffline from '../components/ModifiedFormTambahKonfirmasiDonasiOffline'

const TambahKonfirmasiDonasiOfflinePage = props => {
  const [programs, setPrograms] = useState()

  useEffect(() => {
    const fetch = async () => {
      const { data: programsResponse } = await getPrograms()

      setPrograms(programsResponse.data)
    }
    fetch()
  }, [])

  return programs ? (
    <div>
      <ModifiedFormTambahKonfirmasiDonasiOffline {...{ programs }} {...props} />
    </div>
  ) : (
    <></>
  )
}

export default TambahKonfirmasiDonasiOfflinePage
