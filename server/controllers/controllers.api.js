const functions = require('../functions/functions')
const graphDBEndpoint = require('../graphDB/ontology')
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
                OPTIONAL { ?annotation owl:annotatedSource ?x;
                            owl:annotatedTarget ?q;
                            data:Image ?hinh}
                }
            
                `)
            //let resut = await functions.filter_extraction(rs_trieutung_new.results.bindings)
            //let resut_count_benh = await functions.handling_count_benh(count_benh.results.bindings)
            //let resut_possibility = await functions.handling_possibility(resut_count_benh,rs_trieutung_new.results.bindings)
            console.log(rs_trieutung_new.results.bindings)
            res.send(rs_trieutung_new.results.bindings)
        }catch(err){
            console.log(err)
        }
    },
    benh: async(req,res)=>{
        try {
            let uri_benh = req.body.uri_benh
            let rs_data_benh = await graphDBEndpoint.query(
            `
            select ?data ?rs where { 
                <${uri_benh}> ?p ?rs .
                ?p rdfs:comment ?data.
                {?p a owl:DatatypeProperty .}
                UNION 
                {?p a owl:AnnotationProperty .}
            } limit 100 
        
            `)
        res.send(rs_data_benh.results.bindings)
        } catch (error) {
            
        }
        
    },
    thongke: async(req,res)=>{
        try {
            let trieuchung_input = await functions.map_sysptom(req.body.trieuchung) 
            let count_benh = await graphDBEndpoint.query(
            `
            SELECT DISTINCT ?tenbenh ?y ( COUNT( DISTINCT ?a) AS ?HowMany )
            WHERE {
            ?x data:hasSymptom ?y .
            ?y rdfs:comment ?trieuchung_input.
            ?x rdfs:comment ?tenbenh
            FILTER  (${trieuchung_input}).
            ?a data:isSymptomOf ?b.
            FILTER (?b = ?x)
            }
            group by ?tenbenh ?y
            order by ?tenbenh
            `)
        let resut_count_benh = await functions.handling_count_benh(count_benh.results.bindings)
        //let resut_possibility = await functions.handling_possibility(resut_count_benh,rs_trieutung_new.results.bindings)
            //console.log(count_benh.results.bindings) 
        let result_benh = await functions.get_data_benh(trieuchung_input,resut_count_benh)
        } catch (error) {
            console.log(error) 
        }
       
    }
}