import React from 'react';

class SearchBar extends React.Component{
  constructor(){
    super();
    this.state = {}
  }

  getSearchPlaceholder = (event) => {
    
    this.props.getSearchTerm(event)
  }

  render(){
    return(
      <form>
        {/*}{(this.props.searchPlayers === false) ? (null) : (
          <input ></input>)}
        {(this.props.searchPlayers === false) ? (null) : (
          <input ></input>)}
        {(this.props.searchPlayers === false) ? (null) : (
          <input ></input>)}
        {(this.props.searchPlayers === false) ? (null) : (
          <input ></input>)}*/}
        <input onChange={this.getSearchPlaceholder} placeholder={this.props.placeholder}></input>


      </form>
    )
  }
}


export default SearchBar;
