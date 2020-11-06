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
            let resut = await functions.filter_extraction(rs_trieutung_new.results.bindings)
            //let resut_count_benh = await functions.handling_count_benh(count_benh.results.bindings)
            //let resut_possibility = await functions.handling_possibility(resut_count_benh,rs_trieutung_new.results.bindings)
            console.log(resut)
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
            let count_benh_all = await graphDBEndpoint.query(
            `
            SELECT DISTINCT ?tenbenh ( COUNT( DISTINCT ?a) AS ?HowMany )
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
        let resut_count_benh = await functions.handling_count_benh(count_benh_all.results.bindings)
        let result_tyle = await functions.count_benh_mac(trieuchung_input,resut_count_benh)
        res.send(result_tyle)
        } catch (error) {
            console.log(error) 
        }
       
    },
    tracuu:async(req,res)=>{
        try {
            let data = {
                khuvuc: req.body.khuvuc,
                giaidoan:req.body.giaidoan,
                vumua: req.body.vumua,
                giong: req.body.giong
            }
            let tra_cuu = await graphDBEndpoint.query(
                `
                SELECT DISTINCT ?tenbenh  ?uri_benh ?hinh ?mota ?giongkhangbenh
                WHERE {
                ?uri_benh data:diseaseSeason ?uri_Season ;
                        data:inArea ?uri_Area;
                        data:diseaseStage ?uri_State;
                FILTER (?uri_Season = data:${data.vumua} && ?uri_Area = data:${data.khuvuc} && ?uri_State = data:${data.giaidoan} ).
                ?uri_benh rdfs:comment ?tenbenh;
                        data:Image ?hinh;
                        data:Describe ?mota.
                OPTIONAL {?uri_benh data:hasResistantVarieties ?uri_giong ; bind( if(?uri_giong = data:${data.giong},"Khang benh","Khang benh") as ?giongkhangbenh )}
                }
                `)
            let results =await functions.handling_tracuu(tra_cuu.results.bindings)
            res.send(results)
        } catch (error) {
            
        }
        
        
    },
    timkiem:async(req,res)=>{
        try {
            let trieuchung = req.body.trieuchung
            let timkiem = await graphDBEndpoint.query(
                `
                select DISTINCT ?ten_trieuchung ?uri_trieuchung where { 
                    ?x data:hasSymptom ?uri_trieuchung.
                    ?uri_trieuchung rdfs:comment ?ten_trieuchung
                    FILTER (regex(str(?ten_trieuchung),"${trieuchung}","i"))
                }
                `)
            res.send(timkiem.results.bindings)
        } catch (error) {
            
        }
    }
}