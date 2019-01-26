import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';


class App extends Component {
  constructor(){
    super()
    this.state = {
      films: TMDB.films,
      current: {}
    }
  }

  handleDetailsClick = (film) => {
    console.log("Fetching details for ", film.title);
    //Task 3? set current state to passed film
  }  

  render() {
    return (
      <div className="App">
        <div className="film-library">
        <FilmListing 
        films={this.state.films} 
        handleDetailsClick={this.handleDetailsClick}
        />
        {/*Doesn't need all the films*/}
        <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
