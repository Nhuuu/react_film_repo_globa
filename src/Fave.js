import React, { Component } from 'react';

class Fave extends Component {
	// constructor(){
	// 	super()
	// 	this.state = {

	// 	}
	// }

	handleClick = (e) => {
		// Don't let other events get triggered when this is clicked.
		e.stopPropagation();
		console.log('Handling Fave click!');
		// This function will add/remove film from faves array in app.js.
		this.props.onFaveToggle();
	}


	render(){
		const queueClass = this.props.isFave ? "remove_from_queue" : "add_to_queue"
		return (
			// Has to be an obj, so wrap it in curlies.
			<div className={`film-row-fave ${queueClass}`} onClick={this.handleClick}>
  				<p className="material-icons">{queueClass}</p>
			</div>
		)
	}
}

export default Fave;