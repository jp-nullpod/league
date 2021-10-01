import React, { Component } from 'react';
import Team from './team';

class League extends React.Component {
    state = {
        teams: [
            { name: 'manchester', win: 4, draw:3, lost:1, goals_scored: 43, goals_conceeded: 12},
            { name: 'liverpool', win: 4, draw:4, lost:1, goals_scored: 43, goals_conceeded: 12},
            { name: 'chelsea', win: 3, draw:1, lost:3, goals_scored: 43, goals_conceeded: 12},
        ]
    }

    render() { 
        return (
            <div>
                <h1>League Play</h1>
                <table className="table table-hover">
                    <tbody>
                        {  this.state.teams.map(team => (                
                                <Team 
                                    team={team} 
                                />
                        ))}
                    </tbody>
                </table>
            </div>
        )

    }
}
 
export default League;