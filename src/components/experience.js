import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class Experience extends Component {
    render() {
        return(
            <Grid style={{fontFamily: 'Barlow Condensed', }}>
                <Cell col={4}>
                    <p style={{fontSize: '1.5em'}}>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
                </Cell>

                <Cell col={8}>
                    <h4 style={{marginTop: '0px', fontFamily: 'Barlow Condensed'}}>{this.props.jobName}</h4>
                    <hr style={{borderTop: '3px solid', width: '70%', color: 'black'}}/>
                    <p style={{fontSize:'1.5em'}}>{this.props.jobDescription1}</p>
                    <p style={{fontSize:'1.5em'}}>{this.props.jobDescription2}</p>
                    <p style={{fontSize:'1.5em'}}>{this.props.jobDescription3}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;