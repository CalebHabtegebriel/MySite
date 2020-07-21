import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab:0  };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Grid>            
            {/*Project 1 */}
            <Card shadow={5} style={{ minWidth:'450', width: '25vw',height: '45vh', margin:'auto', opacity: 0.95, margin: '4vh'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:'url(https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg) center / cover'}}>Portfolio Website</CardTitle>
                <CardActions border>
                  <CardText>Developed a personal portfolio website to display project, work, and leadership experience.</CardText>
                </CardActions>   
                <CardActions border>
                    <CardText><strong>Tools & Languages:</strong> ReactJS, JavaScript, HTML, CSS, Git, Github</CardText>
                </CardActions>            
                <CardActions border>
                  <Button style={{color: 'black'}} href="https://github.com/CalebHabtegebriel/MySite">GitHub</Button>
                </CardActions>            
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>

          {/*Project 2 */}
          <Card shadow={5} style={{minWidth:'450', width:'25vw',height: '45vh', margin:'auto', opacity: 0.95, margin: '4vh'}}>

            <CardTitle style={{color: '#fff', height: '176px', background:'url(https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg) center / cover'}}>Exercise Tracker</CardTitle>
              
            <CardActions border>
              <CardText>Currently developing a UI to track, log, and visualize excercise and fitness journey.</CardText>
            </CardActions>
            <CardActions border>
                <CardText><strong>Tools & Languages:</strong> Python, ReactJS, JavaScript, HTML, CSS, Git, Github</CardText>
            </CardActions>  
            <CardActions border>
              <Button style={{color: 'black'}}>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share"/>
            </CardMenu>
          </Card>

            {/*Project 3 */}
            <Card shadow={5} style={{minWidth:'450', width: '25vw',height: '45vh', margin:'auto', opacity: 0.95, margin: '4vh'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:'url(https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg) center / cover'}}>Sorting Algorithms Visualizer</CardTitle>
              <CardActions border>
                <CardText>Developed a tool to visualize soritng algorithms like bubble-sort, merge-sort,insertion-sort, etc.</CardText>
              </CardActions>
              <CardActions border>
                <CardText><strong>Tools & Languages:</strong>ReactJS, JavaScript, HTML, CSS, Git, Github</CardText>
              </CardActions>
              <CardActions border>
                <Button style={{color: 'black'}}>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>
            {/*Project 3 */}
            <Card shadow={5} style={{minWidth:'450', width: '25vw',height: '45vh', margin:'auto', opacity: 0.95, margin: '4vh'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:'url(https://c1.wallpaperflare.com/preview/552/758/364/computer-laptop-macbook-coding.jpg) center / cover'}}>Path-Finding Algorithms Visualizer</CardTitle>
              <CardActions border>
                <CardText>Currently developing a tool to visualize common pathfinding algorithms like A*, Dijkstra's, etc.</CardText> 
              </CardActions> 
              <CardActions border>
                <CardText><strong>Tools & Languages:</strong>ReactJS, JavaScript, HTML, CSS, Git, Github</CardText>
              </CardActions>
              <CardActions border>
                <Button style={{color: 'black'}}>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>
          </Grid>

          
        </div>
      )
    }else if(this.state.activeTab === 1){
      return(
        <div>
          <h1>This is Academic</h1>
        </div>
      )
    }else if(this.state.activeTab === 2){
      return(
        <div>
          <h1>This is Hackathons</h1>
        </div>
      )
    }

  }




render() {
    return(
        <div className="category-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
              <Tab style={{color: 'white', fontFamily:'Barlow Condensed'}}>Personal</Tab>
              <Tab style={{color: 'white', fontFamily:'Barlow Condensed'}}>Academic</Tab>
              <Tab style={{color: 'white', fontFamily:'Barlow Condensed'}}>Hackathons</Tab>
          </Tabs>

          
              
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          
        </div>
    )
  }
}

export default Projects;