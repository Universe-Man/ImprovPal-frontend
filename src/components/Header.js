import React from 'react';
// WILL NEED A LOGIN FORM TO RENDER FIRST EVENTUALLY!!!
const Header = (props) => {
  return(
      <div>
        {(props.state.loggedIn === false) ? (
          <button onClick={props.logIn}>Login</button>
        ) : (<React.Fragment>
              <button onClick={props.renderSearchPlayersForm}>Search Players</button>
              <button onClick={props.renderSearchTeamsForm}>Search Teams</button>
              <button onClick={props.renderSearchShowsForm}>Search Shows</button>
              <button onClick={props.renderSearchCoachesForm}>Search Coaches</button>
              <button onClick={props.logOut}>Logout</button>
            </React.Fragment>)}
      </div>
    )

}

export default Header;
