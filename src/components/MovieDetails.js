import React from 'react';
import Trailer from './Trailer';
import Ratings from './Ratings';

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
    <div className="movie-details-top">
      <div className="movie-details-poster">
        <img src={Poster} alt=""/>
      </div>
      <div className="movie-details-trailer">
        <h3 className="movie-details-title">{Title} ({Year})</h3>
        <Trailer {...props.trailer}/>
        <div className="dMDb-ratings"></div>
        <div className="imported-ratings"></div>
      </div>
    </div>
      <Ratings {...props.ratings} />
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
