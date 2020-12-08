import React,{useEffect,useState} from 'react';
import {Image as ImageCloud} from 'cloudinary-react';
import ButtonLoading from './ButtonLoading'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import AutoComplete from './AutoComplete'
const TableMap = (props) => {
    const [update, setupdate] = useState({
        newTrieuchung : null,
        newVitri: null,
        trieuchung: props.item.ten_trieuchung,
        vitri: props.item.vitri
    });
    const [loadings, setloadings] = useState(false);
    const enterLoading = () => {
      if(update.newTrieuchung !== null && update.newVitri !== null){
        console.log(update)
        setloadings(true)
        setTimeout(() => {
        setloadings(false)
        }, 3000);
        };
    }
    return(
        <tr>
            <td className="align-middle">{props.i+1}</td>
            <td className="align-middle">{props.item.ten_trieuchung}</td>
            <td className="align-middle"><AutoComplete option="trieuchung" callOnChangeTT={(value)=>{setupdate({...update,newTrieuchung:value})}}/></td>
            <td className="align-middle">{props.item.vitri}</td>
            <td className="align-middle"><AutoComplete callOnChangeVT={(value)=>{setupdate({...update,newVitri:value})}}/></td>
            <td className="align-middle">{props.item.hinhanh !== "" 
            ? <ImageCloud cloudName="taoluanby" publicId={props.item.hinhanh} width="100" height="100" crop="scale"/>
            : 'Không có'
            }
            </td>
            <td className="align-middle" ></td>
            <td className="align-middle">  
                <Button type="primary" loading={loadings} onClick={() => enterLoading()}>
                    Cập nhật
                </Button>
            </td>
        </tr>
    )
}
export default TableMap