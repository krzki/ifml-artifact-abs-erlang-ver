import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, ListItem, VisualizationAttr } from 'commons/components'

const ActivityCard = ({ activityItem }) => {
  const { checkPermission } = useAuth()

  return (
    <ListItem>
      {/* Data Binding Activity Card Element */}
      <div className="card-body">
        <VisualizationAttr label="Gambar" content={activityItem?.logoUrl} />
        <VisualizationAttr label="" content={activityItem?.name} />
        <div className="card-actions justify-end">
          {/* View Element Event Activity Card Element*/}
          <Link to={`/activity/${activityItem.id}`}>
            <Button variant="primary">Detail</Button>
          </Link>
        </div>
      </div>
    </ListItem>
  )
}

export default ActivityCard
