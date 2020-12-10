import axiosClient from './axiosClient'
const diseseaApi ={
    thongkeLoaiBenh: ()=>{
        const url = '/thongketheoloaibenh'
        return axiosClient.get(url)
    },
    thongkeLoaiBenhKhuVuc: ()=>{
        const url = '/thongketheokhuvuc'
        return axiosClient.get(url)
    },
    dsBenh: (params)=>{
        const url = '/dscacbenh'
        return axiosClient.get(url,{params})
    },
    dsBenhNoType: ()=>{
        const url = '/dscacbenhNoType'
        return axiosClient.get(url)
    },
    getTrieuChung: (params)=>{
        const url = '/gettrieuchung'
        return axiosClient.get(url,{params})
    },
    getAllTrieuChung: ()=>{
        const url = '/timkiem'
        return axiosClient.get(url)
    },
    getKetQua: (params)=>{
        const url = '/ketqua'
        return axiosClient.post(url,params)
    },
    chuandoan: (params)=>{
        const url = '/chuandoan'
        return axiosClient.post(url,params)
    },
    getGiongLua: ()=>{
        const url = '/getgionglua'
        return axiosClient.get(url)
    },
    duBao: (params)=>{
        const url = '/tracuu'
        return axiosClient.post(url,params)
    },
    getThongTinBenh: (params)=>{
        const url = '/benh'
        return axiosClient.get(url,{params})
    },
    getAllBenh: ()=>{
        const url = '/getalldsbenh'
        return axiosClient.get(url)
    },
    getTrieuChungCuaBenh: (params)=>{
        const url = '/getthongtinbenh'
        return axiosClient.get(url,{params})
    },
    getAllTrieuChungAdmin: ()=>{
        const url = '/getalltrieuchung'
        return axiosClient.get(url)
    },
    updateTrieuChung: (params)=>{
        const url = '/updatetrieuchung'
        return axiosClient.post(url,params)
    },
    deleteTrieuChung: (params)=>{
        const url = '/deletetrieuchung'
        return axiosClient.post(url,params)
    },
    insertTrieuChung: (params)=>{
        const url = '/inserttrieuchung'
        return axiosClient.post(url,params)
    },
}
export default diseseaApi