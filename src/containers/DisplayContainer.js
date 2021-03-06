import React from 'react';
import Searcher from '../components/Searcher';
import '../assets/DisplayContainer.css';

class DisplayContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div id="display-container">
        <Searcher placeholder={this.props.placeholder} searchPlayers={this.props.searchPlayers} searchTeams={this.props.searchTeams} searchShows={this.props.searchShows} searchCoaches={this.props.searchCoaches}/>
      </div>
    )
  }
}

export default DisplayContainer;
