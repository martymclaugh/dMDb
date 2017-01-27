import React from 'react';

export default (props) => {
  console.log(props, 'in movie component')
  const {
    budget,
    genres,
    title,
    Director,
    Genre,
    Plot,
    Poster,
    Rated,
    Released,
    Runtime,
    Title,
    Writer
  } = props

  return (
    <div>
      <div>


      </div>
    </div>
  )
}

{/* <img src={Poster} alt=""/>
  <h2>{Title}</h2>
  <p>Awards: {Awards}</p>
  <p>Country: {Country}</p>
  <p>Director: {Director}</p>
  <p>Genres: {Genre}</p>
  <p>Rated: {Rated}</p>
  <p>Released: {Released}</p>
  <p>Runtime: {Runtime}</p>
  <p>Title: {Title}</p>
  <p>Writer: {Writer}</p>
  <p>Plot: {Plot}</p> */}
