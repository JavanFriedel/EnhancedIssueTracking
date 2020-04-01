import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import { SummaryList } from './summary';
import { PinnedCards } from './pinned.js';
import { IssueList } from './issueList';

class Main extends React.Component {
  render(){
    return (
        <div>      
            <div className="wrapper">
                <SummaryList />;
                <PinnedCards />;
                <IssueList />;
            </div>
        </div>
    )
  }
}

ReactDOM.render (    
    <Main />,
    document.getElementById('root')
)