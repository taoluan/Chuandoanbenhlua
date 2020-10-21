const {EnapsoGraphDBClient} = require("@innotrade/enapso-graphdb-client");
const GRAPHDB_BASE_URL = process.env.GRAPHDB_BASE_URL,
    GRAPHDB_REPOSITORY = process.env.GRAPHDB_REPOSITORY,
    GRAPHDB_USERNAME = process.env.GRAPHDB_USERNAME,
    GRAPHDB_PASSWORD = process.env.GRAPHDB_PASSWORD,
    GRAPHDB_CONTEXT_TEST = process.env.GRAPHDB_CONTEXT_TEST;
const DEFAULT_PREFIXES = [
    EnapsoGraphDBClient.PREFIX_OWL,
    EnapsoGraphDBClient.PREFIX_RDF,
    EnapsoGraphDBClient.PREFIX_RDFS,
    EnapsoGraphDBClient.PREFIX_XSD,
    EnapsoGraphDBClient.PREFIX_PROTONS,
    {
        prefix: "data",
        iri: process.env.GRAPHDB_IRI_DATA,
    }
];
let graphDBEndpoint = new EnapsoGraphDBClient.Endpoint({
    baseURL: GRAPHDB_BASE_URL,
    repository: GRAPHDB_REPOSITORY,
    prefixes: DEFAULT_PREFIXES
});
module.exports = {
    chuandoan: async(req,res)=>{
        try {
            let trieuchung = req.body.trieuchung
            console.log( trieuchung)
            let rs = await graphDBEndpoint.query(
                `
                SELECT DISTINCT  ?tenbenh ?trieuchung_moi ?vitri  
                WHERE {
                ?x data:hasSymptom ?y .
                ?y rdfs:comment ?cmt.
                ?x rdfs:comment ?tenbenh
                FILTER  (`+
               
                `regex(str(?cmt), "${trieuchung}", "i")`
                +`).
                ?x data:hasSymptom ?q.
                ?q rdfs:comment ?trieuchung_moi.
                ?q rdf:type ?t.
                ?t rdfs:comment ?vitri
                }
                `       )
            //console.log(rs.results.bindings)
           // res.send(rs.results.bindings)
        }catch(err){
            console.log(err)
        }
    }
}