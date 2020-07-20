import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Avatar from './avatarimg-ConvertImage.png';
class Landing extends Component {
  render() {
      return(
          <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                  <Cell style={{width: '30vw'}}>
                      <img
                        src={Avatar}
                        alt="avatar"
                        className="avatar-img"
                      />
                      <div className="banner-text">
                          <h1>Hi, I'm Caleb</h1>

                          <hr />

                        <p> Web Development | Data Science | Machine Learning
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