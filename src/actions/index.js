import axios from 'axios';
import * as types from './actionTypes';

const YOUTUBE_API_KEY = 'AIzaSyBWyyHS4PatbpxSZAuN3HBfQH1OQLnaj0Y';
const TMDB_API_KEY = '25a41e10fc0fc533a91edbb4d876705d';
const OMDB_API_KEY = '33bf1722'
const IMDB_SCRAPE_URL = 'https://informationextractor.herokuapp.com/scrape/';
const OMDB_URL ='https://www.omdbapi.com/?i='; // i= for id || + t= for title
const FULL_PLOT = "&plot=short&r=json";
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
const DMDB_API_URL = 'http://localhost:3001/movies';

// fetch now playing
export const fetchNowPlaying = nowPlaying =>
  ({ type: types.FETCH_NOW_PLAYING, payload: null });
export const fetchNowPlayingSuccess = nowPlaying =>
  ({ type: types.FETCH_NOW_PLAYING_SUCCESS, payload: { ...nowPlaying } });
export const fetchNowPlayingFailed = e =>
  ({ type: types.FETCH_NOW_PLAYING_FAILED, error: `Failed to fetch now playing, ${e}` });

// fetch popular
export const fetchPopular = popular =>
  ({ type: types.FETCH_POPULAR });
export const fetchPopularSuccess = popular =>
  ({ type: types.FETCH_POPULAR_SUCCESS, payload: {...popular} });
export const fetchPopularFailed = e =>
  ({ type: types.FETCH_POPULAR_FAILED, error: `Failed to fetch popular, ${e}` });

// fetch top rated
export const fetchTopRated = topRated =>
  ({ type: types.FETCH_TOP_RATED });
export const fetchTopRatedSuccess = topRated =>
  ({ type: types.FETCH_TOP_RATED_SUCCESS, payload: {...topRated} });
export const fetchTopRatedFailed = e =>
  ({ type: types.FETCH_TOP_RATED_FAILED, error: `Failed to fetch top rated, ${e}` });

// fetch upcoming
export const fetchUpcoming = upcoming =>
  ({ type: types.FETCH_UPCOMING });
export const fetchUpcomingSuccess = upcoming =>
  ({ type: types.FETCH_UPCOMING_SUCCESS, payload: {...upcoming} });
export const fetchUpcomingFailed = e =>
  ({ type: types.FETCH_UPCOMING_FAILED, error: `Failed to fetch upcoming, ${e}` });

// fetch similar
export const fetchSimilar = id =>
  ({ type: types.FETCH_SIMILAR, payload: id });
export const fetchSimilarSuccess = similar =>
  ({ type: types.FETCH_SIMILAR_SUCCESS, payload: {...similar} });
export const fetchSimilarFailed = e =>
  ({ type: types.FETCH_SIMILAR_FAILED, error: `Failed to fetch similar, ${e}` });

// fetch tmdb search
export const fetchTmdbSearch = props =>
  ({ type: types.FETCH_TMDB, payload: props });
export const fetchTmdbSearchSuccess = movie =>
  ({ type: types.FETCH_TMDB_SUCCESS, payload: movie });
export const fetchTmdbSearchFailed = e =>
  ({ type: types.FETCH_TMDB_FAILED, error: `Failed to fetch movie from tmdb, ${e}` });

// // fetch tmdb with id
// export const fetchTmdbId = id =>
//   ({ type: types.FETCH_TMDB_ID, payload: id });
// export const fetchTmdbIdSuccess = movie =>
//   ({ type: types.FETCH_TMDB_ID, payload: movie });
// export const fetchTmdbIdFailed = e =>
//   ({ type: types.FETCH_TMDB_ID, error: `Failed to fetch tmdb with id provided, ${e}` });

export function fetchTmdbId(id){
  const url = `${TMDB_ID_SEARCH}${id}?api_key=${TMDB_API_KEY}${TMDB_LANGUAGE}`;
  const request = axios(url);
  return {
    type: types.FETCH_TMDB_ID,
    payload: request
  }
}
export function fetchOmdbId(id){
  const url = `${OMDB_URL}${id}${FULL_PLOT}&tomatoes=true&apikey=${OMDB_API_KEY}`;
  const request = axios(url);
  return {
    type: types.FETCH_OMDB_ID,
    payload: request
  }
}
export function fetchYoutubeTrailer(query){
  const { year, title } = query;
  const searchTerm = `${title} ${year}`.split(' ').join('+');
  const url = `${YOUTUBE_URL}${YOUTUBE_API_KEY}&q=${searchTerm}+trailer&type=video`;
  const request = axios(url);
  return {
    type: types.FETCH_YOUTUBE_TRAILER,
    payload: request
  }
}
export function fetchImdbRatings(imdbId) {
  var url = `${IMDB_SCRAPE_URL}${imdbId}`;
  const request = axios.get(url);
  return {
    type: types.FETCH_IMDB_RATINGS,
    payload: request
  }
}
export function createMovieView(movieData){
  var url = `${DMDB_API_URL}`;
  const request = axios.post(url, {
    movie: movieData
  });
  return {
    type: types.POST_MOVIE_VIEW,
    payload: request
  }
}
export function fetchRecentlyViewed(){
  var url = `${DMDB_API_URL}`;
  const request = axios.get(url);
  return {
    type: types.FETCH_RECENTLY_VIEWED,
    payload: request
  }
}
