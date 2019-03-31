import React, { Component } from 'react'
import {activite} from './store'

class CreateActivite extends Component {
    state = {
        id: '',
        description: '',
        type: "activite"
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        activite.nodes.push(this.state);

    }
    render() {

        return (
            <div className="container">
                <div className="modal-content">
                <form className="white">
                    <h5 className="grey-text text-darken-3">Create a New Activite</h5>
                    <div className="input-field">
                        <input type="text" id='id' onChange={this.handleChange} />
                        <label htmlFor="title">Activite Title</label>
                    </div>
                    <div className="input-field">
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        <label htmlFor="content">Activite Content</label>
                    </div>
                    <div className="modal-footer">
                        <button className="btn pink lighten-1" onClick={this.handleSubmit}>Create</button>
                    </div>

                </form>
                </div>
            </div>
        )
    }
}

export default CreateActivite
