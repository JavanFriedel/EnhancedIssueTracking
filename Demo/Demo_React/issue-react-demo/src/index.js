import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

//  Import sections of document
import SummaryList from './summary';
import PinnedCards from './pinned.js';
import Loading from './issueList';


// main class used to pass to reactDom Render, giving a single source.
class Main extends React.Component {
constructor (props){
  super(props);
  this.state = {
    loading : true
  }
}

  render(){
    return (      
      <Suspense fallback={<div>Loading...</div>}>
        <div>      
            <div className="wrapper">
            {/* This elements to include, at this time no props required */}
                <SummaryList />
                <PinnedCards />
                <Loading />
            </div>
        </div>
        </Suspense>        
    )
  }

}

class MainLoading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mLoading: false
    }
  }

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({mLoading: true}) //After 1 second, set render to true
}.bind(this), 2000)
}

  render(){

    if (this.state.mLoading){
      return(
      <div>
        <Main />
      </div>
      )
    }
    return(
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
    )
  }
}

ReactDOM.render (
    <MainLoading />,
    document.getElementById('root')
)