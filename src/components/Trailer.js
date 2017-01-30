import React from 'react';
import Loading from 'react-loading';

export default (props) => {
  if(!props.items){
    return <Loading type='bars' color='#0D5746'/>
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
