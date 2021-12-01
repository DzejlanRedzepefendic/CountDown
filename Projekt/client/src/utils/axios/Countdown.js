import axios from 'axios'

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
}

async function getAllCountdowns() {
  axios.get('http://localhost:5000/api/v1/countdown', config).then((res) => {
    console.log(res.data.countdowns)
  })
}

export default getAllCountdowns
