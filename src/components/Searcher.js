import React from 'react';
import SearchBar from './SearchBar';
import FilteredList from './FilteredList';
import '../assets/Searcher.css';
const usersURL = "http://localhost:3000/api/v1/users"
const teamsURL = "http://localhost:3000/api/v1/teams"
const showsURL = "http://localhost:3000/api/v1/shows"


class Searcher extends React.Component{
  constructor(){
    super();
    this.state = {
      searchTerm: "",
      users: [],
      teams: [],
      shows: [],
      coaches: [],
      allData: [],
      // filteredData: [],
    }
  }

  componentDidMount(){
    fetch(usersURL)
      .then(res => res.json())
      .then(json => this.setState({
        users: json
      }, () => console.log("fetched users", this.state.users)))
    fetch(teamsURL)
      .then(res => res.json())
      .then(json => this.setState({
        teams: json
      }, () => console.log("fetched teams", this.state.teams)))
    fetch(showsURL)
      .then(res => res.json())
      .then(json => this.setState({
        shows: json
      }, () => console.log("fetched shows", this.state.shows)))
  }
// PLAYERS, SHOWS, AND TEAMS ARE ALL BEING FILTERED BY NAME SO I CAN USE THE SAME FUNCTION BELOW, BUT MAY NEED A NEW ONE OR MAKE CHANGES SHOULD I NEED TO!!
  filterData = () => {
    let flexData = []
    if (this.props.searchPlayers === true){
      flexData = this.state.users
    } else if (this.props.searchTeams === true){
      flexData = this.state.teams
    } else if (this.props.searchShows === true){
      flexData = this.state.shows
    } else if (this.props.searchCoaches === true){
      flexData = this.state.coaches
    }

    return flexData.filter(d => d.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
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
      <div id="searcher">
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
