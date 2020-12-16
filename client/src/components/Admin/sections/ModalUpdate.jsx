import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBInput,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import ShowListImage from './ShowListImage'
import diseseaApi from '../../../api/diseseaApi';
const ModalUpdate = (props) => {
    const [insertloading, setinsertloading] = useState(false);
    const [option,setoption] = useState({})
    const [insert, setinsert] = useState(false);
    const [deletes, setdeletes] = useState(false);
    const [data, setdata] = useState({});
    const [gionglua, setgionglua] = useState([]);
    const khuVuc = [
        { title: 'Đồng bằng Sông Cửu Long', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Cửu_Long' },
        { title: 'Đồng bằng Sông Hồng', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Hồng' },
        { title: 'Đồng bằng Duyên Hải Miền Trung', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Duyên_Hải_Miền_Trung' },
        ]
    const vuMua = [
        { title: 'Hè Thu', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Hè_Thu' },
        { title: 'Đông Xuân', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đông_Xuân' },
        { title: 'Mùa', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Mùa' },
    ]
    const giaiDoan = [
        { title: 'Mạ', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_mạ' },
        { title: 'Đẻ Nhánh', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_đẻ_nhánh' },
        { title: 'Làm Đồng', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_làm_đồng' },
        { title: 'Trổ Chính', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_trổ-chín' },
    ]
    const fetchGiong = async ()=>{
        const respose = await diseseaApi.getGiongLua()
        let newArr = []
        respose.map(item=>{
            newArr.push({title : item.title.value , uri: item.uri.value})
        })
        setgionglua(newArr)
    }
    useEffect(() => {
        fetchGiong()
        props.option.option === 'data:Giống_Lúa' 
            ? setoption({title: 'Giống lúa', uri: props.option.option , data:gionglua , event : 'data:hasResistantVarieties' }) 
            :  props.option.option === 'data:Khu_Vực' 
                ? setoption({title: 'Khu Vực', uri: props.option.option , data:khuVuc , event : 'data:inArea' })
                : props.option.option === 'data:Giai_Đoạn' 
                    ? setoption({title: 'Giai Đoạn', uri: props.option.option , data:giaiDoan, event : 'data:diseaseStage'})
                    :props.option.option === 'data:Vụ_Mùa'  
                        && setoption({title: 'Vụ Mùa', uri: props.option.option , data:vuMua, event : 'data:diseaseSeason'})
    }, [props.option]);
    const handleInsert =async (e) => {
        setinsert(true)
        let insert = await diseseaApi.insertOption(e)
        setTimeout(() => {
            setinsert(false)
            insert && props.evInsertTT()
        }, 3000);
    }
    const handleDelete =async (e) => {
        setdeletes(true)
        let deletes = await diseseaApi.deleteOption(e)
        setTimeout(() => {
            setdeletes(false)
            deletes && props.evInsertTT()
        }, 3000);
    }
    
    if(props.option){
    return(
        <MDBModal isOpen={props.insertShowTT} toggle={props.evInsertTT} fullHeight position="bottom">
            <MDBModalHeader className="text-center" toggle={props.evInsertTT}>Cặp nhật {option.title}</MDBModalHeader>
            <MDBModalBody className="m-0 p-0">
            <MDBRow className=" d-flex justify-content-center">
                <MDBCol md="6">
                    <MDBCard className="z-depth-0 m-0 p-0">
                        <MDBCardBody className="p-0 ">
                        <MDBTable striped>
                            <MDBTableHead color="dark" >
                            <tr>
                                <th className="text-center">Thay đổi</th>
                                <th className="text-center" style={{width:'40%'}}>Thêm/Xóa</th>
                            </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td className="align-middle " >
                                        <Autocomplete
                                            id="disabled-options-demo"
                                            options={option.data}
                                            getOptionLabel={(option) => option.title}
                                            onChange={(e,value)=>setdata({data: value.uri})}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Cặp nhật" variant="outlined" />
                                            )}
                                        />
                                    </td>
                                    <td  className="d-flex justify-content-center">
                                        <Button type="primary" className="mr-2" size="large" loading={insert} onClick={() => handleInsert({benh: props.benh, event: option.event  , option : option.uri , value: data})}>
                                            Thêm bệnh
                                        </Button>
                                        <Button type="primary" danger size="large" loading={deletes} onClick={() => handleDelete({benh: props.benh,event: option.event,option :  option.uri , value: data})}>
                                            Xóa bệnh
                                        </Button>
                                    </td>
                                </tr>
                    
                            </MDBTableBody>
                        </MDBTable >
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
                
                <MDBBtn color="secondary" onClick={props.evInsertTT}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
    }else{
        return(
            <></>
        )
    }
}
export default ModalUpdate