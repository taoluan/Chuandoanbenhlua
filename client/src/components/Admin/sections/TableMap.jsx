import React,{useEffect,useState} from 'react';
import {Image as ImageCloud} from 'cloudinary-react';
import diseseaApi from '../../../api/diseseaApi'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import AutoComplete from './AutoComplete'
import UploadFile from './UploadFile'
const TableMap = (props) => {
    const [update, setupdate] = useState({
        newTrieuchung : null,
        newVitri: null,
        uriTrieuchungCu: props.item.uri_trieuchung,
        vitri: props.item.vitri,
        benh: props.item.uri_benh,
        hinhanh: props.item.hinhanh,
        newHinhanh: null
    });
    const [loadings, setloadings] = useState(false);
    const [deletes, setdeletes] = useState(false);
    const changeImg = (value) => {
        setupdate({
          ...update,
          newHinhanh: value
        })
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
      if(update.newTrieuchung === null && update.newVitri === null && update.newHinhanh === null){
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
            <td className="align-middle" style={{width:"25%"}}>{props.item.ten_trieuchung}</td>
            <td className="align-middle" style={{width:"10%"}}><AutoComplete option="trieuchung" callOnChangeTT={(value)=>{value && setupdate({...update,newTrieuchung:value}) }}/></td>
            <td className="align-middle">{props.item.vitri}</td>
            <td className="align-middle"  style={{width:"10%"}}><AutoComplete callOnChangeVT={(value)=>{setupdate({...update,newVitri:value})}}/></td>
            <td className="align-middle">{props.item.hinhanh !== "" 
            ? <ImageCloud cloudName="taoluanby" publicId={props.item.hinhanh} width="100" height="100" crop="scale"/>
            : 'Không có'
            }
            </td>
            <td className="align-middle" ><UploadFile img={changeImg}/></td>
            <td className="align-middle align-self-center">  
                <Button type="primary" loading={loadings} onClick={() => handleUpdate()}>
                    Cập nhật
                </Button>
                <Button
                    className="ml-1 bg-warning mt-1"
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