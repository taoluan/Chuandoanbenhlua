const graphDBEndpoint = require('../graphDB/ontology')
module.exports={
    map_sysptom: (arr_trieuchung)=>{
        return new Promise ((res,rej)=>{
            let str = ""
            arr_trieuchung.map((x,y)=>{
                    if(arr_trieuchung[y+1] != undefined){
                        str += `regex(str(?trieuchung_input), "${x}", "i") || `
                    }else{
                        str +=`regex(str(?trieuchung_input), "${x}", "i")`
                    } 
            })
            res(str)
        })
    },
    filter_extraction:(arr_data)=>{
        return new Promise ((res,rej)=>{
            let trieuchung_moi = [],vi_tri = [],trieuchung_vitri =[], rs= [] , temp=[]
            arr_data.forEach(element => {
                if(!vi_tri.includes(element.vitri.value)){
                    vi_tri.push(element.vitri.value)
                }
            });
            console.log(vi_tri)
            vi_tri.forEach(vt => {
                arr_data.forEach(element => {
                    if(vt == element.vitri.value){
                    if(!trieuchung_moi.includes(element.trieuchung_moi.value)){
                        trieuchung_moi.push(element.trieuchung_moi.value)
                        trieuchung_vitri[element.trieuchung_moi.value] = {vitri:vt}
                        if(element.hinh){
                        //console.log(vt + " : " +element.trieuchung_moi.value+" // hinh "+element.hinh.value + "// ( "+element.tenbenh.value+" )")
                        }else{
                            //console.log(vt + " : " +element.trieuchung_moi.value+ " ( "+element.tenbenh.value+" )")
                        }
                    }
                    }
                });
            });
        })
        //console.log(rs)
    },
    handling_count_benh: (arr_benh)=>{
        return new Promise (async (res,rej)=>{
                let resut = []
                arr_benh.map(rs=>{
                    resut.push({tenbenh: rs.tenbenh.value , so_trieuchung: Number(rs.HowMany.value)})
                })
                res(resut)
        }) 
    },
    handling_possibility: (arr_data_total,arr_data)=>{
        return new Promise((res,rej)=>{
            let trieuchung_input = []
            arr_data.map(rs =>{
                if(!trieuchung_input.includes(rs.trieuchung_input.value)){
                    trieuchung_input.push(rs.trieuchung_input.value)
                }
            })
            arr_data_total.map(x=>{
                arr_data.map(y=>{
                    
                })
            })
            console.log(arr_data_total)
            let arr= [{tenbenh: '1233213' , co_trieuchung : [123,321,123]},{tenbenh: 'abv' , co_trieuchung : [123,321,123]}]
           // arr.tenbenh.co_trieuchung.push(456)
            //console.log(arr)
            /*arr.map(x=>{
                if(x.tenbenh == 'abv'){
                    x = x.co_trieuchung.push('abc')
                }
            })*/
            
        })
    },
    count_benh_mac: (arr_trieuchung,count_benh_all)=>{
        return new Promise(async (res,rej)=>{
               let rs_count = await graphDBEndpoint.query(
               `
               SELECT DISTINCT  ?tenbenh  ( COUNT( ?uri_trieuchung) AS ?HowMany )
                            WHERE {
                            ?uri_benh data:hasSymptom ?uri_trieuchung .
                            ?uri_trieuchung rdfs:comment ?trieuchung_input.
                            ?uri_benh rdfs:comment ?tenbenh.
                            OPTIONAL {	?annotation owl:annotatedSource ?uri_benh;
                                        owl:annotatedTarget ?uri_trieuchung;
                                        data:Image ?hinh}
                            FILTER  (${arr_trieuchung}).
                }
                groupby ?tenbenh 
                orderby DESC(?HowMany)
                limit 8
               `)
               let result_count_benh_mac = []
               let results = []
               rs_count.results.bindings.map(rs=>{
                    result_count_benh_mac.push({tenbenh: rs.tenbenh.value , so_trieuchung: Number(rs.HowMany.value)})
               })
               result_count_benh_mac.map(x=>{
                   count_benh_all.map(y=>{
                        (x.tenbenh == y.tenbenh) 
                        && results.push({tenbenh: x.tenbenh , tyle: Math.round((x.so_trieuchung/y.so_trieuchung)*100)})
                        
                   })
               })
               results.sort((a,b)=> b.tyle - a.tyle )
              res(results)
           })
    },
    get_data_benh: (trieuchung_input,arr_benh)=>{
        return new Promise(async (res,rej)=>{
         /*   let rs_trieutung_benh = await graphDBEndpoint.query(
            `
            SELECT DISTINCT  ?tenbenh ?ten_trieuchung  ?hinh ?vitri
            WHERE {
            ?uri_benh data:hasSymptom ?y .
            ?y rdfs:comment ?trieuchung_input.
            ?uri_benh rdfs:comment ?tenbenh
            FILTER  (${trieuchung_input}).
			?uri_trieuchung data:isSymptomOf ?b.
    		FILTER (?b = ?uri_benh)
    		?uri_trieuchung rdfs:comment ?ten_trieuchung
    		OPTIONAL {	?annotation owl:annotatedSource ?uri_benh;
		  				owl:annotatedTarget ?uri_trieuchung;
		  				data:Image ?hinh}
            } orderby ?tenbenh
            `)
        let results = []
        arr_benh.map(x=>{
            rs_trieutung_benh.results.bindings.map(y=>{
                 if( y.tenbenh.value == x.tenbenh){
                    (y.hinh) 
                    ? x.co_trieuchung.push({ten_trieuchung: y.ten_trieuchung.value , img:y.hinh.value})
                    : x.co_trieuchung.push({ten_trieuchung: y.ten_trieuchung.value})
                }   
            })
        })*/
        res(arr_benh)
        })
        
    },
    handling_tracuu:(arr_benh)=>{
        return new Promise((res,rej)=>{
            let results = [] , img
            arr_benh.map(x=>{
                img = x.hinh.value.substring(0,x.hinh.value.indexOf(','))
                if(x.giongkhangbenh){
                 results.push({tenbenh:x.tenbenh.value, uri_benh: x.uri_benh.value,mota: x.mota.value,hinh:img,khangbenh: x.giongkhangbenh.value})}
                else{results.push({tenbenh:x.tenbenh.value, uri_benh: x.uri_benh.value,hinh: img,mota: x.mota.value})}
            }) 
            res(results)
        })
       
    }
}