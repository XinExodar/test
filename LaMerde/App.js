import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './App.css';
import {Graph} from 'react-d3-graph';
import './App.css'
import Description from './description'
import CreateActivite from './CreateActivite'
import CreateEntite from './CreateEntite'
import CreateLien from './CreateLien'
import {activite} from "./store";
import DemoTree from "./navigation/example/app"

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SelectTest from "./SelectTest"

// graph payload (with minimalist structure)


// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used










const myConfig = {                                  /*la configuration des liens et des nodes (formes/taille/ect*/
    automaticRearrangeAfterDropNode: false,
    collapsible: false,
    directed: true,
    focusAnimationDuration: 1,
    focusZoom: 1,
    height: 2000,
    highlightDegree: 1,
    highlightOpacity: 1,
    linkHighlightBehavior: false,
    maxZoom: 8,
    minZoom: 0.1,
    nodeHighlightBehavior: false,
    panAndZoom: false,
    staticGraph: false,
    width: 2000,
    d3: {
        alphaTarget: 0.05,
        gravity: -300,
        linkLength: 80,
        linkStrength: 1,
    },
    node: {
        color: "#d3d3d3",
        fontColor: "white",
        fontSize: 8,
        fontWeight: "normal",
        highlightColor: "SAME",
        highlightFontSize: 8,
        highlightFontWeight: "normal",
        highlightStrokeColor: "SAME",
        highlightStrokeWidth: "SAME",
        labelProperty: "id",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: true,
        size: 200,
        strokeColor: "none",
        strokeWidth: 1.5,
        svg: "",
        symbolType: "circle"
    },
    link: {
        color: "#d3d3d3",
        fontColor: "black",
        fontSize: 8,
        fontWeight: "normal",
        highlightColor: "#d3d3d3",
        highlightFontSize: 8,
        highlightFontWeight: "normal",
        labelProperty: "label",
        mouseCursor: "pointer",
        opacity: 1,
        renderLabel: false,
        semanticStrokeWidth: false,
        strokeWidth: 1.5
    }
};




// graph event callbacks




const onRightClickNode = function(event, nodeId) {
    window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {

};

const onMouseOutNode = function(nodeId) {

};



const onRightClickLink = function(event, source, target) {
    window.alert(`Right clicked link between ${source} and ${target}`);
};

const onMouseOverLink = function(source, target) {

};

const onMouseOutLink = function(source, target) {

};


class App extends Component {

    stateActivite = {
        openActivite: false,
    };

    onOpenModalActivite = () =>{
        this.setState(this.stateActivite ={ openActivite: true});

    };

    onCloseModalActivite = () => {
        this.setState(this.stateActivite ={ openActivite: false });
    };


    onClickNode = (nodeId) => {                                   /*il n'était pas ici au début, je l'ai déplacé pour essaye de faire la description sur la droite, mais il me faut une vrais base de donné pour*/
        for (var i = 0; activite.nodes[i]; i++) {
            if ( activite.nodes[i].id === nodeId){
                activite.node=activite.nodes[i];
                console.log(activite);
                this.forceUpdate();
            }
        }
    };

    onClickGraph = () => {
        activite.node=null;
        this.forceUpdate();

    };

    onClickLink =(source, target) => {
        this.forceUpdate();
        window.alert(`Clicked link between ${source} and ${target}`);
    };





    render() {
        const { openActivite } = this.stateActivite;





        return (
            <div className="App">
                <div className="DemoTree"><div><DemoTree/></div>
                </div>
                <div className="graphe" style={{height: '95vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
                    <header className="App-header">                                                     {/* ici le graph, il gére tout le drag and drop, le déssin des liens ect*/}
                        <Graph
                            id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                            data={activite}
                            config={myConfig}
                            onClickNode={this.onClickNode}
                            onRightClickNode={onRightClickNode}
                            onClickGraph={this.onClickGraph}
                            onClickLink={this.onClickLink}
                            onRightClickLink={onRightClickLink}
                            onMouseOverNode={onMouseOverNode}
                            onMouseOutNode={onMouseOutNode}
                            onMouseOverLink={onMouseOverLink}
                            onMouseOutLink={onMouseOutLink}
                        />
                    </header>
                </div>




                <div className="Descitpion">
                    <Description/>
                    <div className="buttonActivite">
                        <Button variant="outlined" color="primary" onClick={this.onOpenModalActivite}>
                            Activite
                        </Button>
                    </div>
                    <Dialog
                        open={openActivite}
                        onClose={this.onCloseModalActivite}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Create Activite</DialogTitle>
                        <DialogContent>
                            <CreateActivite/>
                        </DialogContent>
                        <DialogActions>
                        </DialogActions>
                    </Dialog>
                </div>

            </div>



        );
    }
}

export default App;

//supprimerLien = () =>{
//
//          const link = activite.links.filter(function () {
//              for (var i = 0; activite.links[i]; i++) {
//                  console.log(activite.node.id);
//                  console.log(activite.node.id);
//                  console.log(activite.links[i].source);
//                  console.log(activite.links[i].target);
//
//                  console.log(activite.links[i].source !== activite.node.id);
//                  console.log(activite.links[i].target !== activite.node.id);
//                  if (activite.links[i].source !== activite.node.id && activite.links[i].target !== activite.node.id) {
//                      return activite.links[i];
//                  }
//              }
//          });
//          activite.links = link;
//          console.log(activite);
//          this.forceUpdate();
//      };

/*<button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalActivite}>Nouvelle Activite</button>
                  <div className="modal modal-fixed-footer">
                    <Modal open={openActivite} onClose={this.onCloseModalActivite}>
                      <CreateActivite/>
                    </Modal>
                  </div>*/
