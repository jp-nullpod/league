import React, { Component } from 'react';
import './team.css';

class Team extends React.Component {
    render() { 
        const team = this.props.team;
        return (
            <tr>
                <td>{team.name}</td>
                <td>{team.win + team.draw + team.lost} </td>
                <td>{team.win} </td>
                <td>{team.draw} </td>
                <td>{team.lost} </td>
                <td>{team.goals_scored} </td>
                <td>{team.goals_conceeded}</td>
                <td>{team.goals_scored - team.goals_conceeded} </td>
                <td>{3 * team.win + team.draw}</td>
            </tr>
        )
    }
}
 
export default Team;