import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from './avatarimg-ConvertImage.png';

class Contact extends Component {
  render() {
      return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2 style={{fontFamily: 'Barlow Condensed'}}>Caleb Habtegebriel</h2>
                <img
                        src={Avatar}
                        alt="avatar"
                        style={{height: '250px'}}
                      />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'Barlow Condensed'}}>Hi, my name is Caleb and I am a Computer Engineering major at the University of Texas at Austin. My interests are Data Science, Machine Learning, and Web Development. Feel free to reach out to me if you want to connect or have any questions.</p>
              </Cell>
              <Cell col={6}>
                <h2 style={{fontFamily:'Barlow Condensed'}}>Contact Me</h2>
                <hr/>
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Barlow Condensed', color: 'whitesmoke'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (469) 235-5021
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Barlow Condensed', color: 'whitesmoke'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        habtegebrielc@gmail.com
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Barlow Condensed', color: 'whitesmoke'}}>
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        caleb-habtegebriel
                      </ListItemContent>
                    </ListItem>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Barlow Condensed', color: 'whitesmoke'}}>
                        <i className="fa fa-github-square"  aria-hidden="true" />
                        CalebHabtegebriel
                      </ListItemContent>
                    </ListItem>

                  </List>
                </div>

              </Cell>
            </Grid>
          </div>
      )
  }
}

export default Contact;