import axios from 'axios';

export const FETCH_TMDB = 'FETCH_TMDB';
export const FETCH_TMDB_ID = 'FETCH_TMDB_ID';
export const FETCH_OMDB_ID = 'FETCH_OMDB_ID';
export const FETCH_YOUTUBE_TRAILER = 'FETCH_YOUTUBE_TRAILER';

const YOUTUBE_API_KEY = 'AIzaSyBWyyHS4PatbpxSZAuN3HBfQH1OQLnaj0Y';
const TMDB_API_KEY = '25a41e10fc0fc533a91edbb4d876705d';
const OMDB_URL ='http://www.omdbapi.com/?i='; // i= for id || + t= for title
const FULL_PLOT = "&plot=full&r=json"
const TMDB_URL_SEARCH = 'https://api.themoviedb.org/3/search/multi?api_key='
const TMDB_ID_SEARCH = 'https://api.themoviedb.org/3/movie/'
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key='
const TMDB_LANGUAGE = '&language=en-US'
const TMDB_SEARCH_PARAMS = '&page=1&include_adult=false'
// https://api.themoviedb.org/3/movie/109428?api_key=25a41e10fc0fc533a91edbb4d876705d&language=en-US id search

// https://api.themoviedb.org/3/search/multi?api_key=25a41e10fc0fc533a91edbb4d876705d&language=en-US&query=evil%20dead&page=1&include_adult=false // for search


export function fetchTmdbSearch(props) {
  const searchTerm = props
  const devOptions = {
    url: `${TMDB_URL_SEARCH}${TMDB_API_KEY}${TMDB_LANGUAGE}&query=${searchTerm}${TMDB_SEARCH_PARAMS}`
  }
  const request = axios(devOptions)
  return {
    type: FETCH_TMDB,
    payload: request
  };
}
export function fetchTmdbId(id){
  const url = `${TMDB_ID_SEARCH}${id}?api_key=${TMDB_API_KEY}${TMDB_LANGUAGE}`
  const request = axios(url)
  return {
    type: FETCH_TMDB_ID,
    payload: request
  }
}
export function fetchOmdbId(id){
  const url = `${OMDB_URL}${id}${FULL_PLOT}`
  const request = axios(url)
  return {
    type: FETCH_OMDB_ID,
    payload: request
  }
}
export function fetchYoutubeTrailer(query){
  const { year, title } = query
  const searchTerm = `${title} ${year}`.split(' ').join('+')
  const url = `${YOUTUBE_URL}${YOUTUBE_API_KEY}&q=${searchTerm}+trailer&type=video`
  const request = axios(url)
  console.log('SENDING ACTION')
  return {
    type: FETCH_YOUTUBE_TRAILER,
    payload: request
  }
}
