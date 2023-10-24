import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import getActivityData from '../services/getActivityData'

import ModifiedFormUbahActivity from '../components/ModifiedFormUbahActivity'

const UbahActivityPage = props => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  const [activityData, setActivityData] = useState()

  useEffect(() => {
    const fetch = async () => {
      const { data: activityDataResponse } = await getActivityData({ id })

      setActivityData(activityDataResponse.data)
    }
    fetch()
  }, [])

  return activityData ? (
    <div>
      <Link to={`/activity/${id}`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <ModifiedFormUbahActivity {...{ activityData }} {...props} />
    </div>
  ) : (
    <></>
  )
}

export default UbahActivityPage
