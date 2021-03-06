import React from 'react';

 class SummaryList extends React.Component{  
    render(){

    function hideSummary(){
        document.getElementById("summary").style.display = "none"
    }

    function sortSumRecent() {
        document.getElementById("recent").style.backgroundColor = "#0378DF";
        document.getElementById("likes").style.backgroundColor = "#dbdfe5";
        document.getElementById("comments").style.backgroundColor = "#dbdfe5";

    }

    function sortSumLikes() {
        document.getElementById("likes").style.backgroundColor = "#0378DF";
        document.getElementById("recent").style.backgroundColor = "#dbdfe5";
        document.getElementById("comments").style.backgroundColor = "#dbdfe5";

    }

    function sortSumComments() {
        document.getElementById("comments").style.backgroundColor = "#0378DF";
        document.getElementById("recent").style.backgroundColor = "#dbdfe5";
        document.getElementById("likes").style.backgroundColor = "#dbdfe5";

    }

    function sortRangeDay() {
        document.getElementById("day").style.backgroundColor = "#0378DF";
        document.getElementById("week").style.backgroundColor = "#dbdfe5";
        document.getElementById("month").style.backgroundColor = "#dbdfe5";
        document.getElementById("year").style.backgroundColor = "#dbdfe5";
        document.getElementById("all").style.backgroundColor = "#dbdfe5";
    }

    function sortRangeWeek() {
        document.getElementById("day").style.backgroundColor = "#dbdfe5";
        document.getElementById("week").style.backgroundColor = "#0378DF";
        document.getElementById("month").style.backgroundColor = "#dbdfe5";
        document.getElementById("year").style.backgroundColor = "#dbdfe5";
        document.getElementById("all").style.backgroundColor = "#dbdfe5";
    }

    function sortRangeMonth() {
        document.getElementById("day").style.backgroundColor = "#dbdfe5";
        document.getElementById("week").style.backgroundColor = "#dbdfe5";
        document.getElementById("month").style.backgroundColor = "#0378DF";
        document.getElementById("year").style.backgroundColor = "#dbdfe5";
        document.getElementById("all").style.backgroundColor = "#dbdfe5";
    }

    function sortRangeYear() {
        document.getElementById("day").style.backgroundColor = "#dbdfe5";
        document.getElementById("week").style.backgroundColor = "#dbdfe5";
        document.getElementById("month").style.backgroundColor = "#dbdfe5";
        document.getElementById("year").style.backgroundColor = "#0378DF";
        document.getElementById("all").style.backgroundColor = "#dbdfe5";
    }

    function sortRangeAll() {
        document.getElementById("day").style.backgroundColor = "#dbdfe5";
        document.getElementById("week").style.backgroundColor = "#dbdfe5";
        document.getElementById("month").style.backgroundColor = "#dbdfe5";
        document.getElementById("year").style.backgroundColor = "#dbdfe5";
        document.getElementById("all").style.backgroundColor = "#0378DF";
    }
    
    return (
        <div>      
            {/* -----------------------  SUMMARY  -------------------------------                         */}
  
            <div className="section" id="summary">
                <h1>Summary</h1>
                <p className="hideTag" onClick={hideSummary}>Hide</p>
                <div className="listBox">
                    <div id="sumHeader">
                        <div>
                            <form action="/action_page.php" className="title">
                                <label htmlFor="assigned">Assigned: </label>
                                <select id="assigned" name="assigned">
                                    <option value="Javan">Javan Friedel</option>
                                    <option value="Graham">Graham Kennery</option>
                                    <option value="Elon">Elon Musk</option>
                                    <option value="Mark">Mark Zuckerberg</option>
  
                                </select>
                              </form>
                        </div>
                        <div>
                            <div id="sortContain" className="flex-centre">
                                <span className="title">Sort:</span>
                                <p className="title" id="likes" onClick={sortSumLikes}>Likes</p>
                                <p className="title" id="recent" onClick={sortSumRecent}>Recent</p>
                                <p className="title" id="comments" onClick={sortSumComments}>Comments</p>
                            </div>
                        </div>
                        <div>
                            <div className="rangeContain">
                                <span className="title">Range:</span>
                                <p className="title" id="day" onClick={sortRangeDay}>1D</p>
                                <p className="title" id="week" onClick={sortRangeWeek}>1W</p>
                                <p className="title" id="month" onClick={sortRangeMonth}>1M</p>
                                <p className="title" id="year" onClick={sortRangeYear}>1Y</p>
                                <p className="title" id="all" onClick={sortRangeAll}>ALL</p>
                            </div>
                        </div>
                    </div>
                    <div className="SlistEntry">
                        <div className="entryStart">
                            <div className="status">
                                <img src={require ("./Icons/StatusOpen.svg")} alt="Status-Open" />
                            </div>
                            <div className="eTitle">
                                <div className="mainTitle">
                                    <p>The gravity simulation will only work on my Macintosh computer <span className="tagBug">bug</span><span className="tagRegression">regression</span></p>
                                </div>
                                <div className="subTitle">
                                    <p>#224 opened 6 hours ago by ElonMusk</p>
                                </div>
                            </div>
                        </div>
                        <div className="entryEnd">
                            <div className="sUpvotes"><img src={require ("./Icons/UpArrow.svg")} alt="Up Arrow" />
                                <p>890</p>
                            </div>
                        </div>
                    </div>
  
                    <div className="SlistEntry">
                        <div className="entryStart">
                            <div className="status">
                                <img src={require ("./Icons/StatusOpen.svg")} alt="Status-Open" />
                            </div>
                            <div className="eTitle">
                                <div className="mainTitle">
                                    <p>Myspace integration wont bring over my Nickelback song <span className="tagBug">bug</span></p>
                                </div>
                                <div className="subTitle">
                                    <p>#204 opened 5 days ago by MarkZucker</p>
                                </div>
                            </div>
                        </div>
                        <div className="entryEnd">
                            <div className="sUpvotes"><img src={require ("./Icons/UpArrow.svg")} alt="Up Arrow" />
                                <p>202</p>
                            </div>
                        </div>
                    </div>
                    <div className="SlistEntry">
                        <div className="entryStart">
                            <div className="status">
                                <img src={require ("./Icons/StatusOpen.svg")} alt="Status-Open" />
                            </div>
                            <div className="eTitle">
                                <div className="mainTitle">
                                    <p>Feature Request: An AI to finish the project for all of us. Its easy right?<span className="tagRFE">RFE</span></p>
                                </div>
                                <div className="subTitle">
                                    <p>#192 opened 6 days ago by ClicheClient</p>
                                </div>
                            </div>
                        </div>
                        <div className="entryEnd">
                            <div className="sUpvotes"><img src={require ("./Icons/UpArrow.svg")} alt="Up Arrow" />
                                <p>198</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
  
 
        </div>
        
      )
    }
}

class SumLoading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            render: false
        }
    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 500)
}

    render(){
        
        if(this.state.render){
            return (
                <SummaryList />
            )
        }  

        return (
            <div></div>
        )
    }
}

export default SumLoading;


