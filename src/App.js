import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import DisplayContainer from './containers/DisplayContainer';

class App extends Component {
  state = {
    loggedIn: false,
    searchPlayers: false,
    searchTeams: false,
    searchShows: false,
    searchCoaches: false,
    searchPlaceholder: ""
  }

  logIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  logOut = () => {
    this.setState({
      loggedIn: false,
      searchPlayers: false,
      searchTeams: false,
      searchShows: false,
      searchCoaches: false,
    })
  }


/////
setPlaceholder = () => {
  if (this.props.searchPlayers === true){
    this.setState({
      searchPlaceholder: "Search Players"
    })
  } else if (this.props.searchTeams === true){
    this.setState({
      searchPlaceholder: "Search Teams"
    })
  } else if (this.props.searchShows === true){
    this.setState({
      searchPlaceholder: "Search Shows"
    })
  } else if (this.props.searchCoaches === true){
    this.setState({
      searchPlaceholder: "Search Coaches"
    })
  }
}
/////
  renderSearchPlayersForm = () => {
    if (this.state.searchPlayers === false){
      this.setState({
        searchPlayers: true,
        searchTeams: false,
        searchShows: false,
        searchCoaches: false,
        searchPlaceholder: "Search Players"
      })
    }
  }

  renderSearchTeamsForm = () => {
    if (this.state.searchTeams === false){
      this.setState({
        searchPlayers: false,
        searchTeams: true,
        searchShows: false,
        searchCoaches: false,
        searchPlaceholder: "Search Teams"
      })
    }
  }

  renderSearchShowsForm = () => {
    if (this.state.searchShows === false){
      this.setState({
        searchPlayers: false,
        searchTeams: false,
        searchShows: true,
        searchCoaches: false,
        searchPlaceholder: "Search Shows"
      })
    }
  }

  renderSearchCoachesForm = () => {
    if (this.state.searchCoaches === false){
      this.setState({
        searchPlayers: false,
        searchTeams: false,
        searchShows: false,
        searchCoaches: true,
        searchPlaceholder: "Search Coaches"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Improv Pal</h1>
        </header>
        {/*<p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}

        <Header logIn={this.logIn} logOut={this.logOut} state={this.state} renderSearchPlayersForm={this.renderSearchPlayersForm} renderSearchTeamsForm={this.renderSearchTeamsForm} renderSearchShowsForm={this.renderSearchShowsForm} renderSearchCoachesForm={this.renderSearchCoachesForm}/>

        <DisplayContainer searchPlayers={this.state.searchPlayers} searchTeams={this.state.searchTeams} searchShows={this.state.searchShows} searchCoaches={this.state.searchCoaches} placeholder={this.state.searchPlaceholder}/>

      </div>
    );
  }
}

export default App;
