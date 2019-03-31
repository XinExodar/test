import React, { Component } from 'react'
import {activite} from './store'

class CreateEntite extends Component {
    state = {
        id: '',
        description: '',
        type: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(activite.nodes[2]);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        activite.listEntity.push(this.state);
        console.log(activite.nodes[2]);

    }
    render() {

        return (
            <div className="container">
                <div className="modal-content">
                    <form className="white" onSubmit={this.handleSubmit}>
                        <h5 className="grey-text text-darken-3">Create a New Entity</h5>
                        <div className="input-field">
                            <input type="text" id='id' onChange={this.handleChange} />
                            <label htmlFor="title">nom Entite</label>
                        </div>
                        <div className="input-field">
                            <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                            <label htmlFor="content">description Entite</label>
                        </div>
                        <div className="modal-footer">
                            <button className="btn pink lighten-1">Create</button>
                        </div>
                        <div className="col s1 ">
                            <p>
                                <label>
                                    <input name="group1" type="radio" id="Entite" value='PNJ' onChange={this.handleChange} />
                                    <span>PNJ</span>
                                </label>
                            </p>
                        </div>
                        <div className="col s1 offset-s3 ">
                            <p>
                                <label>
                                    <input name="group1" type="radio" id="Entite" value='PJ' onChange={this.handleChange} />
                                    <span>PJ</span>
                                </label>
                            </p>
                        </div>
                        <div className="col s1 offset-s3 ">
                            <p>
                                <label>
                                    <input name="group1" type="radio" id="Entite" value='Objet' onChange={this.handleChange} />
                                    <span>Objet</span>
                                </label>
                            </p>
                        </div>


                    </form>
                </div>
            </div>
        )
    }
}

export default CreateEntite