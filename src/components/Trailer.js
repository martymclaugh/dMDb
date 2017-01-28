import React from 'react';

export default (props) => {
  console.log(props)
  if(!props.items){
    return <div> loading... </div>
  }
  const video = props.items[0]
  const url = `https://www.youtube.com/embed/${video.id.videoId}`
  console.log(url)
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
  )
}
