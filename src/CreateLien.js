import React, { Component } from 'react'
import {activite} from './store'
import Select from '@material-ui/core/Select';

class CreateLien extends Component {
    state = {
        source:activite.nodes[0].id, //le 1 er noeud séléctionner pour le lié
        target:activite.nodes[0].id, //le 2eme
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value

        });
        console.log(this.state.source)
    }
    handleSubmit = (e) => {
        e.preventDefault();
        activite.links.push(this.state);
        console.log(this.state)

    }
    render() {

        return (
            <div className="container">
                <div className="modal-content">
                    <form className="white">

                        <select id="source" onChange={this.handleChange} >
                            {activite.nodes.map((index)=>(
                                <option key={index.id} value={index.id} > {index.id} </option>
                            ))}
                        </select>
                        lié à
                        <select id="target" onChange={this.handleChange} >
                            {activite.nodes.map((index)=>(
                                <option key={index.id} value={index.id} > {index.id} </option>
                            ))}
                        </select>

                        <div className="input-field">
                            <button className="btn pink lighten-1 " onClick={this.handleSubmit} >Link</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default CreateLien