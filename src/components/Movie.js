import React from 'react';

export default (props) => {
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
  } = props

  console.log(props, 'movie component')
  return (
    <div>
      <div>
        <h2>{Title}</h2>
      </div>
    </div>
  )
}
