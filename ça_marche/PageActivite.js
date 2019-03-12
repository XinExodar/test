import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import CreateActivite from '../../../activites/CreateActivite'
import ActiviteList from '../../../activites/ActiviteList'
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import ActiviteListDragAndDrop from "../../../activites/ActiviteListDragAndDrop";
import '../../../../../App.css'
import ActiviteListDetails from "../../../activites/ActiviteListDetails"



class PageActivite extends Component {

    stateActivite = {
        openActivite: false,
    };



    onOpenModalActivite = () => {
        this.setState(this.stateActivite ={ openActivite: true });

    };

    onCloseModalActivite = () => {
        this.setState(this.stateActivite ={ openActivite: false });
    };


    render() {
        const { activites } = this.props;
        const { openActivite } = this.stateActivite;



        return (


            <div className="row">
                <div className="col s3 m3 l3">
                    <ActiviteList activites={activites} categorie="Nav" />
                </div>
                <div className="col s6 m6 l6" >
                    <div className="box" style={{height: '100vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <ActiviteListDragAndDrop activites={activites} />
                    </div>
                </div>
                <div className="col s3 m3 l3">
                    <div className="container">
                        <div className="divider"></div>
                        <div className="section">
                            <button draggable className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalActivite}>Nouvelle Activite</button>
                            <Modal open={openActivite} onClose={this.onCloseModalActivite} center>
                                <CreateActivite/>
                            </Modal>
                            <div className="section">
                                <div className="section box" style={{height: '250px', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                                        <ActiviteListDetails activites={activites} categorie="Description" />
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        activites: state.firestore.ordered.activites,

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'activites' },

    ])
)(PageActivite)
