import React from 'react';
import Carousel from 'nuka-carousel';

export default (props) => {
  const { data, title } = props
  if (!data){
    return <div>loading!!!!</div>
  }
  const displayItems = data.map((movie) => {
    if (movie.poster_path)
    return (
      <div className="scroll-image-container" key={movie.id}>
        <img className="movie-scroll-image" src={`http://image.tmdb.org/t/p/w160${movie.poster_path}`} alt={`${title}`}/>
      </div>
    )
  })
  const options = {
    autoplay: false,
    slidesToShow: 8,
    width: '950px',
    height: '240px',
    wrapAround: true
  }
  return(
    <div className="movie-scroll-row">
      <h3 className="movie-scroll-title lead">{props.title}</h3>
      <Carousel {...options}>
        {displayItems}
      </Carousel>
    </div>
  )
}
