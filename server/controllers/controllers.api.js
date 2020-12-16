const functions = require('../functions/functions')
const graphDBEndpoint = require('../graphDB/ontology')
const cloudinary = require('../cloundinary/config')
const e = require('express')
module.exports = {
    chuandoan: async(req,res)=>{
        try {
            let datadef = req.body.datadefault
            let trieuchung_input = await functions.map_sysptom(req.body.data)
            let rs_trieutung_new = await graphDBEndpoint.query(
                `
                SELECT DISTINCT  ?ten_trieuchung_moi ?uri_trieuchungmoi ?img ?vi_tri
                WHERE {
                ?uri_benh data:hasSymptom ?uri_trieuchung.
                ?uri_benh data:diseaseStage <${datadef.giaidoan}>.
                ?uri_benh data:inArea <${datadef.khuvuc}>.
                ?uri_benh data:diseaseSeason <${datadef.vumua}>.
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
            let result = await functions.handling_chuandoan(rs_trieutung_new.results.bindings)
            console.log(rs_trieutung_new.results.bindings)
            //let resut_count_benh = await functions.handling_count_benh(count_benh.results.bindings)
            //let resut_possibility = await functions.handling_possibility(resut_count_benh,rs_trieutung_new.results.bindings)
            res.send(result)
        }catch(err){
            res.status(400).send(err.message)
        }
    },
    benh: async(req,res)=>{
        try {
            let uri_benh = req.query.uri_benh
            let rs_data_benh = await graphDBEndpoint.query(
            `
            select ?data ?value ?hinhanh ?mota ?ten_benh ?p where { 
                ?x rdf:type data:Bệnh;
                    rdfs:label ?label;
                    data:Describe ?mota;
                    rdfs:comment ?ten_benh.
                FILTER( regex(?label, "${uri_benh}","i")).
              OPTIONAL{ 
                        ?x rdf:type data:Bệnh.
                        ?x ?p ?value .
                        ?p a owl:DatatypeProperty .
                        ?p rdfs:comment ?data
                    }
                OPTIONAL{
                    ?x data:Image ?hinhanh.
                }
            }
        
            `)
        const result = await functions.handling_benh(rs_data_benh.results.bindings)
        res.send(result)
        } catch (error) {
            console.log(error)
        }
        
    },
    thongke: async(req,res)=>{
        try {
            
            let datadef = req.body.datadefault
            let trieuchung_input = await functions.map_sysptom(req.body.data) 
            let count_benh_all = await graphDBEndpoint.query(
            `
            SELECT DISTINCT ?ten_benh ?uri_benh ( COUNT( DISTINCT ?uri_trieuchung_all) AS ?so_trieuchung )
            WHERE {
                ?uri_benh data:hasSymptom ?uri_trieuchung.
                ?uri_benh data:diseaseStage <${datadef.giaidoan}>.
                ?uri_benh data:inArea <${datadef.khuvuc}>.
                ?uri_benh data:diseaseSeason <${datadef.vumua}>.
                ?uri_trieuchung rdfs:comment ?ten_trieuchung.
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
                SELECT DISTINCT ?tenbenh ?ten_loai  ?hinh ?giongkhangbenh ?uri_benh ?ten_benh_label
                WHERE {
                ?uri_benh data:diseaseSeason ?uri_Season ;
                        data:inArea ?uri_Area;
                        data:diseaseStage ?uri_State;
                FILTER (?uri_Season = <${data.vumua}> && ?uri_Area = <${data.khuvuc}> && ?uri_State = <${data.giaidoan}> ).
                ?uri_benh   rdfs:label ?tenbenh;
                            data:Image ?hinh;
                            rdfs:comment ?ten_benh_label.
                OPTIONAL {?uri_benh data:hasResistantVarieties ?uri_giong ; bind( if(?uri_giong = <${data.giong}>,"Khang benh","Khang benh") as ?giongkhangbenh )}
                ?uri_benh rdf:type ?thuocloaibenh.
                ?thuocloaibenh rdfs:label ?ten_loai 
                }order by ?ten_loai
                `)
            let results =await functions.handling_tracuu(tra_cuu.results.bindings)
            
            res.send(results)
        } catch (error) {
            
        }
        
        
    },
    timkiem:async(req,res)=>{
        try {
            let timkiem = await graphDBEndpoint.query(
                `
                select DISTINCT ?ten_trieuchung  ?vitri ?uri_trieuchung
                WHERE { 
                    ?uri_trieuchung rdf:type data:Triệu_Chứng;
                                    rdfs:comment ?ten_trieuchung.
                    ?uri_benh data:hasSymptom ?uri_trieuchung.
                    ?annotation owl:annotatedSource ?uri_benh;
                                owl:annotatedTarget  ?uri_trieuchung;
                                data:DiseaseSite ?vitri.
                    }
                `)
            let result =await functions.handling_timkiem(timkiem.results.bindings)
            res.send(result)
        } catch (error) {
            
        }
    },
    thongketheoloaibenh:async(req,res)=>{
        try {
            let thongketheoloaibenh = await graphDBEndpoint.query(
                `
                select DISTINCT ?ten_loaibenh ( COUNT (DISTINCT ?uri_loaibenh) AS ?sobenh ) 
                where { 
                    ?uri_benh rdfs:subClassOf data:Bệnh.
                    ?uri_loaibenh rdf:type ?uri_benh.
                    ?uri_benh rdfs:label ?ten_loaibenh
                }
                group by ?uri_benh ?ten_loaibenh
                `
            )
            let result =await functions.handling_thongke(thongketheoloaibenh.results.bindings)
            res.send(result)
        } catch (error) {
            
        }
    },
    thongketheokhuvuc:async(req,res)=>{
        try {
            let thongketheokhuvuc = await graphDBEndpoint.query(
                `
                select  DISTINCT ?ten_khuvuc ?ten_loaibenh ?thuocloaibenh   ( COUNT ( ?thuocloaibenh) AS ?so_benh ) 
                where { 
                    ?uri_khuvuc rdf:type data:Khu_Vực.
                    ?uri_benh data:inArea ?uri_khuvuc;
                            rdf:type ?thuocloaibenh.
                    FILTER(?thuocloaibenh != owl:NamedIndividual && ?thuocloaibenh != data:Bệnh).
                    ?uri_khuvuc rdfs:label ?ten_khuvuc.
                    ?thuocloaibenh rdfs:label ?ten_loaibenh
                }
                group by ?ten_khuvuc ?uri_khuvuc ?ten_loaibenh ?thuocloaibenh
                `
            )
            let results = await functions.handling_thongketheokhuvuc(thongketheokhuvuc.results.bindings)
            let dbdhmt = await functions.handling_thongketheokhuvuc_result(results[0].thongke)
            let dbscl = await functions.handling_thongketheokhuvuc_result(results[1].thongke)
            let dbsh = await functions.handling_thongketheokhuvuc_result(results[2].thongke)
            res.send({dbdhmt : dbdhmt , dbscl:dbscl , dbsh:dbsh})
        } catch (error) {
            
        }
    },
    dscacbenh:async(req,res)=>{
        try {
            let loaibenh = req.query.loaibenh
            let pages = req.query.page
            const item_pages  = 8
            let offset = (pages-1)*item_pages
            let limit = item_pages*pages
            let data = await graphDBEndpoint.query(
                `
                select  ?ten_benh ?image ?mota
                WHERE { ?uri_benh rdf:type data:${loaibenh}.
                        ?uri_benh rdfs:label ?ten_benh;
                                   data:Describe ?mota.
                OPTIONAL{
                        ?uri_benh data:Image ?image
                    }
                }LIMIT ${limit} OFFSET ${offset}
                `
            )
            res.json(data.results.bindings)
        } catch (err) {
            console.log(err)
        }
    },
    dsbenhNoType:async(req,res)=>{
        try {
            let data = await graphDBEndpoint.query(
                `
                select  ?ten_benh  ?uri_benh ?ten_loaibenh
                WHERE { 
                    ?uri_loaibenh rdfs:subClassOf data:Bệnh;
                                rdfs:label ?ten_loaibenh.
                    ?uri_benh rdf:type ?uri_loaibenh;
                            rdfs:label ?ten_benh.
                    
                }orderby ?uri_loaibenh
                `
            )
            let result = await functions.handling_dsbenh(data.results.bindings)
            res.json(result)
        } catch (err) {
            console.log(err)
        }
    },
    getTrieuChung:async(req,res)=>{
        try {
            let uri_benh = req.query.uri_benh
            let data = await graphDBEndpoint.query(
                `
                select DISTINCT ?ten_trieuchung  ?uri_trieuchung ?vitri ?hinhanh
                WHERE { 
                    ?uri_trieuchung data:isSymptomOf <${uri_benh}>;
                                    rdfs:comment ?ten_trieuchung.
                    ?annotation owl:annotatedSource <${uri_benh}>;
                                owl:annotatedTarget  ?uri_trieuchung;
                                data:DiseaseSite ?vitri.
                    OPTIONAL{
                        ?annotation owl:annotatedSource <${uri_benh}>;
                                    owl:annotatedTarget  ?uri_trieuchung;
                                    data:Image ?hinhanh
                    }
                }
                `
            )
            res.json(data.results.bindings)
        } catch (err) {
            console.log(err)
        }
    },
    getGiongLua:async(req,res)=>{
        try {
            let data = await graphDBEndpoint.query(
                `
                select DISTINCT ?uri ?title where { 
                    ?uri rdf:type <http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giống_Lúa>;
                          rdfs:label ?title
                }
                `
            )
            res.json(data.results.bindings)
        } catch (err) {
            console.log(err)
        }
    },
    getAlldsbenh:async(req,res)=>{
        try {
            let data = await graphDBEndpoint.query(
                `
                select  ?ten_benh  
                WHERE { 
                    ?uri_loaibenh rdfs:subClassOf data:Bệnh.
                    ?uri_benh rdf:type ?uri_loaibenh;
                            rdfs:label ?ten_benh.
                    
                }orderby ?uri_loaibenh
                `
            )
            const results =await functions.handling_dsbenhall(data.results.bindings)
            res.json(results)
        } catch (err) {
            console.log(err)
        }
    },
    getThongTinBenh:async(req,res)=>{
        try {
            let tenbenh = req.query.tenbenh
            
            let data = await graphDBEndpoint.query(
                `
                select DISTINCT  ?ten_trieuchung ?vitri ?hinh ?uri_benh ?uri_trieuchung
                    WHERE { 
                        ?uri_benh data:hasSymptom ?uri_trieuchung;
                                rdfs:label ?ten_benh.
                        FILTER(regex(?ten_benh,"${tenbenh}","i"))
                        ?uri_trieuchung rdfs:comment ?ten_trieuchung.
                        ?annotation owl:annotatedSource ?uri_benh;
                                        owl:annotatedTarget  ?uri_trieuchung;
                                        data:DiseaseSite ?vitri.
                        OPTIONAL{
                            ?annotation data:Image ?hinh
                        }
                    }
                `
            )
            const results =await functions.handling_getThongTinBenh(data.results.bindings)
            res.json(results)
        } catch (err) {
            console.log(err)
        }
    },
    getAllTrieuChung:async(req,res)=>{
        try {
            let timkiem = await graphDBEndpoint.query(
                `
                select DISTINCT ?ten_trieuchung  ?vitri ?uri_trieuchung
                WHERE { 
                    ?uri_trieuchung rdf:type data:Triệu_Chứng;
                                    rdfs:comment ?ten_trieuchung.
                    ?uri_benh data:hasSymptom ?uri_trieuchung.
                    ?annotation owl:annotatedSource ?uri_benh;
                                owl:annotatedTarget  ?uri_trieuchung;
                                data:DiseaseSite ?vitri.
                    }
                `)
            let result =await functions.handling_getalltrieuchung(timkiem.results.bindings)
            res.send(result)
        } catch (error) {
            
        }
    },
    updateTrieuChung:async(req,res)=>{
        try {
            let data = req.body
            if(data.newTrieuchung){
                const update = await graphDBEndpoint.update(
                    `
                    DELETE{
                        <${data.benh}> data:hasSymptom <${data.uriTrieuchungCu}>.
                        <${data.uriTrieuchungCu}> data:isSymptomOf  <${data.benh}>.
                        ?annotation  data:DiseaseSite "${data.vitri}"
                    }
                    WHERE { 
                        ?annotation owl:annotatedSource  <${data.benh}>;
                                 owl:annotatedProperty data:hasSymptom;
                                 owl:annotatedTarget <${data.uriTrieuchungCu}>;
                                 data:DiseaseSite "${data.vitri}".
                    };
                    INSERT DATA {
                        <${data.benh}> data:hasSymptom <${data.newTrieuchung.uri_trieuchung}>.
                        <${data.newTrieuchung.uri_trieuchung}> data:isSymptomOf  <${data.benh}>.
                        _:x rdf:type owl:Axiom .
                        _:x owl:annotatedSource  <${data.benh}> .
                        _:x owl:annotatedProperty data:hasSymptom .
                        _:x owl:annotatedTarget  <${data.newTrieuchung.uri_trieuchung}> .
                        _:x data:DiseaseSite "${data.newTrieuchung.vitri}"
                    }
                    `)
                res.status(200).send(update.success)
            }else{
                if(data.newHinhanh){
                    cloudinary.uploader.upload(
                        data.newHinhanh,
                        {folder: "LuanVan_CNTT"},
                         async (error, result) =>{
                             try {
                                let public_id =  result.public_id
                                const update = await graphDBEndpoint.update(
                                    `
                                    DELETE{
                                        <${data.benh}> data:hasSymptom <${data.uriTrieuchungCu}>.
                                        <${data.uriTrieuchungCu}> data:isSymptomOf  <${data.benh}>.
                                        ?annotation  data:Image "${data.hinhanh}";
                                                    data:DiseaseSite "${data.vitri}"
                                    }
                                    WHERE { 
                                        ?annotation owl:annotatedSource  <${data.benh}>;
                                                 owl:annotatedProperty data:hasSymptom;
                                                 owl:annotatedTarget <${data.uriTrieuchungCu}>;
                                    };
                                    INSERT DATA {
                                        <${data.benh}> data:hasSymptom <${data.uriTrieuchungCu}>.
                                        <${data.uriTrieuchungCu}> data:isSymptomOf  <${data.benh}>.
                                        _:x rdf:type owl:Axiom .
                                        _:x owl:annotatedSource  <${data.benh}> .
                                        _:x owl:annotatedProperty data:hasSymptom .
                                        _:x owl:annotatedTarget  <${data.uriTrieuchungCu}> .
                                        _:x data:DiseaseSite "${data.vitri}"
                                        _:x data:Image "${public_id}"
                                    }
                                    `)
                                res.status(200).send(update.success)
                             } catch (error) {
                                res.status(400).send(error)
                             }
                           
                        });
                }else{
                const update = await graphDBEndpoint.update(
                    `
                    DELETE{
                        ?annotation  data:DiseaseSite "${data.vitri}"
                    }
                    WHERE { 
                        ?annotation owl:annotatedSource  <${data.benh}>;
                                 owl:annotatedProperty data:hasSymptom;
                                 owl:annotatedTarget <${data.uriTrieuchungCu}>;
                                 data:DiseaseSite "${data.vitri}".
                    };
                    INSERT DATA {
                        _:x rdf:type owl:Axiom .
                        _:x owl:annotatedSource  <${data.benh}> .
                        _:x owl:annotatedProperty data:hasSymptom .
                        _:x owl:annotatedTarget  <${data.uriTrieuchungCu}> .
                        _:x data:DiseaseSite "${data.newVitri}"
                    }
                    `)
                res.status(200).send(update.success)
                }
            }
        } catch (error) {
            res.status(400).send(update.success)
        }
    },
    deleteTrieuChung:async(req,res)=>{
        try {
            let data = req.body
            if(data.hinhanh !== ''){
                const deletes_img = await graphDBEndpoint.update(
                    `
                    DELETE{
                        <${data.benh}> data:hasSymptom <${data.uriTrieuchungCu}>.
                        <${data.uriTrieuchungCu}> data:isSymptomOf  <${data.benh}>.
                        ?annotation  data:DiseaseSite "${data.vitri}"
                    }
                    WHERE { 
                        ?annotation owl:annotatedSource  <${data.benh}>;
                                 owl:annotatedProperty data:hasSymptom;
                                 owl:annotatedTarget <${data.uriTrieuchungCu}>;
                                 data:DiseaseSite "${data.vitri}";
                                 data:Image "${data.hinhanh}"
                    };
                    `)
                res.status(200).send(deletes_img.success)
            }else{
            const deletes = await graphDBEndpoint.update(
                `
                DELETE{
                    <${data.benh}> data:hasSymptom <${data.uriTrieuchungCu}>.
                    <${data.uriTrieuchungCu}> data:isSymptomOf  <${data.benh}>.
                    ?annotation  data:DiseaseSite "${data.vitri}"
                }
                WHERE { 
                    ?annotation owl:annotatedSource  <${data.benh}>;
                             owl:annotatedProperty data:hasSymptom;
                             owl:annotatedTarget <${data.uriTrieuchungCu}>;
                             data:DiseaseSite "${data.vitri}".
                             
                };
                `)
            res.status(200).send(deletes.success)
            }
        } catch (error) {
            res.status(400).send(error)
        }
    },
    insertTrieuChung:async(req,res)=>{
        try {
            let data = req.body
            let benh = await graphDBEndpoint.query(
                `
                select ?uri_benh where { 
                    ?uri_benh rdf:type <http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Bệnh>;
                         rdfs:label "${data.benh}".
                }
                `)
            let uri_benh = benh.results.bindings[0].uri_benh.value
            let insert_data = data.data
            if(data.data.value){
                cloudinary.uploader.upload(
                    data.data.value,
                    {folder: "LuanVan_CNTT"},
                     async (error, result) =>{
                         try {
                            let public_id =  result.public_id
                            const insert = await graphDBEndpoint.update(
                                `
                                INSERT DATA {
                                    <${uri_benh}> data:hasSymptom <${insert_data.newTrieuchung.uri_trieuchung}>.
                                    <${insert_data.newTrieuchung.uri_trieuchung}> data:isSymptomOf  <${uri_benh}>.
                                    _:x rdf:type owl:Axiom .
                                    _:x owl:annotatedSource  <${uri_benh}> .
                                    _:x owl:annotatedProperty data:hasSymptom .
                                    _:x owl:annotatedTarget  <${insert_data.newTrieuchung.uri_trieuchung}> .
                                    _:x data:DiseaseSite "${insert_data.newVitri}".
                                    _:x data:Image "${public_id}"
                                }
                                `)
                            res.status(200).send(insert.success)
                         } catch (error) {
                            res.status(400).send(error)
                         }
                       
                    });
            }else{
                const insert = await graphDBEndpoint.update(
                    `
                    INSERT DATA {
                        <${uri_benh}> data:hasSymptom <${insert_data.newTrieuchung.uri_trieuchung}>.
                        <${insert_data.newTrieuchung.uri_trieuchung}> data:isSymptomOf  <${uri_benh}>.
                        _:x rdf:type owl:Axiom .
                        _:x owl:annotatedSource  <${uri_benh}> .
                        _:x owl:annotatedProperty data:hasSymptom .
                        _:x owl:annotatedTarget  <${insert_data.newTrieuchung.uri_trieuchung}> .
                        _:x data:DiseaseSite "${insert_data.newVitri}".
                    }
                    `)
                res.status(200).send(insert.success)
            }
        } catch (error) {
             res.status(400).send(error)
        }
    },
    updateProperty: async (req,res)=>{
        try {
            let data = req.body
            let benh = await graphDBEndpoint.query(
                `
                select ?uri_benh where { 
                    ?uri_benh rdf:type <http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Bệnh>;
                         rdfs:label "${data.benh}".
                }
                `)
            let uri_benh = benh.results.bindings[0].uri_benh.value
            if(data.data.uri){
                let update = await graphDBEndpoint.update(
                    `
                    delete  {
                        <${uri_benh}> <${data.data.uri}> ?noidung
                    } 
                    where{
                        <${uri_benh}> <${data.data.uri}> ?noidung
                    };
                    insert data{
                        <${uri_benh}>  <${data.data.uri}> "${data.newValue}"
                    }`
                )
                res.status(200).send(update.success)
            }else{
                let update = await graphDBEndpoint.update(
                    `
                    delete data {
                        <${uri_benh}> rdfs:comment "${data.data.value}"
                    };
                    insert data{
                        <${uri_benh}> rdfs:comment "${data.newValue}"
                    }`
                )
                res.status(200).send(update.success)
            }
            
        } catch (error) {
            res.status(400).send(error)
        }
    },
    updateImage: async (req,res)=>{
        try {
            let data = req.body
            let ImgCu = data.imgCu
            let benh = await graphDBEndpoint.query(
                `
                select ?uri_benh where { 
                    ?uri_benh rdf:type <http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Bệnh>;
                         rdfs:label "${data.benh}".
                }
                `)
            let uri_benh = benh.results.bindings[0].uri_benh.value
            if(data.insertImg.length > 0 ){
                let newArr = []
                for(let i = 0 ; i < data.insertImg.length ; i++){
                    let updateImage =await cloudinary.uploader.upload(data.insertImg[i],{folder: "LuanVan_CNTT"})
                    ImgCu.push(updateImage.public_id)
                }
                let strImg = ImgCu.join()
                await graphDBEndpoint.update(
                    `
                    delete  {
                        <${uri_benh}> data:Image ?noidung
                    } 
                    where{
                        <${uri_benh}> data:Image ?noidung
                    };
                    insert data{
                        <${uri_benh}>  data:Image "${strImg}"
                    }`
                )

            }
            if(data.removeImg.length >0){
                let checkArr = functions.check_2arr(data.removeImg,data.imgCu)
                let strImgRemove = checkArr.join()
                await graphDBEndpoint.update(
                    `
                    delete  {
                        <${uri_benh}> data:Image ?noidung
                    } 
                    where{
                        <${uri_benh}> data:Image ?noidung
                    };
                    insert data{
                        <${uri_benh}>  data:Image "${strImgRemove}"
                    }`
                )
            }
            res.status(400).send(true)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    },
    getproperty: async (req,res)=>{
        try {
            let data = req.query
            let benh = await graphDBEndpoint.query(
                `
                select ?uri_benh where { 
                    ?uri_benh rdf:type <http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Bệnh>;
                         rdfs:label "${data.benh}".
                }
                `)
            let uri_benh = benh.results.bindings[0].uri_benh.value
            let getDataProperty = await graphDBEndpoint.query(
                `select ?uri ?mota
                    where { 
                        ?uri a owl:DatatypeProperty .
                        ?uri rdfs:comment ?mota.
                        FILTER NOT EXISTS{
                            <${uri_benh}> ?uri ?o .
                            ?uri a owl:DatatypeProperty .
                        }
                    } 
                `
            )
            let result =await functions.handling_getproperty(getDataProperty.results.bindings)
            res.status(200).send(result)
        } catch (error) {
            res.send.status(400).send(error)
        }
    },
    insertBenh: async (req,res)=>{
        try {
            let data  = req.body
            let uri_benh = data.tenbenh.replace(' ','_')
            let insertBenh = await graphDBEndpoint.query(
                ` insert data{ 
                    data:${uri_benh} rdf:type owl:NamedIndividual;
                                    rdf:type <${data.loaibenh}>;
                                    rdf:type data:Bệnh;
                                    rdfs:comment "Bệnh do ${data.tenbenh} gây ra";
                                    rdfs:label "${data.tenbenh}";
                                    data:Describe "${data.mota}"
                }
                `
            )
            res.status(200).send(insertBenh.success)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    insertProperty: async (req,res)=>{
        try {
            let data  = req.body
            let benh = await graphDBEndpoint.query(
                `
                select ?uri_benh where { 
                    ?uri_benh rdf:type <http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Bệnh>;
                         rdfs:label "${data.benh}".
                }
                `)
            let uri_benh = benh.results.bindings[0].uri_benh.value
            let insertProperty = await graphDBEndpoint.update(
                `
                insert data{ 
                    <${uri_benh}> <${data.data.uri}> "${data.data.noidung}"
                }
                `
            )
            res.status(200).send(insertProperty.success)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    getGiong: async(req,res)=>{
        try {
            let tenbenh = req.query.benh
            let uri_benh =await functions.getUri(tenbenh)
            let getgiong = await graphDBEndpoint.query(
                `select * where { 
                    <${uri_benh}>  data:hasResistantVarieties ?uri_giong.
                    ?uri_giong rdfs:label ?ten_giong;
                               rdfs:comment ?mota
                } `
            )
            res.status(200).send(getgiong.results.bindings)
        } catch (error) {
            res.status(400).send(err)
        }
    },
    getKhuVuc: async(req,res)=>{
        try {
                let tenbenh = req.query.benh
                let uri_benh =await functions.getUri(tenbenh)
                let getkhuvuc = await graphDBEndpoint.query(
                    `select * where { 
                        <${uri_benh}>  data:inArea ?uri_khuvuc.
                        ?uri_khuvuc rdfs:label ?ten_khuvuc;
                            
                    } `
                )
                res.status(200).send(getkhuvuc.results.bindings)
        } catch (error) {
            res.status(400).send(err)
        }
    },
    getGiaiDoan: async(req,res)=>{
        try {
            let tenbenh = req.query.benh
                let uri_benh =await functions.getUri(tenbenh)
                let getgiaidoan = await graphDBEndpoint.query(
                    `select * where { 
                        <${uri_benh}>  data:diseaseStage ?uri_giaidoan.
                        ?uri_giaidoan rdfs:label ?ten_giaidoan;
                                   rdfs:comment ?mota
                    } `
                )
                res.status(200).send(getgiaidoan.results.bindings)
        } catch (error) {
            res.status(400).send(err)
        }
    },
    getVuMua: async(req,res)=>{
        try {
            let tenbenh = req.query.benh
                let uri_benh =await functions.getUri(tenbenh)
                let getgiaidoan = await graphDBEndpoint.query(
                    `select * where { 
                        <${uri_benh}> data:diseaseSeason ?uri_vumua.
                        ?uri_vumua rdfs:label ?ten_vumua;
                    } `
                )
                res.status(200).send(getgiaidoan.results.bindings)
        } catch (error) {
            res.status(400).send(err)
        }
    },
    insertOption: async(req,res)=>{
        try {
            let data = req.body
            let uri_benh = await functions.getUri(data.benh)
            console.log(uri_benh)
            console.log(data)
            let insert =await graphDBEndpoint.update(
                `
                insert data{ 
                    <${uri_benh}> ${data.event} <${data.value.data}>
                }
                `
            )
            console.log(insert)
            res.status(200).send(insert.success)
        } catch (error) {
            res.status(400).send(error)
        }
    }
    ,
    deleteOption: async(req,res)=>{
        try {
            let data = req.body
            let uri_benh = await functions.getUri(data.benh)
            let deletes =await graphDBEndpoint.update(
                `
                delete data{ 
                    <${uri_benh}> ${data.event} <${data.value.data}>
                }
                `
            )
            res.status(200).send(deletes.success)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}