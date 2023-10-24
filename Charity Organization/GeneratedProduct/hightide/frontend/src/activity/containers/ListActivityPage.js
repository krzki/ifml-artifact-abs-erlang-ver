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

import ActivityCard from '../components/ActivityCard'
import getActivityListElement from '../services/getActivityListElement'

const ListActivityPage = props => {
  const { checkPermission } = useAuth()
  const [programs, setPrograms] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data: activityListElement } = await getActivityListElement()
      setPrograms(activityListElement.data)
    }
    fetchData()
  }, [])

  return (
    <div className="mx-auto w-full max-w-screen-xl prose p-6 flex flex-col prose">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-4">
        <h2 className="m-0 text-center">List Activity</h2>
        <div className="not-prose flex flex-col sm:flex-row justify-center items-center sm:gap-4">
          {programs && `Terdapat ${programs.length} Activity`}
          {checkPermission('CreateProgram') && (
            <Link to="/activity/tambah">
              <Button className="mt-2 sm:mt-0">Tambah Activity</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="not-prose">
        <GridView {...{ programs }} />
      </div>
    </div>
  )
}

const GridView = ({ programs }) => {
  return (
    <List column="4">
      {programs &&
        programs.map(activityItem => (
          <ActivityCard key={activityItem.id} activityItem={activityItem} />
        ))}
    </List>
  )
}

export default ListActivityPage
