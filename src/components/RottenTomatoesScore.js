import React from 'react';

export default (props) => {
  const { image, score, type } = props
  if(type === 'critics' && image === 'fresh'){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('../src/images/tomato.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  } else if (type === 'critics' && image === 'rotten'){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('../src/images/rotten.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  }
  if(type === 'users' && parseInt(score) >= 60){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('../src/images/popcorn.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  } else if (type === 'users' && parseInt(score) < 60){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('../src/images/spilt_popcorn.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  }
  return <div></div>
}
