import RequireAuth from 'commons/auth/RequireAuth'

import TableKonfirmasiDonasiOfflinePage from './containers/TableKonfirmasiDonasiOfflinePage'
import DetailKonfirmasiDonasiOfflinePage from './containers/DetailKonfirmasiDonasiOfflinePage'
import TambahKonfirmasiDonasiOfflinePage from './containers/TambahKonfirmasiDonasiOfflinePage'
import BerhasilKonfirmasiDonasiOfflinePage from './containers/BerhasilKonfirmasiDonasiOfflinePage'
import UpdateStatusKonfirmasiDonasiOfflinePage from './containers/UpdateStatusKonfirmasiDonasiOfflinePage'

const confirmationRoutes = [
  {
    path: '/confirmation/list',
    element: (
      <RequireAuth permissionNeeded="ReadCOD">
        <TableKonfirmasiDonasiOfflinePage />
      </RequireAuth>
    ),
  },
  {
    path: '/confirmation/detail/:id',
    element: <DetailKonfirmasiDonasiOfflinePage />,
  },
  {
    path: '/confirmation',
    element: <TambahKonfirmasiDonasiOfflinePage />,
  },
  {
    path: '/confirmation/:id',
    element: <BerhasilKonfirmasiDonasiOfflinePage />,
  },
  {
    path: '/confirmation/update',
    element: (
      <RequireAuth permissionNeeded="UpdateCOD">
        <UpdateStatusKonfirmasiDonasiOfflinePage />
      </RequireAuth>
    ),
  },
]

export default confirmationRoutes
