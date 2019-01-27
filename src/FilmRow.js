import React from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

const FilmRow = (props) => {
	return (
		<div className="film-row" onClick={() => {props.handleDetailsClick(props.film)}}>
		  <FilmPoster poster_path={props.film.poster_path}/>
		  <div className="film-summary">
		    <h1>{props.film.title}</h1>
		    <p>{new Date(props.film.release_date).getFullYear()}</p>
		  </div>
		  <Fave 
		  onFaveToggle={() => props.onFaveToggle(props.film)}
		  isFave={props.isFave}
		  />
		</div>
	);
}



export default FilmRow;