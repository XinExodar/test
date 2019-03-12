import React from 'react'
import Draggable from 'react-draggable';

const QueteSummaryDragNDrop = ({quete}) => {
    return (

        <div style={{height: '100vh', width: '10000px', padding: '10px'}}>  {/*pour top faire -10-y    y étant la position de l'élément pour ne pas qu'il aille trop haut*/}
            <Draggable
                bounds={"parent"}
                handle=".handle"
                position={null}
                scale={1}
                onStart={Draggable.handleStart}
                onDrag={Draggable.handleDrag}
                onStop={Draggable.handleStop}>
                <div className="box handle">
                    <div>{quete.nom}</div>
                    <br/>
                </div>
            </Draggable>
        </div>
    )
}

export default QueteSummaryDragNDrop