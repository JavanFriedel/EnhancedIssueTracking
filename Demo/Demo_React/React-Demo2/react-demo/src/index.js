import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import Summary from "./Summary"
import PinnedIssues from "./pinned"
import IssuesList from "./IssuesList"

class Main extends React.Component{
  render(){
    return(   
      <div className='wrapper'>  
      <Summary />
      <PinnedIssues />
      <IssuesList entries = {10} />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
