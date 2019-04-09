import React from 'react'
import Links_details from './links_details'





const description = (  {node,activite} ) => {



    if (node !== -1){
        return (
            <div className="project-list section">
                <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <span className="card-title ">{activite.nodes[node].id}</span>
                    </div>
                    <div className="card-action">
                        <Links activite={activite} node={node} />
                    </div>
                </div>
            </div>
        )
    }else{
        return null}

}

const Links = (  {node,activite} ) => {

    if (node !== -1){
        return(
            <div className="project-list section">
                    { activite && activite.links.map(link => {
                        return (
                            <Links_details link={link} name={activite.nodes[node].id} />

                        )
                    })}
            </div>
        )
    }else{
        console.log(activite);
        return null
    }
}


export default description
