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
    }
    ,
    filter_extraction:(arr_data)=>{
        return new Promise ((res,rej)=>{
            let trieuchung_moi = [],vi_tri = [],trieuchung_vitri =[], rs= [] , temp=[]
            arr_data.forEach(element => {
                if(!vi_tri.includes(element.vitri.value)){
                    vi_tri.push(element.vitri.value)
                }
            });
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
    handling_count_benh:(arr_benh)=>{
        return new Promise ((res,rej)=>{
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
    }
}