import React from 'react';
import Trailer from './Trailer';
import ImdbDemographics from './ImdbDemographics';
import RatingsContainer from './RatingsContainer';

function toUsDollars(n){
  return parseInt(n, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}
function renderTitle(props) {

  if (props.Title && props.Year){
    const { Title, Year, Rated } = props
    return (
      <h3 className="movie-details-title">{`${Title} (${Year}) `}<span className="rated">{Rated}</span></h3>
    )
  } else {
    return <div></div>
  }
}
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
    Runtime,
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
        <img src={Poster} alt="dmdb"/>
      </div>
      <div className="movie-details-trailer">
        {renderTitle(props.omdbMovie)}
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
          <p className="details-text">Budget: {budget === 0 ? 'n/a' : `$${toUsDollars(budget)}`}</p>
          <p className="details-text">Revenue: {revenue === 0 ? 'n/a' : `$${toUsDollars(revenue)}`}</p>
        </div>
      </div>
    </div>
  )
}
