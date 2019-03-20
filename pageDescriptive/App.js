import React, { Component } from 'react';
import './App.css';
import { Graph } from 'react-d3-graph';
import './App.css'
import Description from './description'

// graph payload (with minimalist structure)
const activite = {                                                  /* la 'base de donnée' en local*/
  nodes: [{ id: 'Harry', description:"blyat"}, { id: 'Sally' }, { id: 'Alice' }],
  links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' },{ source: 'Harry', target: 'Harry' }]
};

// the graph configuration, you only need to pass down properties
// that you want to override, otherwise default ones will be used
const myConfig = {                                  /*la configuration des liens et des nodes (formes/taille/ect*/
  nodeHighlightBehavior: true,
  height:2000,
  width:2000,
  directed: true,
  node: {
    color: 'lightgreen',
    size: 120,
    highlightStrokeColor: 'blue',
    svg: "",
    symbolType: "diamond",
    directed: true,
  },
  link: {
    highlightColor: 'lightblue',

  }
};




// graph event callbacks
const onClickGraph = function() {
  window.alert(`Clicked the graph background`);
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

  state ={                /*un test pour la description*/
    node: -1,
  };

  ajouterLien = (id) =>{
    activite.links.push({source: 'Alice', target: id})       /*permet d'ajouter un lien*/
  };

  onClickNode = (nodeId) => {                                   /*il n'était pas ici au début, je l'ai déplacé pour essaye de faire la description sur la droite, mais il me faut une vrais base de donné pour*/
    for (var i = 0; activite.nodes[i]; i++) {
      if ( activite.nodes[i].id === nodeId){
        window.alert(`clicked node ${i} name ${nodeId}`);
        this.setState(this.state ={node: i})
      }
    }
  };

  supprimerLien = (id) =>{
    for (var i = 0; activite.links[i]; i++){                        /*permet de supprimer un lien, puisque tout est en "dur" cela fera planter le site*/
      if (activite.links[i].source === id || activite.links[i].target === id){
        delete activite.links[i];
        console.log(activite.links[i].target);

      }
    };


  };

  render() {

    const { node } = this.state;

    return (
      <div className="App">
        <div className="row">
          <div className="col s3 m3 l3">
            <div className="card z-depth-0 project-summary">
              <div className="card-content grey-text text-darken-3">                                          {/* ici j'ai juste rentré la description de Harry en dur*/}
                <span className="card-title ">{activite.nodes[0].id}</span>
              </div>
              <div className="card-content grey-text text-darken-3">
                <span className="card-title ">{activite.nodes[0].description}</span>
              </div>
              <div className="card-action">
                <ul>
                  <li>
                    <div className="col s3 m3 l3">
                      <span className="card-title ">{activite.links[0].target}</span>
                    </div>

                    <div className="col s3 m3 l3">                                              {/* ici les liens qu'entretien Harry il faudra tous les mettres : qu'il soit sources ou target*/}
                      <button className="waves-effect waves-light btn modal-trigger" onClick={() => {this.supprimerLien('Harry')}}>X</button>
                    </div>
                  </li>
                  <li>
                    <div className="col s3 m3 l3">
                    <span className="card-title ">{activite.links[1].target}</span>
                    </div>

                      <div className="col s3 m3 l3">
                      <button className="waves-effect waves-light btn modal-trigger" onClick={() => {this.supprimerLien('Harry')}}>X</button>
                    </div>
                  </li>
                  <li>
                    <div className="col s3 m3 l3">
                    <span className="card-title ">{activite.links[2].target}</span>
                    </div>

                      <div className="col s3 m3 l3">
                      <button className="waves-effect waves-light btn modal-trigger" onClick={() => {this.supprimerLien('Harry')}}>X</button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="divider"></div>
              <button className="waves-effect waves-light btn modal-trigger" onClick={() => {this.ajouterLien('Sally')}}>ajouter lien</button>

            </div>
          </div>
          <div className="col s6 m6 l6">
            <div style={{height: '95vh', width: '100vh', position: 'relative', overflow: 'auto', padding: '0'}}>
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
          </div>
          <div className="col s3 m3 l3">
            <div className="section box" style={{height: '95vh', width: '400px', position: 'relative', overflow: 'auto', padding: '0'}}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

//<Description node={node} activite={activite} />     /*ne fonctionne pas*/
