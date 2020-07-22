import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import Avatar from './avatarimg-ConvertImage.png';
import Educaton from './education'
import Experience from './experience';
import Skills from './skills';
import LeadershipExperience from './leadershipExperience';

class Resume extends Component {
  render() {
      return(
        <div>
          <Grid>
            <Cell className="resume-left-col" style={{paddingLeft: '3vh', width: '30vw'}}>
              <div style={{textAlign: 'center'}}>
              <img
                        src={Avatar}
                        alt="avatar"
                        style={{height: '200px' ,paddingTop: '5vh'}}
                      />
              </div>
              <h2 style={{paddingTop: '1.75em', color: 'black'}}>Caleb Habtegebriel</h2>
              <h4 style={{color: 'black'}}>Software Developer</h4>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%', color: 'black'}}/>
              <h3>Address</h3>
              <p>2616 Simmons Drive, Sachse, Texas, 75048</p>
              <h5>Phone</h5>
              <hr style={{borderTop:'3px solid #833fb2', width: '30%', color: 'black'}}/>
              <p>(469) 235-5021</p>
              <h5>Email</h5>
              <hr style={{borderTop:'3px solid #833fb2', width: '30%', color: 'black'}}/>
              <p>habtegebrielc@gmail.com</p>
              <h5>Web</h5>
              <hr style={{borderTop:'3px solid #833fb2', width: '30%', color: 'black'}}/>
              <p>calebhabtegebriel.com</p>
              <hr style={{borderTop: '3px solid #833fb2', width: '50%', color: 'black'}}/>
              <Button colored raised>Download Resume</Button>

            </Cell>
            <Cell className="resume-right-col" style={{width: "60vw", justifyContent: 'right'}}>
              <h2 style={{fontFamily: 'Barlow Condensed'}}>Education</h2>
              <Educaton 
              startMonth= "August"
              startYear={2018}
              endMonth = "May"
              endYear={2022}
              schoolName="University of Texas at Austin"
              schoolDescription1="Bachelor's of Science in Electrical and Computer Engineering"
              schoolDescription2="Software Engineering & Data Science"
              schoolDescription3="Courses Completed: Data Structures, Algorithms, Software Design and Implementation II, Linear Algebra, Linear Systems and Signals, Operating Systems, Discrete Mathematics"
               />
              <Educaton 
              startMonth='August'
              startYear={2014}
              endMonth='June'
              endYear={2018}
              schoolName="L. V. Berkner High School"
              schoolDescription1="Involvements: STEM Senate(Vice-President), 3X lettered varsity swimmer, National Honor Society, Math Honor Society"
               />
               <hr style={{borderTop: '3px solid #e22947'}}/>
               <h2 style={{fontFamily: 'Barlow Condensed'}}>Experience</h2>
               <Experience
              startMonth='May' 
              startYear={2020}
              endMonth='August'
              endYear={2020}
              jobName="Software Engineering Intern @ DTCC"
              jobDescription1="Developed a UI that keeps track of active servers and databases within the fixed income department. Engineered agents that monitor server and database health and visualized health metrics. Reduced response time by 30%. "
              jobDescription2="Programmed an API for databases and servers to communicate with health monitoring systems. Developed a calendar-like environment that integrates the deployment of different teams into a calendar to reduce shipment time by 50%."
              jobDescription3="Tech Stack: Angular, TypeScript, HTML, CSS, Java, Splunk, Git, Jira"
              />
              <Experience
              startMonth='April' 
              startYear={2020}
              endMonth='Present'
              jobName="Computer Science Instructor @ Juni Learning"
              jobDescription1="Teach private 1:1 computer science classes for 20 studnets between 7-18 in Python, Java, JavaScript, HTML, & CSS to develop OOP, data structures, & algorithms knowledge."
              jobDescription2="Instruct weekly 1 hour classes for each student culminating with the student designing and building their own projects using skills and concepts developed over the course of the 3 - 6 month curriculum."
              />
              <Experience
              startMonth='June' 
              startYear={2019}
              endMonth='December'
              endYear={2019}
              jobName="Leadershipt Development Intern @ Antioch Austin"
              jobDescription1="Teach private 1:1 computer science classes for 20 studnets between 7-18 in Python, Java, JavaScript, HTML, & CSS to develop OOP, data structures, & algorithms knowledge."
              jobDescription2="Instruct weekly 1 hour classes for each student culminating with the student designing and building their own projects using skills and concepts developed over the course of the 3 - 6 month curriculum."
              />
              <hr style={{borderTop: '3px solid #e22947'}}/>
              <h2 style={{fontFamily: 'Barlow Condensed'}}>Leadership Experience</h2>
              <LeadershipExperience
              positionName="Fundraising Chair @ UT NSBE"
              startMonth="May"
              startYear={2019}
              endMonth="May"
              endYear={2020}
              positionDescription1="Recruit, direct, and organize 5+ fundraisers aimed at carrying out NSBE mission"
              positionDescription2="Planned and executed first annual NSBE basketball fundraiser and raised over $450 within four hours"
              positionDescription3="Awarded October 2019 officer of the month. Previously Freshman President."
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