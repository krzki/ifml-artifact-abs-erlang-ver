import React from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from 'commons/auth'
import { Button, ListItem, VisualizationAttr } from 'commons/components'

const TahunCard = ({ tahunItem }) => {
  const { checkPermission } = useAuth()

  return (
    <ListItem>
      {/* Data Binding Tahun Card Element */}
      <div className="card-body">
        <VisualizationAttr
          label="Laporan Keuangan Tahun Anggaran"
          content={tahunItem?.name}
        />
        <div className="card-actions justify-end">
          {/* View Element Event Tahun Card Element*/}
          <Link to={`/summary/${tahunItem.id}`}>
            <Button variant="primary">Lihat</Button>
          </Link>
        </div>
      </div>
    </ListItem>
  )
}

export default TahunCard
