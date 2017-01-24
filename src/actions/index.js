import axios from 'axios';

export const FETCH_OMDB = 'FETCH_OMDB';

const OMDB_URL ='http://www.omdbapi.com/?'; //+ i= for id || + t= for title
const FULL_PLOT = "&plot=full&r=json"

export function fetchOmdb(props) {
  const { id, title, year } = props
  let request
  if (id){
    request = axios.get(`${OMDB_URL}i=${id}${FULL_PLOT}`);
  } else if (title && year){
    request = axios.get(`${OMDB_URL}t=${title}&y=${year}${FULL_PLOT}`);
  } else {
    request = axios.get(`${OMDB_URL}t=${title}${FULL_PLOT}`);
  }
  return {
    type: FETCH_OMDB,
    payload: request
  };
}
