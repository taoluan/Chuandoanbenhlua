import axiosClient from './axiosClient'
import axiosAdmin from './axiosAdmin'
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
    updateProperty: (params)=>{
        const url = '/updateproperty'
        return axiosClient.post(url,params)
    },
    insertProperty: (params)=>{
        const url = '/insertproperty'
        return axiosClient.post(url,params)
    },
    updateImage: (params)=>{
        const url = '/updateimage'
        return axiosClient.post(url,params)
    },
    getProperty: (params)=>{
        const url = '/getproperty'
        return axiosClient.get(url,{params})
    },
    insertBenh: (params)=>{
        const url = '/insertbenh'
        return axiosClient.post(url,params)
    },
    getGiong: (params)=>{
        const url = '/getgiong'
        return axiosClient.get(url,{params})
    },
    getKhuVuc: (params)=>{
        const url = '/getkhuvuc'
        return axiosClient.get(url,{params})
    },
    getGiaiDoan: (params)=>{
        const url = '/getgiaidoan'
        return axiosClient.get(url,{params})
    },
    getVuMua: (params)=>{
        const url = '/getvumua'
        return axiosClient.get(url,{params})
    },
    deleteOption: (params)=>{
        const url = '/deleteoption'
        return axiosClient.post(url,params)
    },
    insertOption: (params)=>{
        const url = '/insertoption'
        return axiosClient.post(url,params)
    },
    insertGiong: (params)=>{
        const url = '/insertgiong'
        return axiosClient.post(url,params)
    },
    insertTrieuChungNew: (params)=>{
        const url = '/inserttrieuchungnew'
        return axiosClient.post(url,params)
    },
    deleteTC: (params)=>{
        const url = '/deletetc'
        return axiosClient.post(url,params)
    },
    deleteG: (params)=>{
        const url = '/deleteg'
        return axiosClient.post(url,params)
    },
    checkPhone: (params)=>{
        const url = '/login'
        return axiosClient.post(url,params)
    },
    checkOTP: (params)=>{
        const url = '/checkotp'
        return axiosClient.post(url,params)
    },
    verifyToken: (params)=>{
        const url = '/veryfitoken'
        return axiosAdmin.post(url,params)
    },

}
export default diseseaApi