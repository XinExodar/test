import React from "react";


/* permet d'afficher si pointé par une source ou pointe vers un noeud */

const links_details = ({link, name}) => {
    if (name === link.target){
        return(
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <p>est pointé par</p>
                    <span className="card-title">{link.source}</span>
                </div>
                <div className="card-action">
                </div>
            </div>
        )
    }else if (name === link.source){
        return(
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <p>pointé vers</p>
                    <span className="card-title ">{link.target}</span>
                </div>
                <div className="card-action">
                </div>
            </div>
        )
    }else{

        return null
    }

}

export default links_details
