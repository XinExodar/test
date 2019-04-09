export const activite = {                                                  /* la 'base de donnée' en local*/
    nodes: [{ id: 'commencement', description:"activite1", type:"activite"}, { id: 'addition',description:"activite2" ,type:"activite"}, { id: 'soustraction', description:"activite3", type:"activite" }],
    links: [{ source: 'commencement', target: 'addition' },{ source: 'addition', target: 'soustraction' }],
    listEntity: [{id: "Excalipoor", description:"a replica of a legendary weapon", type:"Objet"}],
};