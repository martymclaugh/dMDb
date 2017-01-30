import React from 'react';

export default (props) => {
  const { image, score, type } = props
  if(type === 'critics' && image === 'fresh'){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('https://i.imgur.com/8c7MUze.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  } else if (type === 'critics' && image === 'rotten'){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('https://i.imgur.com/7cljTie.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  }
  if(type === 'users' && parseInt(score, 10) >= 60){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('https://i.imgur.com/UMqIkLq.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  } else if (type === 'users' && parseInt(score, 10) < 60){
    return (
      <div className="score-container">
        <img
        className="rotten-tomatoes-critics-fresh"
        src={('https://i.imgur.com/E4yllHl.png')} />
        <span className="score">{score}%</span>
      </div>
    )
  }
  return <div></div>
}
