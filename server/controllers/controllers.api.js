const functions = require('../functions/functions')
const graphDBEndpoint = require('../graphDB/ontology')
module.exports = {
    chuandoan: async(req,res)=>{
        try {
            let trieuchung_input = await functions.map_sysptom(req.body.data_input) 
            let rs_trieutung_new = await graphDBEndpoint.query(
                `
                SELECT DISTINCT  ?ten_trieuchung_moi ?uri_trieuchungmoi ?img ?vi_tri
                WHERE {
                ?uri_benh data:hasSymptom ?uri_trieuchung.
    			?uri_trieuchung rdfs:comment ?ten_trieuchung.
                ?uri_benh rdfs:comment ?ten_benh.
                ?annotation_1 owl:annotatedSource ?uri_benh;
		  					owl:annotatedTarget  ?uri_trieuchung;
         					data:DiseaseSite ?vitri.
    			OPTIONAL {?annotation data:Image ?hinh.}
                FILTER  (${trieuchung_input}).
                ?uri_benh data:hasSymptom ?uri_trieuchungmoi.
                ?uri_trieuchungmoi rdfs:comment ?ten_trieuchung_moi.
    			?annotation_2 owl:annotatedSource ?uri_benh;
		  					owl:annotatedTarget  ?uri_trieuchungmoi;
         					data:DiseaseSite ?vi_tri.
    			OPTIONAL {?annotation_2 data:Image ?img.}
    			
                }orderby ?vi_tri
                `)
            let resut = await functions.handling_chuandoan(rs_trieutung_new.results.bindings)
            //let resut_count_benh = await functions.handling_count_benh(count_benh.results.bindings)
            //let resut_possibility = await functions.handling_possibility(resut_count_benh,rs_trieutung_new.results.bindings)
            res.send(resut)
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
            let trieuchung_input = await functions.map_sysptom(req.body.data_input) 
            let count_benh_all = await graphDBEndpoint.query(
            `
            SELECT DISTINCT ?ten_benh ?uri_benh ( COUNT( DISTINCT ?uri_trieuchung_all) AS ?so_trieuchung )
            WHERE {
            ?uri_benh data:hasSymptom ?uri_trieuchung .
            ?annotation owl:annotatedSource ?uri_benh;
		  					owl:annotatedTarget  ?uri_trieuchung;
         					data:DiseaseSite ?vitri.
    		OPTIONAL {?annotation data:Image ?hinh.}
            FILTER  (${trieuchung_input}).
            ?uri_trieuchung_all data:isSymptomOf ?uri_benh.
            ?uri_benh rdfs:comment ?ten_benh.
            }
            group by ?ten_benh ?uri_benh
            order by desc(?so_trieuchung)
            `)

       // let resut_count_benh = await functions.handling_count_benh(count_benh_all.results.bindings)
        let result_tyle = await functions.count_benh_mac(trieuchung_input,count_benh_all.results.bindings)
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
    },
    thongketheoloaibenh:async(req,res)=>{
        try {
            let thongketheoloaibenh = await graphDBEndpoint.query(
                `
                select DISTINCT ?uri_benh ?ten_benh ( COUNT (DISTINCT ?uri_loaibenh) AS ?so_benh ) 
                where { 
                    ?uri_benh rdfs:subClassOf data:Bệnh.
                    ?uri_loaibenh rdf:type ?uri_benh.
                    ?uri_benh rdfs:comment ?ten_benh
                }
                group by ?uri_benh ?ten_benh
                `
            )
            res.send(thongketheoloaibenh.results.bindings)
        } catch (error) {
            
        }
    },
    thongketheokhuvuc:async(req,res)=>{
        try {
            let thongketheokhuvuc = await graphDBEndpoint.query(
                `
                select  DISTINCT ?ten_khuvuc ?uri_khuvuc ?ten_loaibenh ?thuocloaibenh   ( COUNT ( ?thuocloaibenh) AS ?so_benh ) 
                where { 
                    ?uri_khuvuc rdf:type data:Khu_Vực.
                    ?uri_benh data:inArea ?uri_khuvuc;
                            rdf:type ?thuocloaibenh.
                    FILTER(?thuocloaibenh != owl:NamedIndividual && ?thuocloaibenh != data:Bệnh).
                    ?uri_khuvuc rdfs:comment ?ten_khuvuc.
                    ?thuocloaibenh rdfs:comment ?ten_loaibenh
                }
                group by ?ten_khuvuc ?uri_khuvuc ?ten_loaibenh ?thuocloaibenh
                `
            )
            let results = await functions.handling_thongketheokhuvuc(thongketheokhuvuc.results.bindings)
            res.send(results)
        } catch (error) {
            
        }
    }
}