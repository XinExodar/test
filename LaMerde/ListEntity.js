import React, { Component } from 'react'
import Entity from './Entity'
import {activite} from "./store"

class List extends Component {

    render() {
        if (activite.listEntity !== null){
            return(
                <div className="project-list section">
                    { activite && activite.listEntity.map(Entite => {
                        return (
                            <div>
                                <Entity Entite={Entite}/>
                            </div>
                        )
                    })}
                </div>

            )
        }else{
            console.log(activite);
            return null
        }
    }


};

class ListEntity extends Component {
    render() {
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
};




export default ListEntity