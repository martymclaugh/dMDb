import React from 'react';

export default (props) => {
  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Plot,
    Poster,
    Rated,
    Released,
    Runtime,
    Title,
    Writer
  } = props

  return (
    <div>
      <div>
      <img src={Poster} alt=""/>
        <h2>{Title}</h2>
        <p>Awards: {Awards}</p>
        <p>Country: {Country}</p>
        <p>Director: {Director}</p>
        <p>Genres: {Genre}</p>
        <p>Rated: {Rated}</p>
        <p>Released: {Released}</p>
        <p>Runtime: {Runtime}</p>
        <p>Title: {Title}</p>
        <p>Writer: {Writer}</p>
        <p>Plot: {Plot}</p>

      </div>
    </div>
  )
}
