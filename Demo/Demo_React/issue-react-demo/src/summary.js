import React from 'react';

 export const SummaryList = () => {
    return (
        <div>      
            {/* -----------------------  SUMMARY  -------------------------------                         */} */}
  
            <div className="section" id="summary">
                <h1>Summary</h1>
                <p className="hideTag">Hide</p>
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
                                <p className="title" id="likes">Likes</p>
                                <p className="title" id="recent">Recent</p>
                                <p className="title" id="comments">Comments</p>
                            </div>
                        </div>
                        <div>
                            <div className="rangeContain">
                                <span className="title">Range:</span>
                                <p className="title" id="day">1D</p>
                                <p className="title" id="week">1W</p>
                                <p className="title" id="month">1M</p>
                                <p className="title" id="year">1Y</p>
                                <p className="title" id="all">ALL</p>
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
  

