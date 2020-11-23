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
    }
}
export default diseseaApi