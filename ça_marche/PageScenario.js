import React, { Component } from 'react'
import CreateScenario from '../../../scenarios/CreateScenario'
import ScenarioList from '../../../scenarios/ScenarioList'
import ScenarioListDetails from '../../../scenarios/ScenarioListDetails'
import {compose} from "redux";
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import Modal from 'react-responsive-modal';
import ScenarioListDragNDrop from "../../../scenarios/ScenearioListDragNDrop";



class PageScenario extends Component {

    stateScenario = {
        openScenario: false,
    };


    onOpenModalScenario = () => {
        this.setState(this.stateScenario ={ openScenario: true });
    };

    onCloseModalScenario = () => {
        this.setState(this.stateScenario ={ openScenario: false });
    };




        render() {
        const { scenarios } = this.props;
        const { openScenario } = this.stateScenario;
        return (


            <div className="row">
                <div className="col s3 m3 l3">
                    <ScenarioList scenarios={scenarios} />
                </div>
                <div className="col s6 m6 l6">
                    <div className="box" style={{height: '100vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
                        <ScenarioListDragNDrop scenarios={scenarios} />
                    </div>
                </div>
                <div className="col s3 m3 l3">
                    <div className="container">
                        <div className="divider"></div>
                        <div className="section">
                            <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalScenario}>Nouvelle Scenario</button>
                            <Modal open={openScenario} onClose={this.onCloseModalScenario} center>
                                <CreateScenario/>
                            </Modal>
                            <div className="section">
                                <div className="section box" style={{height: '250px', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                                    <ScenarioListDetails scenarios={scenarios} />
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
        scenarios: state.firestore.ordered.scenarios,

    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'scenarios' },

    ])
)(PageScenario)