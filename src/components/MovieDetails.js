import React from 'react';
import Trailer from './Trailer';
import ImdbDemographics from './ImdbDemographics';
import RatingsContainer from './RatingsContainer';

export default (props) => {
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
        <RatingsContainer
          Metascore={Metascore}
          tomatoMeter={tomatoMeter}
          tomatoUserMeter={tomatoUserMeter}
          imdbRating={imdbRating}
          tomatoImage={tomatoImage}/>
        <div className="imported-ratings"></div>
      </div>
    </div>
      <ImdbDemographics {...props.ratings} />
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
