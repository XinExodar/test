import React, { Component } from 'react'
import {activite} from './store'


import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit,
    },
});

class CreateLien extends Component {
    state = {
        source:activite.nodes[0].id, //le 1 er noeud séléctionner pour le lié
        target:activite.nodes[0].id, //le 2eme
    }


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        activite.links.push(this.state);
        console.log(this.state);

    }
    render() {
        const { classes } = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <Select
                        value={this.state.source}
                        onChange={this.handleChange}
                        inputProps={{
                            name: "source",
                            id: 'age-simple',
                        }}
                    >
                        {activite.nodes.map((index)=>(
                            <MenuItem value={index.id}>{index.id}</MenuItem>
                        ))}
                    </Select>
                    lié à
                    <Select
                        value={this.state.target}
                        onChange={this.handleChange}
                        inputProps={{
                            name: "target",
                            id: 'age-simple',
                        }}
                    >
                        {activite.nodes.map((index)=>(
                            <MenuItem value={index.id}>{index.id}</MenuItem>
                        ))}
                    </Select>
                    <div className="input-field">
                        <button className="btn pink lighten-1 " onClick={this.handleSubmit} >Link</button>
                    </div>
                </FormControl>
            </form>
        )
    }
}

CreateLien.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateLien)


/**/