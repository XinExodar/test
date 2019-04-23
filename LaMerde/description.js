import React, {Component} from 'react'
import Links_details from './links_details'
import ListEntity from './ListEntity'
import {activite} from "./store";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import CreateLien from "./CreateLien";
import DialogActions from "@material-ui/core/DialogActions";
import CreateEntite from "./CreateEntite";

class description extends Component {

    state = {
        id: null,
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();
        var link = null;
        var k=0;
        for (var i = 0; activite.nodes[i]; i++) {
            console.log(i);
            console.log(this.state);

            if (activite.nodes[i].id === activite.node.id){
                k=i;
                link = activite.links;


                for (var f = 0; link[f]; f++) {
                    console.log(f);
                    console.log(this.state);
                    if (link[f].source === activite.node.id){

                        link[f].source = this.state.id;
                        if (link[f].target === activite.node.id){
                            link[f].target = this.state.id;
                        }
                    }else if (link[f].target === activite.node.id){

                        link[f].target = this.state.id;
                    }
                }

            }
        }
        console.log(this.state);
        //const links = activite.links.filter(l => l.source !== activite.node.id && l.target !== activite.node.id);
        activite.node.id = this.state.id;
        activite.nodes[k].id = this.state.id;
        activite.links = link;
        console.log(activite);
        this.forceUpdate();


    };

    stateEntite = {
        openEntite: false,
    };

    onOpenModalEntite = () =>{
        this.setState(this.stateEntite ={ openEntite: true});

    };

    onCloseModalEntite = () => {
        this.setState(this.stateEntite ={ openEntite: false });
    };

    stateLien = {
        openLien: false,
    };

    onOpenModalLien = () =>{
        this.setState(this.stateLien ={ openLien: true});

    };

    onCloseModalLien = () => {
        this.setState(this.stateLien ={ openLien: false });
    };




    render() {

        const { openLien } = this.stateLien;
        const { openEntite } = this.stateEntite;

        if (activite.node !== null) {
            return (
                <div>
                    <div className="section box" style={{height: '90vh', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <form className="white">
                        <div className="input-field">
                            <input type="text" id="id" onChange={this.handleChange} />
                            <label htmlFor="title">{activite.node.id}</label>
                        </div>
                        </form>
                        <div className="card-action">
                            <Links/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn pink lighten-1" onClick={this.handleSubmit}>modifier</button>
                        </div>
                    </div>
                    <div>
                        <Button variant="outlined" color="primary" onClick={this.onOpenModalLien}>
                            Lien
                        </Button>
                        <Dialog
                            open={openLien}
                            onClose={this.onCloseModalLien}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Create Link</DialogTitle>
                            <DialogContent>
                                <CreateLien/>
                            </DialogContent>
                            <DialogActions>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>



            )
        } else {
            return (

                <div>
                    <div className="section box" style={{height: '90vh', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                    <ListEntity/>
                    </div>

                    <div>
                        <Button variant="outlined" color="primary" onClick={this.onOpenModalEntite}>
                            Entite
                        </Button>
                        <Dialog
                            open={openEntite}
                            onClose={this.onCloseModalEntite}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Create Entity</DialogTitle>
                            <DialogContent>
                                <CreateEntite/>
                            </DialogContent>
                            <DialogActions>
                            </DialogActions>
                        </Dialog>
                    </div>
                </div>



            )
        }
    }
}

const Links = () => {

    if (activite.node !== null){
        return(
            <div className="project-list section">
                    { activite && activite.links.map(link => {
                        return (
                            <Links_details link={link} name={activite.node.id} />

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
