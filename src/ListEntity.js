import React from 'react'
import Entity from './Entity'


const ListEntity = ( {activite} ) => {
        return (
            <div className="project-list section">
                <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <List activite={activite}/>
                    </div>
                </div>
            </div>
        )
}

const List = ( {activite} ) => {

    if (activite.listEntity !== null){
        return(
            <div className="project-list section">
                { activite && activite.listEntity.map(Entite => {
                    console.log(Entite.id);
                    console.log(Entite.description);
                    return (
                        <Entity Entite={Entite}/>
                    )
                })}
            </div>
        )
    }else{
        console.log(activite);
        return null
    }
}


export default ListEntity