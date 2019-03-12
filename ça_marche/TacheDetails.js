import React from 'react'


const TacheDetails = ({tache}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{tache.nom}</span>
            </div>
            <div className="card-action">
                <ul>
                    <li>
                        <span className="card-title ">{tache.descr}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TacheDetails