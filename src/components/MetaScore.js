import React from 'react';

export default (props) => {
  if (props.score === undefined){
    return <div></div>
  }
  const score = parseInt(props.score, 10);
  let color;
  if (score  >= 61){
    color = '#66CC33'
  } else if (score <= 60 && score >= 40){
    color = '#FFCC33'
  } else {
    color = '#FF0000'
  }
  return (
    <div className="metascore-box" style={{backgroundColor: color}}>
      <span className="metascore">{score}</span>
    </div>
  )
}
