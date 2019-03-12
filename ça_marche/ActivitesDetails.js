import React from 'react'

const ActiviteDetails = ({activite}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{activite.nom}</span>
            </div>
            <div className="card-action">
                <ul>
                    <li>
                        <span className="card-title ">{activite.descr}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ActiviteDetails