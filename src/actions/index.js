import axios from 'axios';

export const FETCH_OMDB = 'FETCH_OMDB';

export function fetchOmdb(){
  return {
    type: FETCH_OMDB,
    payload: 'asdf'
  }
}
