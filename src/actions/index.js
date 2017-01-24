import axios from 'axios';

export const FETCH_OMDB = 'FETCH_OMDB';

const OMDB_URL ='http://www.omdbapi.com/?'; //+ i= for id || + t= for title
const FULL_PLOT = "&plot=full&r=json"

export function fetchOmdbTitle(props) {
  const { title, year } = props
  console.log(props, 'PROPS')
  const request = axios.get(`${OMDB_URL}t=${title}&y=${year}${FULL_PLOT}`);
  return {
    type: FETCH_OMDB,
    payload: request
  };
}

export function fetchOmdbId(props) {
  const { id } = props
  console.log(props, 'ID PROPS')
  const request = axios.get(`${OMDB_URL}i=${props}${FULL_PLOT}`);
  return {
    type: FETCH_OMDB,
    payload: request
  };
}
