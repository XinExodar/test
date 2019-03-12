import React, { Component } from 'react'
import CreateQuete from '../../../quetes/CreateQuete'
import QueteList from '../../../quetes/QueteList'
import QueteListDetails from '../../../quetes/QueteListDetails'
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import QueteListDragNDrop from "../../../quetes/QueteListDragNDrop";
import Modal from 'react-responsive-modal';

class PageQuete extends Component {

    stateQuete = {
        openQuete: false,
    };


    onOpenModalQuete = () => {
        this.setState(this.stateQuete ={ openQuete: true });
    };

    onCloseModalQuete = () => {
        this.setState(this.stateQuete ={ openQuete: false });
    };


    render() {
        const { quetes } = this.props;
        const { openQuete } = this.stateQuete;
        return (


            <div className="row">
                <div className="col s3 m3 l3">
                    <QueteList quetes={quetes} />
                </div>
                <div className="col s6 m6 l6">
                    <div className="box" style={{height: '100vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <QueteListDragNDrop quetes = {quetes}/>
                    </div>
                </div>
                <div className="col s3 m3 l3">
                    <div className="container">
                        <div className="divider"></div>
                        <div className="section">
                            <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalQuete}>Nouveau Quete</button>
                            <Modal open={openQuete} onClose={this.onCloseModalQuete} center>
                                <CreateQuete/>
                            </Modal>
                        </div>
                        <div className="section">
                            <div className="section box" style={{height: '250px', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                                <QueteListDetails quetes={quetes} />
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
        quetes: state.firestore.ordered.quetes,

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'quetes' },

    ])
)(PageQuete)