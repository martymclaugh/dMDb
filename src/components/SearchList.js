import React from 'react';
import MovieOption from './MovieOption';

export default (props) => {
  const movieItems = props.movies.map((movie) => {
    if (movie.title && movie.poster_path){
      return (
        <MovieOption
          onSelectMovie={props.onSelectMovie}
          key={movie.id}
          {...movie}/>
      )
    } else {
      return <span key={movie.id}></span>
    }
  })
  return(
    <div className="search-results-container">
      {movieItems}
    </div>
  )
}
