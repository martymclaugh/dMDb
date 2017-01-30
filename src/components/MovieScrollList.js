import React from 'react';
import Carousel from 'nuka-carousel';
import Loading from 'react-loading';
export default (props) => {
  const { data, title } = props
  if (!data){
    return <Loading type='bars' color='#0D5746'/>
  }
  const displayItems = data.map((movie) => {
    if (movie.poster_path){
      return (
        // When homepage loads initially, carousels have no height due to images not loading. Added onload to image to resize window once images have loaded.
        <div
          onClick={() => {props.onSelectPoster(movie)}}
          className="scroll-image-container"
          key={movie.id}>
        <img
          className="movie-scroll-image"
          onLoad={() => {window.dispatchEvent(new Event('resize'));}}
          src={`https://image.tmdb.org/t/p/w160${movie.poster_path}`}
          alt={`${title}`}/>
        </div>
      )
    } else {
      return <span key={movie.id}></span>
    }
  })
  const options = {
    autoplay: false,
    slidesToShow: 6.5,
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
