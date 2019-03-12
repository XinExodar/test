import React from 'react'
import ActiviteDetails from './ActivitesDetails'

const ActiviteListDetails = ({activites}) => {
    return (
        <div className="project-list section">
            { activites && activites.map(activite => {
                return (
                    <ActiviteDetails activite={activite} key={activite.id} />
                )
            })}
        </div>
    )
}

export default ActiviteListDetails