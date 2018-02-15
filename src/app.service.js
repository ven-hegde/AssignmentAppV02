import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com/'

const appService = {
  getData () {
    return new Promise((resolve) => {
      axios.get('business-28262-table.json')
      .then(response => {
        resolve(response.data)
      })
    })
  },
  login (creds) {
    return new Promise((resolve, reject) => {
      axios.post('/services/auth.php', creds).then(response => {
        resolve(response.data)
      }).catch(response => {
        reject(response.status)
      })
    })
  }
}

export default appService
