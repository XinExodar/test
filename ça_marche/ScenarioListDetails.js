import React from 'react'
import ScenarioDetails from './ScenarioDetails'


const ScenarioListDetails = ({scenarios}) => {
    return (
        <div className="project-list section">
            { scenarios && scenarios.map(scenario => {
                return (
                    <ScenarioDetails scenario={scenario} key={scenario.id} />
                )
            })}
        </div>
    )
}

export default ScenarioListDetails