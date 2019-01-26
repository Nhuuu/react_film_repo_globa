import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

  constructor(){
    super()
    this.state = {
      filter: "all",
      // When a user favorites a film, info needs to be shared here and all it's children to properly filter.
      faves: []
    }
  }

  handleFilterClick = (filter) => {
    this.setState({
      filter: filter
    })
  }

  handleFaveToggle = (film) => {
    const newFaves = this.state.faves.slice(); 
    // Find the index of the passed film in the faves array
    const filmIndex = this.state.faves.indexOf(film);
    if(filmIndex === -1){
      // Film doesn't exist in faves yet.
      console.log(`Adding ${film.title} to favorites!`)
      newFaves.push(film)
      this.setState({faves: newFaves})      
    }
    else {
      console.log(`Removing ${film.title} from favorites!`)
      newFaves.splice(filmIndex, 1)
      this.setState({faves: newFaves})
    }
  }


	render(){
    const filmsToDisplay = this.state.filter === "all" ? this.props.films : this.state.faves
    const allFilms = filmsToDisplay.map((film, i) => {
      return (
        // Not calling handleFaveToggle() yet
      	<FilmRow 
        key = {i}
        film={film} 
        onFaveToggle={this.handleFaveToggle}
        isFave={this.state.faves.includes(film)}
        handleDetailsClick={this.props.handleDetailsClick}
        />
        )
    });

		return (
          <div className="film-list">
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
              {/*Needed to wrap in an anonymous function bc it had auto console of setting filter to all without clicking. making the class is-active which is css-teal*/}
              <div className={`film-list-filter ${this.state.filter === "all" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("all")}>
                ALL 
                <span className="section-count">{this.props.films.length}</span>
              </div>

              <div className={`film-list-filter ${this.state.filter === "faves" ? "is-active" : ""}`} onClick={() => this.handleFilterClick("faves")}>
                FAVES
                <span className="section-count">{this.state.faves.length}</span>
              </div>

            </div>

            {allFilms}
          </div>
		);
	}
}


export default FilmListing;