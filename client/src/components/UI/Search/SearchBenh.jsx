/* eslint-disable no-use-before-define */
import React, {useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { MDBBtn,MDBContainer, MDBCol } from 'mdbreact';
import Icon from '../UndrawDesigner/IconSVG'
import { useHistory ,useLocation } from 'react-router-dom';
import diseseaApi from '../../../api/diseseaApi'
import {message } from 'antd';

export default function SearchBenh() {
    const [textSearch, setTextSearch] = useState()
    let location = useLocation();
    let history = useHistory();
    const [data,setData] = useState([])
    const checkSearch = ()=>{
        if(textSearch){
                history.push("/benh/"+textSearch)
                //window.location.reload();
            }else{
                message.config({
                    top: 80,
                    duration: 2,
                    maxCount: 3,
                    rtl: true,
                    prefixCls: 'ant-message',
                  });
                message.error('Vui lòng nhập thông tin');
            }
      }
    useEffect(() => {
        const fetchAllTrieuChung = async() =>{
            const respose = await diseseaApi.getAllBenh()
            setData(respose)
        }
        fetchAllTrieuChung()
    }, [])
    if(data.length >0){
    return (
        <>
            <MDBCol md="9" sm="12" size="12" >
                <Autocomplete
                id="highlights-demo"
                options={data}
                getOptionLabel={(option) => option.ten_trieuchung}
                onChange={(e,value)=>{value && setTextSearch(value.ten_trieuchung)}}
                renderInput={(params) => (
                    <TextField {...params} label="Nhập triệu chứng trên lúa ?" variant="outlined" margin="normal" />
                )}
                renderOption={(option, { inputValue }) => {
                    const matches = match(option.ten_trieuchung, inputValue);
                    const parts = parse(option.ten_trieuchung, matches);

                    return (
                    <div>
                        {parts.map((part, index) => (
                        <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                            {part.text}
                        </span>
                        ))}
                    </div>
                    );
                }}
                />
            </MDBCol>
            <MDBCol  md ="2" sm="12" size="12" className="d-flex align-items-center pr-0 mt-1 justify-content-start justify-content-center"> 
                <MDBBtn tag="a" size="md" floating="true" className="teal lighten-3 z-depth-0 d-flex justify-content-center" onClick={checkSearch} >
                    <Icon.SearchIcon/>
                </MDBBtn>
            </MDBCol>
        </>
    );
    }else{
        return <></>
    }
}
