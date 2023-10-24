import RequireAuth from 'commons/auth/RequireAuth'

import TablePemasukanPage from './containers/TablePemasukanPage'
import DetailPemasukanPage from './containers/DetailPemasukanPage'
import TambahPemasukanPage from './containers/TambahPemasukanPage'
import UbahPemasukanPage from './containers/UbahPemasukanPage'

const incomeRoutes = [
  {
    path: '/income',
    element: <TablePemasukanPage />,
  },
  {
    path: '/income/:id',
    element: <DetailPemasukanPage />,
  },
  {
    path: '/income/tambah',
    element: <TambahPemasukanPage />,
  },
  {
    path: '/income/ubah',
    element: <UbahPemasukanPage />,
  },
]

export default incomeRoutes
