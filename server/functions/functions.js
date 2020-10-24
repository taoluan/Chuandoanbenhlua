module.exports={
    map_sysptom: (arr_trieuchung)=>{
        let str = ""
        arr_trieuchung.map((x,y)=>{
                if(arr_trieuchung[y+1] != undefined){
                    str += `regex(str(?cmt), "${x}", "i") || `
                 }else{
                    str +=`regex(str(?cmt), "${x}", "i")`
                 } 
             })
        return str
    }
    ,
    filter_extraction:(arr_data)=>{
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
                    console.log(vt + " : " +element.trieuchung_moi.value+" // hinh "+element.hinh.value + "// ( "+element.tenbenh.value+" )")
                    }else{
                        console.log(vt + " : " +element.trieuchung_moi.value+ " ( "+element.tenbenh.value+" )")
                    }
                }
                }
            });
        });
        console.log(trieuchung_moi)
        console.log(rs)
    }
}