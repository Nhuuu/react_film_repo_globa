import React, { Component } from 'react';

class FilmPoster extends Component {
	render(){
		//comes from FilmRow poster_path prop
		const posterUrl=`https://image.tmdb.org/t/p/w780/${this.props.poster_path}`				
		return <img src={posterUrl} alt="film poster" />
	}
}


export default FilmPoster;