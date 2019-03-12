import React from 'react'
import TacheSummaryDragNDrop from './TacheSummaryDragNDrop'

const TacheListDragNDrop = ({taches}) => {
    return (
        <div className="project-list section">
            { taches && taches.map(tache => {
                return (
                    <TacheSummaryDragNDrop tache={tache} key={tache.id} />
                )
            })}
        </div>
    )
}

export default TacheListDragNDrop