import React from 'react';
import ListItem from './ListItem';

const FilteredList = (props) => {
  // TEMPORARY KEY FOR ID RIGHT NOW, NEEDS TO BE REPLACED WITH AN ACTUALLY ID
  let n = 0
  let allData = props.data.map(d => {
    return ( <ListItem dataObj={d} key={++n}/>)
  })

  // let filteredData = allData

  return(
    <div>
      {(props.searchPlayers === false) && (props.searchTeams === false) && (props.searchShows === false) && (props.searchCoaches === false) ? (null) : <React.Fragment>{allData}</React.Fragment>}
    </div>
  )
}

export default FilteredList;
