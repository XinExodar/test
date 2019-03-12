import React from 'react'
import TacheDetails from './TacheDetails'


const TacheListDetails = ({taches}) => {
    return (
        <div className="project-list section">
            { taches && taches.map(tache => {
                return (
                    <TacheDetails tache={tache} key={tache.id} />
                )
            })}
        </div>
    )
}

export default TacheListDetails