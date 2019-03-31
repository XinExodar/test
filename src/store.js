export const activite = {                                                  /* la 'base de donnée' en local*/
    nodes: [{ id: 'Harry', description:"blyat", type:"activite"}, { id: 'Sally',description:"blyat" ,type:"activite"}, { id: 'Alice', description:"blyat", type:"activite" }],
    links: [{ source: 'Harry', target: 'Sally' }, { source: 'Harry', target: 'Alice' },{ source: 'Harry', target: 'Harry' }],
    listEntity: [{id: "Excalipoor", description:"a replica of a legendary weapon", type:"Objet"}]
};