import React from 'react';
import '../assets/Searcher.css';


class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  getSearchPlaceholder = (event) => {

    this.props.getSearchTerm(event)
  }
// I CURRENTLY CAN'T CLEAR THE FORM INPUT WHEN THE USER PRESSES A NEW BUTTON
// IS THAT BAD? SINCE THE FILTERED DATA WOULD CHANGE
// AUTOFOCUS ON THE INPUT DOESN'T WORK AFTER I CLICK ON A NEW BUTTON (SAME FORM)
  render(){
    return(
      <React.Fragment>
        {(this.props.searchPlayers === false) && (this.props.searchTeams === false)  && (this.props.searchShows === false)  && (this.props.searchCoaches === false) ? (null) : (
          <form id="search-form">
            <input type='text' id='search-input' autoFocus="autoFocus" onChange={this.props.getSearchTerm} placeholder={this.props.placeholder} ></input>
          </form>
        )}
      </React.Fragment>
    )
  }
}


export default SearchBar;
