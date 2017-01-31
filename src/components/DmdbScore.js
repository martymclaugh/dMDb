import React from 'react';
import _ from 'lodash';

export default (props) => {
  const { Metascore, imdbRating, tomatoMeter, tomatoUserMeter } = props.score;
  function calculateDmdb(arr){
    const temp = arr.filter(num => {if(!isNaN(num)) return num})
                    .map((num) => {return parseInt(num, 10)})
    if(temp.length === 4){
      return (_.sum(temp) / (temp.length * 1.5) / 10).toFixed(1)
    } else {
      return ((_.sum(temp) / temp.length) / 10).toFixed(1)
    }
  }
  let score;
  if(isNaN(Metascore) || isNaN(tomatoMeter)){
      score = calculateDmdb([
      Metascore,
      parseFloat(imdbRating) * 10,
      tomatoMeter,
      parseInt(tomatoUserMeter, 10)
    ])
  } else {
      score = calculateDmdb([
      Metascore,
      parseFloat(imdbRating) * 20,
      tomatoMeter,
      parseInt(tomatoUserMeter, 10) * 2
    ])
  }
  return(
    <div className="score-container">
      <img
        role="presentation"
        className="rotten-tomatoes-critics-fresh"
        src={('https://i.imgur.com/hRpgbSr.png')} />
      <span className="dmdb-score">{score}</span>
    </div>
  )
}
