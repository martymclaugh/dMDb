import axios from 'axios';

export const FETCH_OMDB = 'FETCH_OMDB';

const FULL_PLOT = "&plot=full&r=json"
const OMDB_URL ='http://www.omdbapi.com/?'; //+ i= for id || + t= for title

export function fetchOmdb(props) {
  console.log(props, 'action received')
  const { id, title, year } = props
  if (id){
    const request = axios.get(`${OMDB_URL}i=${id}${FULL_PLOT}`)
  } else if (title && year){
    const request = axios.get(`${OMDB_URL}t=${title}&y=${year}${FULL_PLOT}`)
  } else {
    const request = axios.get(`${OMDB_URL}t=${title}${FULL_PLOT}`)
  }
  return {
    type: FETCH_OMDB,
    payload: request
  }
}
