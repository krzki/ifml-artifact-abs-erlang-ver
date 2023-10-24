import { Button } from 'commons/components'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import DetailActivity from '../components/DetailActivity'
import getActivityData from '../services/getActivityData'

const DetailActivityPage = props => {
  const [objectDetailActivity, setObjectDetailActivity] = useState()
  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const { data: activityData } = await getActivityData({ id })
      setObjectDetailActivity(activityData.data)
    }
    fetchData()
  }, [])

  return objectDetailActivity ? (
    <div className="prose max-w-screen-lg mx-auto p-6">
      <Link to={`/activity`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <h2>Detail Activity</h2>
      <DetailActivity {...{ objectDetailActivity }} />
    </div>
  ) : (
    <></>
  )
}

export default DetailActivityPage
