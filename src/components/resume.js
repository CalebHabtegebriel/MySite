import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Avatar from './Avatar-Maker.png';
import Educaton from './education'
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
      return(
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'center'}}>
              <img
                        src={Avatar}
                        alt="avatar"
                        style={{height: '200px'}}
                      />
              </div>
              <h2 style={{paddingTop: '2em'}}>Caleb Habtegebriel</h2>
              <h4 style={{color: 'grey'}}>Software Developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
              <h3>Address</h3>
              <p>1 hacker way</p>
              <h5>Phone</h5>
              <p>(469) 235-5021</p>
              <h5>Email</h5>
              <p>habtegebrielc@gmail.com</p>
              <h5>Web</h5>
              <p>calebhabtegebriel.github.io</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

            </Cell>
            <Cell className="resume-right-col" col={8}>
              <h2>Education</h2>
              <Educaton 
              startYear={2018}
              endYear={2022}
              schoolName="University of Texas at Austin"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"
               />
              <Educaton 
              startYear={2014}
              endYear={2018}
              schoolName="L. V. Berkner High School"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"
               />
               <hr style={{borderTop: '3px solid #e22947'}}/>
               <h2>Experience</h2>
               <Experience 
              startYear={2020}
              endYear={2020}
              jobName="Software Engineering Intern @ DTCC"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"
              />
              <Experience 
              startYear={2020}
              endYear={2020}
              jobName="Computer Science Instructor @ Juni Learning"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five c"
               />
               <hr style={{borderTop: '3px solid #e22947'}}/>
               <h2>Skills</h2>
               <Skills 
               skill='JavaScript, HTML, CSS'
               progress={89}
               />
              <Skills 
               skill='Python, Django'
               progress={94}
               />
              <Skills 
               skill='ReactJS Angular'
               progress={89}
               />
              <Skills 
               skill='TypeScript'
               progress={89}
               />
              
            </Cell>
          </Grid>
        </div>
      )
  }
}

export default Resume;