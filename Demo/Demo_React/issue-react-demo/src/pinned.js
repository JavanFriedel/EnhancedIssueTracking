import React from 'react';

 export const PinnedCards = () => {
    return (
        <div>      
            {/*                    -----------------------  Pinned Issues  -------------------------------                         */}

          <div className="section" id="pinnedIssues">
              <h1>Pinned Issues</h1>
              <p className="hideTag">Hide</p>
              <div id="pinnedCards">
                  <div className="card">
                      <div className="cardTitle">
                          <p>How to turn off computer?</p>
                      </div>
                      <div className="cardSubTitle">
                          <p>#1 by Bob on Jan 7</p>
                      </div>
                      <div className="cardStatus"><img src={require ("./Icons/StatusClosed.svg")} alt="Status Closed" />
                          <p>Closed</p> <img src={require ("./Icons/CommentBox.svg")} alt="Status Closed" />
                          <p>1</p><img src={require ("./Icons/UpArrow.svg")} alt="Status Closed" />
                          <p>1100</p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="cardTitle">
                          <p>Google integration exports data</p>
                      </div>
                      <div className="cardSubTitle">
                          <p>#72 by TinFoilHat on Feb 1</p>
                      </div>
                      <div className="cardStatus"><img src={require ("./Icons/StatusClosed.svg")} alt="Status Closed" />
                          <p>Closed</p> <img src={require ("./Icons/CommentBox.svg")} alt="Status Closed" />
                          <p>9</p><img src={require ("./Icons/UpArrow.svg")} alt="Status Closed" />
                          <p>99</p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="cardTitle">
                          <p>Space in code effecting render in EI 6 <span className="tagCSS">CSS</span></p>
                      </div>
                      <div className="cardSubTitle">
                          <p>#1 by Bob on Jan 7</p>
                      </div>
                      <div className="cardStatus"><img src={require ("./Icons/StatusOpen.svg")} alt="Status Closed" />
                          <p>Closed</p> <img src={require ("./Icons/CommentBox.svg")} alt="Status Closed" />
                          <p>2</p><img src={require ("./Icons/UpArrow.svg")} alt="Status Closed" />
                          <p>1200</p>
                      </div>
                  </div>
              </div>
          </div>           
 
        </div>
        
      )
    }