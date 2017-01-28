import React from 'react';

export default (props) => {
  console.log(props)
  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Rated,
    Runtime,
    Title,
    Writer,
    Year
  } = props.omdbMovie
  const {
    budget,
    revenue,
    tagline
  } = props.tmdbMovie
  return (
    <div>
      <img src={Poster} alt=""/>
      <h3>{Title}</h3>
      <p>Actors: {Actors}</p>
      <p>Awards: {Awards}</p>
      <p>Country: {Country}</p>
      <p>Director: {Director}</p>
      <p>Genre: {Genre}</p>
      <p>Language: {Language}</p>
      <p>Plot: {Plot}</p>
      <p>Rated: {Rated}</p>
      <p>Runtime: {Runtime}</p>
      <p>Writers: {Writer}</p>
      <p>Year: {Year}</p>
      <p>Budget: {budget}</p>
      <p>Revenue: {revenue}</p>
      <p>{tagline}</p>
    </div>
  )
}
