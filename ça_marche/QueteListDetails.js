import React from 'react'
import QueteDetails from './QueteDetails'


const QueteListDetails = ({quetes}) => {
    return (
        <div className="project-list section">
            { quetes && quetes.map(quete => {
                return (
                    <QueteDetails quete={quete} key={quete.id} />
                )
            })}
        </div>
    )
}

export default QueteListDetails