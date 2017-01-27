import React from 'react';
import MovieOption from './MovieOption';

export default (props) => {
  if(props.movies < 1){
    return <div>loading</div>
  }
  const movieItems = props.movies.map((movie) => {
    if (movie.title && movie.poster_path){
      return (
        <MovieOption
          onSelectMovie={props.onSelectMovie}
          key={movie.id}
          {...movie}/>
      )
    }
  })
  return(
    <div className="search-results-container">
      {movieItems}
    </div>
  )
}
