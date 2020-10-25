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
let functions = require('../functions/functions')
module.exports = {
    chuandoan: async(req,res)=>{
        try {
            let trieuchung_input = await functions.map_sysptom(req.body.trieuchung) 
            let rs_trieutung_new = await graphDBEndpoint.query(
                `
                SELECT DISTINCT  ?tenbenh ?trieuchung_moi ?vitri ?hinh ?trieuchung_input
                WHERE {
                ?x data:hasSymptom ?y .
                ?y rdfs:comment ?trieuchung_input.
                ?x rdfs:comment ?tenbenh
                FILTER  (${trieuchung_input}).
                ?x data:hasSymptom ?q.
                ?q rdfs:comment ?trieuchung_moi.
                ?q rdf:type ?t.
                ?t rdfs:comment ?vitri.
                OPTIONAL {?annotation owl:annotatedSource ?x;
                            owl:annotatedTarget ?q;
                            rdfs:comment ?hinh}
                }
            
                `)
            let count_benh = await graphDBEndpoint.query(
                `
                SELECT DISTINCT ?tenbenh  ( COUNT( DISTINCT ?a) AS ?HowMany )
                WHERE {
                ?x data:hasSymptom ?y .
                ?y rdfs:comment ?trieuchung_input.
                ?x rdfs:comment ?tenbenh
                FILTER  (${trieuchung_input}).
                ?a data:isSymptomOf ?b.
                FILTER (?b = ?x)
                }
                group by ?tenbenh
                order by ?tenbenh
                `)
            //let resut = await functions.filter_extraction(rs_trieutung_new.results.bindings)
            let resut_count_benh = await functions.handling_count_benh(count_benh.results.bindings)
            let resut_possibility = await functions.handling_possibility(resut_count_benh,rs_trieutung_new.results.bindings)
            //console.log(resut_count_benh)
            res.send(rs_trieutung_new.results.bindings)
        }catch(err){
            console.log(err)
        }
    }
}