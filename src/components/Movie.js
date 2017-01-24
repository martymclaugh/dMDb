import React from 'react';

export default (props) => {
  const { movie } = props
  const {
    Actors,
    Awards,
    Country,
    Direct, 
    Genre,
    Plot,
    Poster,
    Rated,
    Released,
    Runtime,
    Title,
    Writer
  } = movie

  console.log(movie)
  console.log(props, 'movie component')
  return (
    <div>
      <div>
        <h2>{movie.Title}</h2>
      </div>
    </div>
  )
}
