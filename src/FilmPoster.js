import React from 'react';

const FilmPoster = (props) => {
	const posterUrl=`https://image.tmdb.org/t/p/w780/${props.poster_path}`				
	return <img src={posterUrl} alt="film poster" />
}


export default FilmPoster;