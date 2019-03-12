import React from 'react'
import ActiviteSummaryDragNDrop from "./ActiviteSumDragNDrop";

const ActiviteListDragAndDrop = ({activites}) => {

    return (
        <div className="project-list section">
            { activites && activites.map(activite => {
                return (
                    <ActiviteSummaryDragNDrop activite={activite} key={activite.id} />
                )
            })}
        </div>
    )
}

export default ActiviteListDragAndDrop