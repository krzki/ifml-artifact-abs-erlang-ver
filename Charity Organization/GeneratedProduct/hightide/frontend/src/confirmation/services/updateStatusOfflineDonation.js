import axios from 'axios'
import tokenManager from 'commons/utils/token'
import environment from 'commons/utils/environment'

const updateStatusOfflineDonation = (data = {}) => {
  let body = data

  const { getToken } = tokenManager()
  const token = getToken()

  return axios.put(
    `${environment.rootApi}/call/confirmation/updatestatus`,
    body,
    {
      params: { token },

      headers: {
        Authorization: token,
      },
    }
  )
}

export default updateStatusOfflineDonation
