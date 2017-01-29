import React from 'react';
import _ from 'lodash';

export default (props) => {
  const { Metascore, imdbRating, tomatoMeter, tomatoUserMeter } = props.score;
  function calculateDmdb(arr){
    let temp = arr.map(num => { return parseInt(num)})
    return ((_.sum(temp) / (arr.length * 1.5)) / 10).toFixed(1)
  }
  const score = calculateDmdb([
    Metascore,
    parseFloat(imdbRating) * 20,
    tomatoMeter,
    parseInt(tomatoUserMeter) * 2
  ])
  return(
    <div className="score-container">
      <img
      className="rotten-tomatoes-critics-fresh"
      src={('../src/images/dmdb.png')} />
      <span className="dmdb-score">{score}</span>
    </div>
  )
}
