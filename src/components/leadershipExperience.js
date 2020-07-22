import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class LeadershipExperience extends Component {
    render() {
        return(
            <Grid style={{fontFamily: 'Barlow Condensed', }}>
                <Cell col={4}>
                    <p style={{fontSize: '1.5em'}}>{this.props.startMonth} {this.props.startYear} - {this.props.endMonth} {this.props.endYear}</p>
                </Cell>

                <Cell col={8}>
                    <h4 style={{marginTop: '0px', fontFamily: 'Barlow Condensed'}}>{this.props.positionName}</h4>
                    <hr style={{borderTop: '3px solid', width: '70%', color: 'black'}}/>
                    <p style={{fontSize:'1.5em'}}>{this.props.positionDescription1}</p>
                    <p style={{fontSize:'1.5em'}}>{this.props.positionDescription2}</p>
                    <p style={{fontSize:'1.5em'}}>{this.props.positionDescription3}</p>
                </Cell>
            </Grid>
        )
    }
}

export default LeadershipExperience;