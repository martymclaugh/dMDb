import React from 'react';

export default (props) => {
  const { poster_path, title, release_date, id } = props
  return (
    <div
      onClick={() => props.onSelectMovie(props)}
      key={id}
      className="movie-option-container">
      <div className="movie-option-details"></div>
      <img className="movie-option-image" src={`https://image.tmdb.org/t/p/w75${poster_path}`} alt={`${title}`}/>
      <h3 className="movie-option-title lead">{title} ({release_date.slice(0,4)})</h3>
    </div>
  )
}
