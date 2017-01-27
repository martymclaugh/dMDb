import axios from 'axios';
const YOUTUBE_API_KEY = 'AIzaSyBWyyHS4PatbpxSZAuN3HBfQH1OQLnaj0Y';
const TMDB_API_KEY = '25a41e10fc0fc533a91edbb4d876705d';
export const FETCH_OMDB = 'FETCH_OMDB';
export const FETCH_TMDB = 'FETCH_TMDB';

const OMDB_URL ='http://www.omdbapi.com/?'; //+ i= for id || + t= for title
const FULL_PLOT = "&plot=full&r=json"
const TMDB_URL = 'https://api.themoviedb.org/3/search/multi?api_key='
const TMDB_LANGUAGE = '&language=en-US'
const TMDB_SEARCH_PARAMS = '&page=1&include_adult=false'
// https://api.themoviedb.org/3/search/multi?api_key=25a41e10fc0fc533a91edbb4d876705d&language=en-US&query=evil%20dead&page=1&include_adult=false // for search
// export function fetchTmdbSearch(props){
//   if (props.length > 0){
//     let searchTerm = props
//     let devOptions = {
//       url: `${TMDB_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&query=${searchTerm}`,
//       dataType: 'jsonp'
//     }
//     // const searchTerm = props
//     // const request = axios.get(`${TMDB_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&query=${searchTerm}${TMDB_SEARCH_PARAMS}`)
//     const request = axios.get(devOptions)
//     console.log(request)
//     return {
//       type: FETCH_TMDB,
//       payload: "asdf"
//     }
//   }
// }
export function fetchOmdbTitle(props) {
  const { title, year } = props
  // action for get movie request by title and year(optional)
  // query still works without year
  const request = axios.get(`${OMDB_URL}t=${title}&y=${year}${FULL_PLOT}`);
  return {
    type: FETCH_OMDB,
    payload: request
  };
}

export function fetchTmdbSearch(props) {
  const searchTerm = props
  const url = `${TMDB_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&query=${searchTerm}${TMDB_SEARCH_PARAMS}`;
  const devOptions = {
    url: `${TMDB_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&query=${searchTerm}${TMDB_SEARCH_PARAMS}`
  }
  // action for get movie request by imdb id
  const request = axios(devOptions)
  return {
    type: FETCH_OMDB,
    payload: request
  };
}
