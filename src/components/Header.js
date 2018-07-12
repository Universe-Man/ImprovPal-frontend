import React from 'react';
import '../assets/Header.css';
// WILL NEED A LOGIN FORM TO RENDER FIRST EVENTUALLY!!!
// CONSIDER IMPORTING NAVLINK FROM REACT ROUTER
const Header = (props) => {
  return(
      <div id="main-header">
        {(props.state.loggedIn === false) ? (
          <button className="header-buttons" onClick={props.logIn}>Login</button>
        ) : (<React.Fragment>
              <button className="header-buttons"  onClick={props.renderSearchPlayersForm}>Search Players</button>
              <button className="header-buttons"  onClick={props.renderSearchTeamsForm}>Search Teams</button>
              <button className="header-buttons" onClick={props.renderSearchShowsForm}>Search Shows</button>
              <button className="header-buttons"  onClick={props.renderSearchCoachesForm}>Search Coaches</button>
              <button className="header-buttons"  onClick={props.logOut}>Logout</button>
            </React.Fragment>)}
      </div>
    )

}

export default Header;
