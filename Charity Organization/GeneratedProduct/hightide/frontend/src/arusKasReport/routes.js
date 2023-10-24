import RequireAuth from 'commons/auth/RequireAuth'

import DaftarTahunAnggaranPage from './containers/DaftarTahunAnggaranPage'
import LaporanArusKasTahunAnggaranPage from './containers/LaporanArusKasTahunAnggaranPage'
import LaporanArusKasPage from './containers/LaporanArusKasPage'

const arusKasReportRoutes = [
  {
    path: '/summary/:id',
    element: <LaporanArusKasTahunAnggaranPage />,
  },
  {
    path: '/laporan-arus-kas',
    element: <LaporanArusKasPage />,
  },
  {
    path: '/summary',
    element: <DaftarTahunAnggaranPage />,
  },
]

export default arusKasReportRoutes
