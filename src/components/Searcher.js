import React from 'react';
import SearchBar from './SearchBar';

class Searcher extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: ""
    }
  }

  getSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }



  render(){
    return(
      <div>
        <SearchBar placeholder={this.props.placeholder} searchPlayers={this.props.searchPlayers} searchTeams={this.props.searchTeams} searchShows={this.props.searchShows} searchCoaches={this.props.searchCoaches} getSearchTerm={this.getSearchTerm} />
        {(this.props.searchPlayers === false) ? (null) :
          (<div>
            Searching for Players
          </div>)}
        {(this.props.searchTeams === false) ? (null) :
          (<div>
            Searching for Teams
          </div>)}
        {(this.props.searchShows === false) ? (null) :
          (<div>
            Searching for Shows
          </div>)}
        {(this.props.searchCoaches === false) ? (null) :
          (<div>
            Searching for Coaches
          </div>)}




      </div>
    )
  }
}

export default Searcher;
