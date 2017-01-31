import React from 'react';

export default (props) => {
  const { score } = props
  if (isNaN(score)){
    return(
      <div className="score-container">
        <img
          role="presentation"
          className="rotten-tomatoes-critics-fresh"
          src={('https://i.imgur.com/cMBThxN.png')} />
        <span className="imdb-score">n/a</span>
      </div>
    )
  }
  return (
    <div className="score-container">
      <img
        role="presentation"
        className="rotten-tomatoes-critics-fresh"
        src={('https://i.imgur.com/cMBThxN.png')} />
      <span className="imdb-score">{score}</span>
    </div>
  )
}
