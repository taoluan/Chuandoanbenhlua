import React,{useEffect,useState} from 'react';
import {Image as ImageCloud} from 'cloudinary-react';
import diseseaApi from '../../../api/diseseaApi'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import AutoComplete from './AutoComplete'
const TableMap = (props) => {
    const [update, setupdate] = useState({
        newTrieuchung : null,
        newVitri: null,
        uriTrieuchungCu: props.item.uri_trieuchung,
        vitri: props.item.vitri,
        benh: props.item.uri_benh
    });
    const [loadings, setloadings] = useState(false);
    const [deletes, setdeletes] = useState(false);
    const updateTrieuChung = async (data)=>{
        try {
            const respose = await diseseaApi.updateTrieuChung(data)
            return true
        } catch (error) {
            return false
        }
    }
    const handleDelete = async() => {
        let updateStatus =await diseseaApi.deleteTrieuChung(update)
        setdeletes(true)
        setTimeout(() => {
            setdeletes(false)
            updateStatus && props.evOnClick({ten_benh : props.tenbenh})
        }, 3000);
    }
    
    const handleUpdate =async () => {
      if(update.newTrieuchung === null && update.newVitri === null){
           alert('nono')
        }else{
            let updateStatus =await diseseaApi.updateTrieuChung(update)
            setloadings(true)
            setTimeout(() => {
                setloadings(false)
                updateStatus && props.evOnClick({ten_benh : props.tenbenh})
            }, 3000);
        }
    }
    return(
        <tr>
            <td className="align-middle">{props.i+1}</td>
            <td className="align-middle">{props.item.ten_trieuchung}</td>
            <td className="align-middle"><AutoComplete option="trieuchung" callOnChangeTT={(value)=>{value && setupdate({...update,newTrieuchung:value}) }}/></td>
            <td className="align-middle">{props.item.vitri}</td>
            <td className="align-middle"><AutoComplete callOnChangeVT={(value)=>{setupdate({...update,newVitri:value})}}/></td>
            <td className="align-middle">{props.item.hinhanh !== "" 
            ? <ImageCloud cloudName="taoluanby" publicId={props.item.hinhanh} width="100" height="100" crop="scale"/>
            : 'Không có'
            }
            </td>
            <td className="align-middle" ></td>
            <td className="align-middle">  
                <Button type="primary" loading={loadings} onClick={() => handleUpdate()}>
                    Cập nhật
                </Button>
                <Button
                    className="ml-1 bg-warning"
                    loading={deletes}
                    onClick={() => handleDelete()}
                >
                    <img src={process.env.PUBLIC_URL + '/img/delete.png'} width="20" height="20" alt=""/>
                </Button>
            </td>
        </tr>
    )
}
export default TableMap