import React from 'react';

export default (props) => {
  if(!props.items){
    return <div> loading... </div>
  }
  const video = props.items[0]
  const url = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        src={url}
        frameBorder="0"
        allowFullScreen
        className="embed-responsive-item"></iframe>
      </div>
  )
}
