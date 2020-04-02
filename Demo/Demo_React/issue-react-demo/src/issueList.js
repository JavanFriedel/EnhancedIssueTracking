import React from 'react';


// The main segment to be exported but is first called by the loading function after a delay.
class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numEntries: 10, //used in implementation to pass how many entries should be used 
            sortComments: false,
            sortLikes: false            
        };
    }

    SortCommentToggle = () => {        
        console.log(this.state.numEntries);
        this.setState({sortComments: true})
        // this.setState({sortComment: true})
    }

    // render function required by classes in react
    render(){

        // declare an object that holds an array with all out list information, this would be imported from backend in real scenario
        let templateEntries = [
            {"title": "Myspace integration wont bring over my Nickelback song", "date": "Jan 02, 2020","author":"MarkZucker", "tag": "bug", "numComments": 25, "numLikes": 202, "entered": "1"},
            {"title": "Feature Request: An AI to finish the project for all of us. Its easy right?", "date": "Jan 06, 2020","author":"ClicheClient", "tag": "bug", "numComments": 32, "numLikes": 198, "entered": "2"},
            {"title": "The gravity simulation will only work on my Macintosh Computer", "date": "Jan 12, 2020","author":"ElonMusk", "tag": "degradation", "numComments": 123, "numLikes": 890, "entered": "3"},
            {"title": "Can I overwrite the default AuthHandler in github.com/micro/go-micro/v2/util/wrapper?", "date": "Jan 14, 2020","author":"KeenJerry", "tag": "degradation", "numComments": 15, "numLikes": 890, "entered": "4"},
            {"title": "add call option for proxy, make proxy can be used dynamically", "date": "Jan 21, 2020","author":"hb-chen", "tag": "tdegradation", "numComments": 24, "numLikes": 890, "entered": "5"},
            {"title": "Support ETCD User&Password in Go Micro API Command Line", "date": "Jan 23, 2020","author":"smalltangcai", "tag": "degradation", "numComments": 53, "numLikes": 890, "entered": "6"},
            {"title": "Is NATS really not support ACKs?", "date": "Jan 27, 2020","author":"wudi", "tag": "bug", "numComments": 34, "numLikes": 890, "entered": "7"},
            {"title": "It's micro not receive post as form request only as json?", "date": "Jan 28, 2020","author":"ivybridge-3c33", "tag": "leak", "numComments": 76, "numLikes": 890, "entered": "8"},
            {"title": "failed to call API after deploymnet using docker-compose", "date": "Jan 30, 2020","author":"maxwellhertz", "tag": "leak", "numComments": 54, "numLikes": 890, "entered": "9"},
            {"title": "How can I use --profile command", "date": "Feb 03, 2020","author":"ljxqxq", "tag": "leak", "numComments": 23, "numLikes": 890, "entered": "10"},
            {"title": "How to access remote micro service? ", "date": "Feb 10, 2020","author":"seaguest", "tag": "leak", "numComments": 91, "numLikes": 890, "entered": "11"},
            {"title": "Is there an up-to-date example based on consul and grpc? ", "date": "Feb 14, 2020","author":"YahuiWong", "tag": "leak", "numComments": 102, "numLikes": 890, "entered": "12"},
            {"title": "Connection leak in grpc stream client", "date": "Feb 20, 2020","author":"nisboo", "tag": "bug", "numComments": 2, "numLikes": 890, "entered": "13"},
            {"title": "Cannot enable cors using api gateway with --handler=api", "date": "Feb 22, 2020","author":"phuonghau98", "tag": "degradation", "numComments": 24, "numLikes": 890, "entered": "14"},
             
        ]

        // Cleared the value of the search bar
        function clearSearch() {
            document.getElementById("searchQ").value = " ";
        }

        // Console logs a click to the comment sort toggle, currently this deos not work to sort the list
        //Suspected Issue: Can change state, from within function but cannot cause a re-render of the the mutated object.

        //this is the template for what I want each list element to look like. Takes props handed in from the Full List function to generate the full output (see FullList function)
        const ListEntry = (props) => {
            return (
                <div className="listEntry">
                    <div className="entryStart">
                        <div className="status">
                            <img src={require ("./Icons/StatusOpen.svg")} alt="Status-Open" />
                        </div>
                        <div className="eTitle">
                            <div className="mainTitle">
                                <p>{props.title}<span className="tagBug">{props.tag}</span></p>
                            </div>
                            <div className="subTitle">
                                <p># {props.entered * 3} opened on {props.date} by {props.author}</p>
                            </div>
                        </div>
                    </div>
                    <div className="entryEnd">
                        <div className="Column">
                            <div className="listAssignee">
                                <img src="https://picsum.photos/25?random" alt="Up Arrow" />
                            </div>
                        </div>
                        <div className="sortColumn">
                            <div className="listComments"><img src={require ("./Icons/CommentBox.svg")} alt="Up Arrow" />
                                <p>{props.numComments}</p>
                            </div>
                        </div>
        
                    </div>
                </div>
            )
        }

        // The problem Child! This function creates a list for a specified number of list entries using template information, and also sorts that information based on status (sortComment or sortLikes)
        function FullList (props) {
            var listEntries = [];
            let selectEntry;
        
            // How any list items would you like to be viewed, and in what order?                        
            let numEntries = 10;

            // console.log(props.sortC)

            let sortComment = props.sortC;
            let sortLikes = props.SortL;
        
        
            // checks if sorting the list by comments or likes has been set to true, and if not, it will default to sorting by date added. (or atleast currently entered in the template form)
            if (sortComment === true){
                // console.log(props.props)
                props.props.sort((a,b) => (a.numComments < b.numComments) ? 1 : -1);
            } else if(sortLikes === true) {
                props.props.sort((a,b) => (a.numLikes < b.numLikes) ? 1 : -1);
            } else if (sortComment === false && sortLikes === false){
                // console.log("This worked!")
                props.props.sort((a,b) => (a.entered > b.entered) ? 1 : (a.entered > b.entered) ? -1 : 0);
            }
        
            // After sorting the array of template options into its propper order, this constructs an array with the amount list items we want per page, and returns it to the constructor in this case const IssueList
            for (var i = 0; i < numEntries; i++){
                    
                selectEntry = i;
                // console.log(selectEntry)
                
                // let selectEntry = Math.floor(Math.random() * templateEntries.length)
                // console.log(props.props[selectEntry].title);
                listEntries.push(
                <ListEntry 
                    title={props.props[selectEntry].title} 
                    date={props.props[selectEntry].date}
                    author={props.props[selectEntry].author} 
                    tag={props.props[selectEntry].tag}  
                    numComments={props.props[selectEntry].numComments}
                    numLikes={props.props[selectEntry].numLikes}
                    entered={props.props[selectEntry].entered}    
                    key={i} 
                />);
            }
            return listEntries;
        }

    return (
        <div>      
        {/*                    -----------------------  Main List  -------------------------------                         */}

          <div className="section" id="issuesList">

        {/*                    ----------------------- Issue Search Bar  -------------------------                   */}
              <div className="listNav">
                  <div className="search">
                      <div className="filter">
                          <p>Filters</p><img src={require ("./Icons/DropArrow.svg")} alt="drop arrow" />
                      </div>
                      <div className="searchBar">
                          <form className="pmClear">
                              <input type="text" id="searchQ" name="searchQ" defaultValue="is:issue is:open" />
                              <div id="cancel">
                                  <p onClick={clearSearch}>X</p>
                              </div>
                          </form>
                      </div>
                  </div>

        {/*                    ----------------------- Open / Closed Toggle  -------------------------                   */}
                  <div className="statusToggle">
                      <div className="statusOpen">
                          <img src={require ("./Icons/StatusOpenBlack.svg")} alt="Status Open" />
                          <p>Open</p><span>1,186</span>
                      </div>
                      <div className="statusClosed">
                          <img src={require ("./Icons/Closed.svg")} alt="Status Closed" />
                          <p>Closed</p><span>3,186</span>
                      </div>
                  </div>

        {/*                    ----------------------- New Issue Button  -------------------------                   */}
                  <div className="newIssue">
                      <div className="newIssueBlank">
                          <p>New Issue</p>
                      </div>
                      <div className="newIssueTemplate"><img src={require ("./Icons/DropdownWhite.svg")} alt="Dropdown" /></div>
                  </div>

              </div>
          </div>

        {/*                    ----------------------- Start of List  -------------------------                   */}
            <div className="listBox">

        {/*                    ----------------------- List Sorting  -------------------------                   */}
              <div className="listHeader">
                  <div id="listStart">
                      <div id="authorSort">
                          <p>Author</p>
                          <img src={require ("./Icons/DropArrow.svg")} alt="drop arrow" />
                          <div className="dropDownMenu">
                            <ul>
                                <li>Elon Musk</li>
                                <li>Mark Zucker</li>
                                <li>ClicheClient</li>
                            </ul>

                        </div>
                      </div>
                      <div id="labelSort">
                          <p>Label</p>
                          <img src={require ("./Icons/DropArrow.svg")} alt="drop arrow" />
                          <div className="dropDownMenu">
                            <ul>
                                <li>Bug</li>
                                <li>RFE</li>
                                <li>CSS</li>
                            </ul>
                        </div>
                      </div>
                  </div>
                  <div id="listEnd">
                      <div id="assigneeSort">
                          <p>Assignee</p>
                          <img src={require ("./Icons/DropArrow.svg")} alt="drop arrow" />
                          <div className="dropDownMenu">
                            <ul>
                                <li>Javan Friedel</li>
                                <li>Graham Kennery</li>
                                <li>Elon Musk</li>
                                <li>Mark Zucker</li>
                            </ul>
                        </div>
                      </div>
                      <div id="mainSort">
                          <p>Sort</p>
                          <img src={require ("./Icons/DropArrow.svg")} alt="drop arrow" />
                          <div className="dropDownMenu">
                            <ul>
                                <li id="recentListSort"><img alt="closed" src={require ("./Icons/Closed.svg")} /><p>Recent</p></li>
                                <li id="likesListSort" onClick={this.SortCommentToggle}><img alt="closed" src={require ("./Icons/Closed.svg")} />Comments</li>
                                <li id="commentsListSort"><img alt= "closed" src={require ("./Icons/Closed.svg")} />Likes</li>     
                            </ul>
                        </div>
                      </div>
                  </div>
              </div>
        
        {/*                    ----------------------- List Entries  -------------------------                   */} 

        {/* This call upon the completed list we created in our function earlier in this script              */}
              
              <FullList props = {templateEntries} sortC = {this.state.sortComments} sortL = {this.state.sortLikes} /> 
                       
            
            </div>
        </div>
      
  
  
 
    
        
      )
    }
}

class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            render: false
        }
    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 1500)
}

    render(){
        
        if(this.state.render){
            return (
                <IssueList />
            )
        }  

        return (
            <div></div>
        )
    }
}

export default Loading;