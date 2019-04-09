import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import './App.css';
import {Graph} from 'react-d3-graph';
import './App.css'
import ListEntity from './ListEntity'
import Description from './description'
import CreateActivite from './CreateActivite'
import CreateEntite from './CreateEntite'
import CreateLien from './CreateLien'
import {activite} from "./store";
import DemoTree from "./navigation/example/app"
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
const onClickGraph = function() {

};



const onRightClickNode = function(event, nodeId) {
  window.alert(`Right clicked node ${nodeId}`);
};

const onMouseOverNode = function(nodeId) {

};

const onMouseOutNode = function(nodeId) {

};

const onClickLink = function(source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
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


  node ={                /*un test pour la description*/
    node: -1,
  };

  data ={
    data: activite,
  };

  onClickNode = (nodeId) => {                                   /*il n'était pas ici au début, je l'ai déplacé pour essaye de faire la description sur la droite, mais il me faut une vrais base de donné pour*/
    for (var i = 0; activite.nodes[i]; i++) {
      if ( activite.nodes[i].id === nodeId){
        window.alert(`clicked node ${i} name ${nodeId}`);
        this.setState( this.node={node: -1});
        this.setState(this.node={node: i})
      }
    }
  };



  render() {

    const { node } = this.node;
    const { openActivite } = this.stateActivite;
    const { openEntite } = this.stateEntite;
    const { openLien } = this.stateLien;




    return (
        <div className="App">



          <div className="row">
            <div className="col s4 m4 l4">
              <div><DemoTree/></div>
            </div>


            <div className="col s6 m6 l6">
              <div className="graphe" style={{height: '95vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
                <header className="App-header">                                                     {/* ici le graph, il gére tout le drag and drop, le déssin des liens ect*/}

                  <Graph
                      id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
                      data={activite}
                      config={myConfig}
                      onClickNode={this.onClickNode}
                      onRightClickNode={onRightClickNode}
                      onClickGraph={onClickGraph}
                      onClickLink={onClickLink}
                      onRightClickLink={onRightClickLink}
                      onMouseOverNode={onMouseOverNode}
                      onMouseOutNode={onMouseOutNode}
                      onMouseOverLink={onMouseOverLink}
                      onMouseOutLink={onMouseOutLink}
                  />
                </header>
              </div>
              <div className="row">
                <div className="col s2.5 m2.5 l2.5 ">
                  <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalActivite}>Nouvelle Activite</button>
                  <div className="modal modal-fixed-footer">
                    <Modal open={openActivite} onClose={this.onCloseModalActivite}>
                      <CreateActivite/>
                    </Modal>
                  </div>
                </div>

                <div className="col s2.5 m2.5 l2.5 ">
                  <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalEntite}>Nouvelle Entite</button>
                  <div className="modal modal-fixed-footer">
                    <Modal open={openEntite} onClose={this.onCloseModalEntite}>
                      <CreateEntite/>
                    </Modal>
                  </div>

                </div>


              <div className="new-entite">
                <button className="waves-effect waves-light btn modal-trigger" onClick={this.onOpenModalLien}>Nouveau lien</button>
                <div className="modal modal-fixed-footer">
                  <Modal open={openLien} onClose={this.onCloseModalLien}>
                    <SelectTest/>
                  </Modal>
                </div>
              </div>

            </div>
            </div>



            <div className="col s4 m4 l4">
              <div className="section box" style={{height: '30vh', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                <ListEntity activite={activite}/>
              </div>
              <div className="section box" style={{height: '55vh', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>
                <Description activite={activite} node={node}  />
              </div>
            </div>



            </div>

          </div>



    );
  }
}

export default App;


//supprimerLien = (id) =>{
//     for (var i = 0; this.activite.links[i]; i++){                        /*permet de supprimer un lien, puisque tout est en "dur" cela fera planter le site*/
//       if (this.activite.links[i].source === id || this.activite.links[i].target === id){
//         delete this.activite.links[i];
//         console.log(this.activite.links[i].target);
//
//       }
//     };
