import React, { Component } from 'react';
import './team.css';

class Team extends React.Component {

    renderTotalMatches(win, draw, lost) {
        return win + draw + lost;
    }

    renderGoalDifference(scored, conceed) {
        return scored - conceed;
    }

    renderTotalPoints(win, draw) {
        return (3 * win) + draw;
    }

    render() { 
        const team = this.props.team;
        return (
            <tr>
                <td>{team.name}</td>
                <td>{this.renderTotalMatches(team.win, team.draw, team.lost)} </td>
                <td>{team.win} </td>
                <td>{team.draw} </td>
                <td>{team.lost} </td>
                <td>{team.goals_scored} </td>
                <td>{team.goals_conceeded}</td>
                <td>{this.renderGoalDifference(team.goals_scored,team.goals_conceeded)} </td>
                <td>{this.renderTotalPoints(team.win, team.draw)}</td>
            </tr>
        )
    }
}
 
export default Team;