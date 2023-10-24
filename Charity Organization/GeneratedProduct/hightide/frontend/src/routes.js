import activityRoutes from 'activity/routes'

import incomeRoutes from 'income/routes'

import expenseRoutes from 'expense/routes'

import arusKasReportRoutes from 'arusKasReport/routes'

import confirmationRoutes from 'confirmation/routes'

import { useRoutes } from 'react-router-dom'
import commonRoutes from 'commons/routes.js'
import userRoutes from 'user/routes'
import roleRoutes from 'role/routes'
import staticPageRoutes from 'staticPage/routes'

const GlobalRoutes = () => {
  const router = useRoutes([
    ...commonRoutes,
    ...staticPageRoutes,
    ...userRoutes,
    ...roleRoutes,

    ...activityRoutes,
    ...incomeRoutes,
    ...expenseRoutes,
    ...arusKasReportRoutes,
    ...confirmationRoutes,
  ])
  return router
}

export default GlobalRoutes
