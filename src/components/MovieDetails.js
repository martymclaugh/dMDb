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
    revenue
  } = props.tmdbMovie
  return (
    <div>
    <div className="movie-details-top">
      <div className="movie-details-poster">
        <img src={Poster} alt=""/>
      </div>
      <div className="movie-details-trailer">
        <h3 className="movie-details-title">{Title} ({Year}) <span className="rated">{Rated}</span></h3>
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
      <div className="demographics-plot-container">
        <div className="movie-details-trailer">
          <p className="plot-text">Genre: {Genre}</p>
          <p className="plot-text">{Plot}</p>
        </div>
        <ImdbDemographics {...props.ratings} />
      </div>
      <div className="details-row">
        <div className="details-col">
          <p className="details-text">Actors: {Actors}</p>
          <p className="details-text">Director: {Director}</p>
          <p className="details-text">Writers: {Writer}</p>
          <p className="details-text">Awards: {Awards}</p>
        </div>
        <div className="details-col border-left-white">
          <p className="details-text">Country: {Country}</p>
          <p className="details-text">Language: {Language}</p>
          <p className="details-text">Runtime: {Runtime}</p>
          <p className="details-text">Year: {Year}</p>
          <p className="details-text">Budget: {budget}</p>
          <p className="details-text">Revenue: {revenue}</p>
        </div>
      </div>
    </div>
  )
}
