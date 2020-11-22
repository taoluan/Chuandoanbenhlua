const axiosClient  = require("./axiosClient")
import axios from 'axios';
const diseseaApi ={
    thongkeLoaiBenh: (params)=>{
        const url = `${process.env.REACT_APP_API_URL}/thongketheoloaibenh`
        return axiosClient.get(url,{params})
    }
}
export default diseseaApi