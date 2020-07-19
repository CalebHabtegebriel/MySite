import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Avatar from './Avatar-Maker.png';

class Contact extends Component {
  render() {
      return(
          <div className="contact-body">
            <Grid className="contact-grid">
              <Cell col={6}>
                <h2>Caleb Habtegebriel</h2>
                <img
                        src={Avatar}
                        alt="avatar"
                        style={{height: '250px'}}
                      />
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Hi, my name is Caleb and I am a Computer Engineering major at the University of Texas at Austin. My interests are Data Science, Machine Learning, and Web Development.</p>
              </Cell>
              <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
                <div className="contact-list">
                  <List>
                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                        (469) 235-5021
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                      <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                        habtegebrielc@gmail.com
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