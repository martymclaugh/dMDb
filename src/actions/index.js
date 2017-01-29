import axios from 'axios';

export const FETCH_TMDB = 'FETCH_TMDB';
export const FETCH_TMDB_ID = 'FETCH_TMDB_ID';
export const FETCH_OMDB_ID = 'FETCH_OMDB_ID';
export const FETCH_YOUTUBE_TRAILER = 'FETCH_YOUTUBE_TRAILER';
export const FETCH_IMDB_RATINGS = 'FETCH_IMDB_RATINGS';
export const FETCH_NOW_PLAYING = 'FETCH_NOW_PLAYING';
export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_TOP_RATED = 'FETCH_TOP_RATED';
export const FETCH_UPCOMING = 'FETCH_UPCOMING';
export const FETCH_SIMILAR = 'FETCH_SIMILAR';

const YOUTUBE_API_KEY = 'AIzaSyBWyyHS4PatbpxSZAuN3HBfQH1OQLnaj0Y';
const TMDB_API_KEY = '25a41e10fc0fc533a91edbb4d876705d';
const IMDB_SCRAPE_URL = 'https://informationextractor.herokuapp.com/scrape/';
const OMDB_URL ='http://www.omdbapi.com/?i='; // i= for id || + t= for title
const FULL_PLOT = "&plot=full&r=json";
const TMDB_URL_SEARCH = 'https://api.themoviedb.org/3/search/multi?api_key=';
const TMDB_ID_SEARCH = 'https://api.themoviedb.org/3/movie/';
const TMDB_LANGUAGE = '&language=en-US';
const TMDB_SEARCH_PARAMS = '&page=1&include_adult=false';
const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=';
const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
const POPULAR_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=';
const TOP_RATED_URL ='https://api.themoviedb.org/3/movie/top_rated?api_key=';
const UPCOMING_URL ='https://api.themoviedb.org/3/movie/upcoming?api_key=';
const SIMILAR_URL = 'https://api.themoviedb.org/3/movie/';

// https://api.themoviedb.org/3/movie/109428?api_key=25a41e10fc0fc533a91edbb4d876705d&language=en-US id search

// https://api.themoviedb.org/3/search/multi?api_key=25a41e10fc0fc533a91edbb4d876705d&language=en-US&query=evil%20dead&page=1&include_adult=false // for search

export function fetchNowPlaying(){
  const url = `${NOW_PLAYING_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&page=1&region=US`
  const request = axios(url)
  return {
    type: FETCH_NOW_PLAYING,
    payload: request
  }
}
export function fetchPopular(){
  const url = `${POPULAR_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&page=1`
  const request = axios(url)
  return {
    type: FETCH_POPULAR,
    payload: request
  }
}
export function fetchTopRated(){
  const url = `${TOP_RATED_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&page=1`
  const request = axios(url)
  return {
    type: FETCH_TOP_RATED,
    payload: request
  }
}
export function fetchUpcoming(){
  const url = `${UPCOMING_URL}${TMDB_API_KEY}${TMDB_LANGUAGE}&page=1&region=US`
  const request = axios(url)
  return {
    type: FETCH_UPCOMING,
    payload: request
  }
}
export function fetchSimilar(id){
  if (id === undefined){
    return {
      type: null,
      payload: null
    }
  } else {
    const url = `${SIMILAR_URL}${id}/similar?api_key=${TMDB_API_KEY}${TMDB_LANGUAGE}&page=1`
    const request = axios(url)
    return {
      type: FETCH_SIMILAR,
      payload: request
    }
  }
}
export function fetchTmdbSearch(props) {
  const searchTerm = props;
  if(searchTerm.length === 0){
    return {
      type: null,
      payload: null
    }
  }
  const url = `${TMDB_URL_SEARCH}${TMDB_API_KEY}${TMDB_LANGUAGE}&query=${searchTerm}${TMDB_SEARCH_PARAMS}`
  const request = axios(url);
  return {
    type: FETCH_TMDB,
    payload: request
  };
}
export function fetchTmdbId(id){
  const url = `${TMDB_ID_SEARCH}${id}?api_key=${TMDB_API_KEY}${TMDB_LANGUAGE}`;
  const request = axios(url);
  return {
    type: FETCH_TMDB_ID,
    payload: request
  }
}
export function fetchOmdbId(id){
  const url = `${OMDB_URL}${id}${FULL_PLOT}&tomatoes=true`;
  const request = axios(url);
  return {
    type: FETCH_OMDB_ID,
    payload: request
  }
}
export function fetchYoutubeTrailer(query){
  const { year, title } = query;
  const searchTerm = `${title} ${year}`.split(' ').join('+');
  const url = `${YOUTUBE_URL}${YOUTUBE_API_KEY}&q=${searchTerm}+trailer&type=video`;
  const request = axios(url);
  return {
    type: FETCH_YOUTUBE_TRAILER,
    payload: request
  }
}
export function fetchImdbRatings(imdbId) {
  var url = `${IMDB_SCRAPE_URL}${imdbId}`;
  const request = axios.get(url);
  return {
    type: FETCH_IMDB_RATINGS,
    payload: request
  }
}
