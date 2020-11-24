const e = require('express')
const graphDBEndpoint = require('../graphDB/ontology')
module.exports={
    map_sysptom: (arr_trieuchung)=>{
        return new Promise ((res,rej)=>{
            let str = ""
            arr_trieuchung.map((x,y)=>{
                    if(arr_trieuchung[y+1] != undefined){
                        (x.hinhanh)
                        ? str += ` ( (?uri_trieuchung = <${x.uri_trieuchung}>) && (?vitri ="${x.vitri}")  && (?hinh = "${x.hinhanh}") )|| `
                        : str += ` ( (?uri_trieuchung = <${x.uri_trieuchung}>) && (?vitri ="${x.vitri}") ) || `
                    }else{
                        (x.hinhanh)
                        ? str += ` ( (?uri_trieuchung = <${x.uri_trieuchung}>) && (?vitri ="${x.vitri}") && (?hinh = "${x.hinhanh}") ) `
                        : str += ` ( (?uri_trieuchung = <${x.uri_trieuchung}>) && (?vitri ="${x.vitri}") )`
                    } 
                   
                    /*
                    if(arr_trieuchung[y+1] != undefined){
                        if(x.hinh){
                         str += `( regex(str(?ten_trieuchung), "${x}", "i") && (?vitri =${x.vitri}) && (?hinh = ${x.hinhanh}) )|| ` }
                        else {str += `( regex(str(?ten_trieuchung), "${x}", "i") && (?vitri =${x.vitri}))|| `}
                    }else{
                        if(x.hinh){
                        str += `( regex(str(?ten_trieuchung), "${x}", "i") && (?vitri =${x.vitri}) && (?hinh = ${x.hinhanh}) ) `}
                        else{ str += `( regex(str(?ten_trieuchung), "${x}", "i") && (?vitri =${x.vitri}))`}
                    } 
                     */
            }) 
            res(str)
        })
    },
    handling_chuandoan:(arr_data)=>{
        return new Promise ((res,rej)=>{
            let trieuchung_moi = [],vi_tri = [],trieuchung_vitri =[] , results=[] , temp
            arr_data.map(x=>{
                (!module.exports.check_vitri(x.vi_tri.value,results))
                && results.push({vi_tri:x.vi_tri.value ,data :[] })
            })
           /*  for(let i = 0 ; i < results.length ; i++){
                for(let y = 0 ; y < arr_data.length ; y++){
                    if( results[i].vi_tri == arr_data[y].vi_tri.value){
                        if(results[i].data.length === 0){
                            if(arr_data[y].img){
                                results[i].data.push({ten_trieuchung: arr_data[y].ten_trieuchung_moi.value, uri_trieuchung: arr_data[y].uri_trieuchungmoi.value, img: [arr_data[y].img.value] })
                            }
                            else{
                                results[i].data.push({ten_trieuchung: arr_data[y].ten_trieuchung_moi.value, uri_trieuchung: arr_data[y].uri_trieuchungmoi.value})
                            }
                        }else{
                                let check = module.exports.check_ten(arr_data[y].ten_trieuchung_moi.value,results[i].data)
                                if(check.rs){
                                    if(arr_data[y].img){
                                        results[i].data[check.vt].img.push(arr_data[y].img.value)
                                    }
                                }else{
                                    if(arr_data[y].img){
                                        results[i].data.push({ten_trieuchung: arr_data[y].ten_trieuchung_moi.value, uri_trieuchung: arr_data[y].uri_trieuchungmoi.value, img: [arr_data[y].img.value] })
                                    }
                                    else{
                                        results[i].data.push({ten_trieuchung: arr_data[y].ten_trieuchung_moi.value, uri_trieuchung: arr_data[y].uri_trieuchungmoi.value})
                                    }
                                }
                        }
                    }
                }
            }*/
            results.map(x=>{ 
                arr_data.map( y=>{
                    if( x.vi_tri == y.vi_tri.value){
                        if(x.data.length === 0){
                            (y.img)
                                && x.data.push({ten_trieuchung: y.ten_trieuchung_moi.value, uri_trieuchung: y.uri_trieuchungmoi.value, img: [y.img.value] })
                                || x.data.push({ten_trieuchung: y.ten_trieuchung_moi.value, uri_trieuchung: y.uri_trieuchungmoi.value})
                        }else{
                                let check =  module.exports.check_ten(y.ten_trieuchung_moi.value,x.data) 
                                if(check.rs){
                                     (y.img) 
                                            && x.data[check.vt].img.push(y.img.value) 
                                            || x.data[check.vt].img.push(" ") 
                                }else{
                                     (y.img)
                                            && x.data.push({ten_trieuchung: y.ten_trieuchung_moi.value, uri_trieuchung: y.uri_trieuchungmoi.value, img: [y.img.value] })
                                            || x.data.push({ten_trieuchung: y.ten_trieuchung_moi.value, uri_trieuchung: y.uri_trieuchungmoi.value})
                                }
                        } 
                    }
    
                })
            })
              res(results)  
        })
    },
    handling_count_benh: (arr_benh)=>{
        return new Promise (async (res,rej)=>{
                let resut = []
                arr_benh.map(rs=>{
                    resut.push({tenbenh: rs.ten_benh.value ,uri_benh: rs.uri_benh.value, so_trieuchung: Number(rs.HowMany.value)})
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
                SELECT DISTINCT  ?ten_benh ?uri_benh ( COUNT( ?uri_trieuchung) AS ?so_trieuchung )
                WHERE {
                ?uri_benh data:hasSymptom ?uri_trieuchung .
                ?annotation owl:annotatedSource ?uri_benh;
                                 owl:annotatedTarget  ?uri_trieuchung;
                                data:DiseaseSite ?vitri.
                OPTIONAL {?annotation data:Image ?hinh.}
                FILTER  (${arr_trieuchung}).     
                ?uri_benh rdfs:comment ?ten_benh.           
                }
                   groupby ?ten_benh ?uri_benh
                   orderby DESC(?so_trieuchung)
                   limit 8
               `)
               let results = []
               rs_count.results.bindings.map(x=>{
                   count_benh_all.map(y=>{
                        (x.ten_benh.value == y.ten_benh.value) 
                        && results.push({tenbenh: x.ten_benh.value ,uri_benh: x.uri_benh.value ,tyle: Math.round((x.so_trieuchung.value / y.so_trieuchung.value )*100)})
                        
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
       
    },
    handling_thongketheokhuvuc: (data)=>{
        return new Promise((res,rej)=>{
            let results = [{ten_khuvuc : "Đồng bằng Duyên Hải Miền Trung" , thongke: []},
                            {ten_khuvuc : "Đồng bằng Sông Cửu Long" , thongke: []},
                            {ten_khuvuc : "Đồng bằng Sông Hồng" , thongke: []}
                            ]
            results.map(x=>{
                data.map(y=>{
                    (y.ten_khuvuc.value == x.ten_khuvuc) 
                    && x.thongke.push({
                                        ten_loaibenh: y.ten_loaibenh.value,
                                        uri_loaibenh: y.thuocloaibenh.value,
                                        sobenh: y.so_benh.value
                                        })
                })
            })
            res(results)
        })
    },
    handling_thongke:(data)=>{
        return new Promise((res,rej)=>{
            let label = [] 
            let dataset = []
            data.map(x=>{
                label.push(x.ten_loaibenh.value)
                dataset.push(Number(x.sobenh.value))
            })
            res({dataset,label})
        })
    },
    handling_thongketheokhuvuc_result:(data)=>{
        return new Promise((res,rej)=>{
            let label = [] 
            let dataset = []
            data.map(x=>{
                label.push(x.ten_loaibenh)
                dataset.push(Number(x.sobenh))
            })
            res({dataset,label})
        })
    },
    check_vitri: (obj, list)=> {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i].vi_tri === obj) {
                return true;
            }
        }
        return false;
    },
    check_ten: (obj, list)=> {
        let i;
        for (i = 0; i < list.length; i++) {
            if (list[i].ten_trieuchung === obj) {
                return {rs : true , vt: i};
            }
        }
        return {rs : false , vt: i};;
    },
    handling_dsbenh: (data)=>{
        return new Promise((res,rej)=>{
            let dataset =[ { loaibenh: "Sâu" , benh:[]},
                            { loaibenh: "Nắm" , benh:[]},
                            { loaibenh: "Thiếu Chất Dinh Dưỡng" , benh:[]},
                            { loaibenh: "Vi Khuẩn" , benh:[]},
                            { loaibenh: "Virus" , benh:[]},
                            { loaibenh: "Tuyến Trùng" , benh:[]}]
            dataset.map(x=>{
                data.map(y=>{
                    (x.loaibenh == y.ten_loaibenh.value) && x.benh.push({ten_benh : y.ten_benh.value , uri_tenbenh: y.uri_benh.value})
                })
            })
            res(dataset)
        })
    }
}