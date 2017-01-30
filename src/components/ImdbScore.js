import React from 'react';

export default (props) => {
  const { score } = props
  return (
    <div className="score-container">
      <img
      className="rotten-tomatoes-critics-fresh"
      src={('https://i.imgur.com/cMBThxN.png')} />
      <span className="imdb-score">{score}</span>
    </div>
  )
}
