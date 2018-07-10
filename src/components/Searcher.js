import React from 'react';
import SearchBar from './SearchBar';
import FilteredList from './FilteredList';

class Searcher extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: "",
      allData: ["one", "two", "three", "four", "five"],
      // filteredData: [],
    }
  }

  filterData = () => {
    return this.state.allData.filter(d => d.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    //this.setState({
    //  filteredData: notAllData
    // })
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
        {/*{(this.props.searchPlayers === false) ? (null) :
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
          </div>)}*/}
        <FilteredList data={this.filterData()} searchPlayers={this.props.searchPlayers} searchTeams={this.props.searchTeams} searchShows={this.props.searchShows} searchCoaches={this.props.searchCoaches} />




      </div>
    )
  }
}

export default Searcher;
