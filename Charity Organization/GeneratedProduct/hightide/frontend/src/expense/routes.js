import RequireAuth from 'commons/auth/RequireAuth'

import TablePengeluaranPage from './containers/TablePengeluaranPage'
import DetailPengeluaranPage from './containers/DetailPengeluaranPage'
import TambahPengeluaranPage from './containers/TambahPengeluaranPage'
import UbahPengeluaranPage from './containers/UbahPengeluaranPage'

const expenseRoutes = [
  {
    path: '/expense',
    element: <TablePengeluaranPage />,
  },
  {
    path: '/expense/:id',
    element: <DetailPengeluaranPage />,
  },
  {
    path: '/expense/tambah',
    element: <TambahPengeluaranPage />,
  },
  {
    path: '/expense/ubah',
    element: <UbahPengeluaranPage />,
  },
]

export default expenseRoutes
