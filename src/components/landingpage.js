import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Avatar from './Avatar-Maker.png';
class Landing extends Component {
  render() {
      return(
          <div style={{width: '100%', amrgin: 'auto'}}>
              <Grid className="landing-grid">
                  <Cell col={12}>
                      <img
                        src={Avatar}
                        alt="avatar"
                        className="avatar-img"
                      />
                      <div className="banner-text">
                          <h1>Software Developer</h1>

                          <hr />

                        <p> Python | C++ | Java | JavaScript | HTML | CSS 
                            | React | Angular
                        </p>
                        <div className="social-links">
                            
                            <a href="https://www.linkedin.com/in/caleb-habtegebriel/" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-linkedin-square"  aria-hidden="true" />
                            </a>
                            
                            <a href="https://github.com/CalebHabtegebriel" rel="noopener noreferrer"  target="_blank">
                                <i className="fa fa-github-square"  aria-hidden="true" />
                            </a>
                        </div>
                      </div>
                  </Cell>


              </Grid>
            
          </div>
      )
  }
}

export default Landing;