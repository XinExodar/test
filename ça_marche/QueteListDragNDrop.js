import React from 'react'
import QueteSummaryDragNDrop from './QueteSummaryDragNDrop'

const QueteListDragNDrop = ({quetes}) => {
    return (
        <div className="project-list section">
            { quetes && quetes.map(quete => {
                return (
                    <QueteSummaryDragNDrop quete={quete} key={quete.id} />
                )
            })}
        </div>
    )
}

export default QueteListDragNDrop