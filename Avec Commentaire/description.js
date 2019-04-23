
/* charger de toute la description du noeud cliquer ou de l'affichage de la liste des entitées*/

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
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

/* style du de la balise "form" */
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
});

class description extends Component {


    /*state des modifications à apporter au joeud séléctionner (pour changer de nom ou de description) */
    state = {
        id:"",
        description:"",
    };

    /* si un changement dans le nom ou la description, ce charge de l'enregistrer dans le state au dessus*/
    handleChange = id => event => {
        this.setState({ [id]: event.target.value });
    };



    /* gère la modification une fois valider, changement des sources et des targets des liens concernées */
    /* problèmme avec les liens  */
    handleSubmit = (e) => {
        e.preventDefault();
        var k=0;
        if (this.state.id !== "") {
            for (var i = 0; activite.nodes[i]; i++) {

                if (activite.nodes[i].id === activite.node.id) {
                    k = i;
                }

                for (var f = 0; activite.links[f]; f++) {
                    console.log(f);
                    console.log(activite);
                    if (activite.links[f].source === activite.node.id) {

                        activite.links[f].source = this.state.id;
                        if (activite.links[f].target === activite.node.id) {
                                activite.links[f].target = this.state.id;
                        }
                    } else if (activite.links[f].target === activite.node.id) {

                        activite.links[f].target = this.state.id;
                    }
                }


            }
        }
        //const links = activite.links.filter(l => l.source !== activite.node.id && l.target !== activite.node.id);
        if (this.state.id !== ""){
            activite.node.id = this.state.id;
            activite.nodes[k].id = this.state.id;
        }
        if (this.state.description !== "") {
            activite.node.description = this.state.description;
            activite.nodes[k].description = this.state.description;
        }

        this.setState({id:""});
        this.setState({description:""});



    };


    /* gère ouverture modal Entité */
    stateEntite = {
        openEntite: false,
    };

    onOpenModalEntite = () =>{
        this.setState(this.stateEntite ={ openEntite: true});

    };

    onCloseModalEntite = () => {
        this.setState(this.stateEntite ={ openEntite: false });
    };

    /* gère ouverture modal Lien */
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


        {/* description du noeud séléctionné */}
        if (activite.node !== null) {
            return (
                <div>
                    <div className="section box" style={{height: '90vh', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                        {/* utilisation des forms de modal-ui, nom et description dans les forms */}
                        <form>
                            <TextField
                                id="standard-name"
                                label={activite.node.id}
                                value={this.state.id}
                                onChange={this.handleChange('id')}
                                margin="normal"
                            />
                        </form>
                        <form>
                            <TextField
                                id="standard-name"
                                label={activite.node.description}
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                margin="normal"
                            />
                        </form>
                        {/* liste des liens relatif à ce noeud */}
                        <div className="card-action">
                            <Links/>
                        </div>
                        <div className="modal-footer">
                            <button className="btn pink lighten-1" onClick={this.handleSubmit}>modifier</button>
                        </div>
                    </div>

                    {/* modal pour modifier les liens */}
                    <div>
                        <Button className="BoutonLien" variant="outlined" color="primary" onClick={this.onOpenModalLien}>
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


                /* affichage des entité si pasde noeud séléctionner */
                <div>
                    <div>
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

    /* affichage des liens  */
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


export default withStyles(styles)(description);
