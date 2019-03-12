import React, { Component } from 'react'
import CreateTache from '../../../taches/CreateTache'
import TacheList from '../../../taches/TacheList'
import TacheListDetails from '../../../taches/TacheListDetails'
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import TacheListDragNDrop from "../../TacheListDragNDrop";
import Modal from 'react-responsive-modal';
import CreateObject from '../Object/CreateObject'
import CreatePnj from '../PNJ/CreatePnj'
import ObjectList from '../Object/ObjectList'
import PnjList from '../PNJ/PnjList'

class PageTache extends Component {


    stateTache = {
        openTache: false,
    };


    onOpenModalTache = () => {
        this.setState(this.stateTache ={ openTache: true });
    };

    onCloseModalTache = () => {
        this.setState(this.stateTache ={ openTache: false });
    };

    stateObject = {
        openObject: false,
    };

    onOpenModalObject = () => {
        this.setState(this.stateObject ={ openObject: true });
    };

    onCloseModalObject = () => {
        this.setState(this.stateObject ={ openObject: false });
    };

    statePNJ = {
        openPNJ: false,
    };

    onOpenModalPNJ = () => {
        this.setState(this.statePNJ ={ openPNJ: true });
    };

    onCloseModalPNJ = () => {
        this.setState(this.statePNJ ={ openPNJ: false });
    };


    render() {
        const { taches } = this.props;
        const { pnjs } = this.props;
        const { objects } = this.props;
        const { openTache } = this.stateTache;
        const { openObject } = this.stateObject;
        const { openPNJ } = this.statePNJ;

        return (


            <div className="row">
                <div className="col s3 m3 l3">
                    <TacheList taches={taches} />
                </div>
                <div className="col s6 m6 l6">
                    <div className="box" style={{height: '100vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <TacheListDragNDrop taches={taches} />
                    </div>
                </div>
                <div className="col s3 m3 l3">
                    <div className="container">
                        <div className="divider"></div>
                        <div className="section">
                            <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalTache}>Nouvelle Tache</button>
                            <Modal open={openTache} onClose={this.onCloseModalTache} center>
                                <CreateTache/>
                            </Modal>
                        </div>
                        <div className="section box" style={{height: '250px', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                            <TacheListDetails taches={taches} />
                        </div>

                        <div className="section">
                            <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalObject}>Nouvelle Objet</button>
                            <Modal open={openObject} onClose={this.onCloseModalObject} center>
                                <CreateObject/>
                            </Modal>
                        </div>
                        <div className="section box" style={{height: '250px', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                            <ObjectList objects={objects}/>
                        </div>
                        <div className="section">
                            <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalPNJ}>Nouveau PNJ</button>
                            <Modal open={openPNJ} onClose={this.onCloseModalPNJ} center>
                                <CreatePnj pnjs={pnjs}/>
                            </Modal>
                        </div>
                        <div className="section box" style={{height: '250px', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                            <PnjList/>
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
        taches: state.firestore.ordered.taches,
        pnjs: state.firestore.ordered.pnjs,
        objects: state.firestore.ordered.objects

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'taches'},

    ])
)(PageTache)
