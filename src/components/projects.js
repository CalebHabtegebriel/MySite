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
            {/*Project 1 */}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8yV7X25H2CyiqP-JiWnSN2FBqv51m96rMsQ&usqp=CAU) center / cover'}}>Exercise Tracker</CardTitle>
                
                <CardText>Utilized APIs</CardText>
              
                <CardActions border>
                  <Button colored>GitHub</Button>
                </CardActions>
                
                <CardMenu style={{color: '#fff'}}>

                <IconButton name="share"/>
                
              </CardMenu>
            </Card>
            {/*Project 2 */}
            <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8yV7X25H2CyiqP-JiWnSN2FBqv51m96rMsQ&usqp=CAU) center / cover'}}>Exercise Tracker</CardTitle>
                <CardText>Lorem Ipsuming versions of Lorem Ipsum.</CardText>
              
              <CardActions border>
                <Button colored>GitHub</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share"/>
              </CardMenu>
            </Card>
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
                <Tab>Personal</Tab>
                <Tab>Academic</Tab>
                <Tab>Hackathons</Tab>
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