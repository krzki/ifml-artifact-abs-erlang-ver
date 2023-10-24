import RequireAuth from 'commons/auth/RequireAuth'

import ListActivityPage from './containers/ListActivityPage'
import DetailActivityPage from './containers/DetailActivityPage'
import TambahActivityPage from './containers/TambahActivityPage'
import UbahActivityPage from './containers/UbahActivityPage'

const activityRoutes = [
  {
    path: '/activity',
    element: <ListActivityPage />,
  },
  {
    path: '/activity/:id',
    element: <DetailActivityPage />,
  },
  {
    path: '/activity/tambah',
    element: <TambahActivityPage />,
  },
  {
    path: '/activity/ubah',
    element: <UbahActivityPage />,
  },
]

export default activityRoutes
