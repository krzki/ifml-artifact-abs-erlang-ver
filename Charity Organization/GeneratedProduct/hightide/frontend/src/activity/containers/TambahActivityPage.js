import { Button } from 'commons/components'
import React from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import ModifiedFormTambahActivity from '../components/ModifiedFormTambahActivity'

const TambahActivityPage = props => {
  return (
    <div>
      <Link to={`/activity`}>
        <Button className="absolute z-10 top-24 left-8" variant="secondary">
          Kembali
        </Button>
      </Link>

      <ModifiedFormTambahActivity {...props} />
    </div>
  )
}

export default TambahActivityPage
