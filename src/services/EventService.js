import axios from 'axios'

// Single axios instance for our App
const apiClient = axios.create({
  // base URL for all axios calls to use
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    // add this to our base URL to get events from database
    return apiClient.get('/events')
  }
}