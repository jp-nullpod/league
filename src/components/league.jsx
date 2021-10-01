import React, { Component } from 'react';
import Team from './team';

class League extends React.Component {
    state = {
        teams: [
            { id: 1, name: 'manchester', win: 4, draw:3, lost:1, goals_scored: 43, goals_conceeded: 12},
            { id: 2, name: 'liverpool', win: 4, draw:4, lost:1, goals_scored: 43, goals_conceeded: 12},
            { id: 3, name: 'chelsea', win: 3, draw:1, lost:3, goals_scored: 43, goals_conceeded: 12},
        ],
        team_name: ''
    }

    handleAdd = () => {
        const team_name = this.state.team_name;
        console.log(team_name)
        const team = { 
            id: 4,
            name: team_name, 
            win: 0,
            draw: 0,
            lost: 0,
            goals_scored: 0, 
            goals_conceeded: 0
        }
        const teams = [...this.state.teams];
        teams.push(team);
        this.setState({
            teams,
            team_name: ''
        })
    }

    handleChange = (value) => {
        this.setState({
            team_name: value
        })
    }

    render() { 
        return (
            <div>
                <h1>League Play</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">M</th>
                            <th scope="col">W</th>
                            <th scope="col">D</th>
                            <th scope="col">L</th>
                            <th scope="col">GA</th>
                            <th scope="col">GC</th>
                            <th scope="col">GD</th>
                            <th scope="col">Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {  this.state.teams.map(team => (                
                                <Team 
                                    key={team.id}
                                    team={team} 
                                />
                        ))}
                    </tbody>
                </table>
                <input 
                    id="team_name" 
                    type="text" 
                    value={this.state.team_name}
                    onChange={(e) => this.handleChange(e.target.value)} />
                <button 
                    onClick={this.handleAdd}
                    className="btn btn-secondary btn-sm m-2">Add
                </button>
            </div>
        )

    }
}
 
export default League;