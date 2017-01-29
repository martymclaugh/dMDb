import React from 'react';
import Trailer from './Trailer';
import Ratings from './Ratings';
import RottenTomatoesScore from './RottenTomatoesScore';
import MetaScore from './MetaScore';
import ImdbScore from './ImdbScore';
import DmdbScore from './DmdbScore';

export default (props) => {
  console.log(props.omdbMovie)
  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    tomatoImage,
    tomatoMeter,
    tomatoUserMeter,
    Metascore,
    imdbRating,
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
      <div className="search-bar">
      </div>
    <div className="movie-details-top">
      <div className="movie-details-poster">
        <img src={Poster} alt=""/>
      </div>
      <div className="movie-details-trailer">
        <h3 className="movie-details-title">{Title} ({Year})</h3>
        <Trailer {...props.trailer}/>
        <div className="dmdb-ratings">
          <DmdbScore score={{Metascore, tomatoMeter, tomatoUserMeter, imdbRating}}/>
          <MetaScore score={Metascore}/>
          <RottenTomatoesScore
            image={tomatoImage}
            score={tomatoMeter}
            type="critics"/>
          <RottenTomatoesScore
            score={tomatoUserMeter}
            type="users"/>
          <ImdbScore score={imdbRating}/>
        </div>
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
