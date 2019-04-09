import React from "react";

const Entity = ({Entite}) => {

        return(
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="card-title ">
                    <p>Nom:</p>
                        <span className="card-title">{Entite.id}</span>
                    </div>
                    <div className="card-action">
                        <p>Description:</p>
                        <span>{Entite.description}</span>
                    </div>
                </div>
            </div>
        )

};

export default Entity