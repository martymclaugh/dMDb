import React from 'react';

export default (props) => {
  const { score } = props
  return (
    <div className="score-container">
      <img
      className="rotten-tomatoes-critics-fresh"
      src={('../src/images/imdb.png')} />
      <span className="imdb-score">{score}</span>
    </div>
  )
}
