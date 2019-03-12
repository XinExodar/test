import React from 'react'


const QueteDetails = ({quete}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{quete.nom}</span>
            </div>
            <div className="card-action">
                <ul>
                    <li>
                        <span className="card-title ">{quete.descr}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default QueteDetails