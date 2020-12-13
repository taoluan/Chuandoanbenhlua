import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBInput,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import ShowListImage from './ShowListImage'
import diseseaApi from '../../../api/diseseaApi';
const ModalInsert = (props) => {
    const [insertloading, setinsertloading] = useState(false);
    const [data, setdata] = useState({
        tenbenh : null,
        loaibenh: null,
        mota: null
    });
    const loaibenh = [
        { title: 'Sâu ', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Sâu_Hại' },
        { title: 'Nấm', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Nấm' },
        { title: 'Vi khuẩn', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Virus' },
        { title: 'Virus ', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Vi_Khuẩn' },
        { title: 'Tuyến trùng', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Tuyến_Trùng' },
        { title: 'Thiếu chất dinh dưỡng', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Thiếu_Chất_Dinh_Dưỡng' },
        
    ]
    const handleInsertBenh = async() => {
        if(data.tenbenh && data.loaibenh && data.mota){
            let insertBenh = await diseseaApi.insertBenh(data)
            setinsertloading(true)
            setTimeout(() => {
                setinsertloading(false)
                insertBenh && props.evInsert
            }, 3000);
        }else{
            alert('no no')
        }
       
    }
    
    return(
        <MDBModal isOpen={props.insertShow} toggle={props.evInsert} fullHeight position="bottom">
            <MDBModalHeader className="text-center" toggle={props.evInsert}>Thêm Bệnh Mới</MDBModalHeader>
            <MDBModalBody className="m-0 p-0">
            <MDBRow className=" d-flex justify-content-center">
                <MDBCol md="8">
                    <MDBCard className="z-depth-0 m-0 p-0">
                        <MDBCardBody className="p-0 ">
                        <MDBTable striped>
                            <MDBTableHead color="dark" >
                            <tr>
                                <th className="text-center" style={{width:'30%'}}>Tên bệnh</th>
                                <th className="text-center" style={{width:'30%'}}>Loại bệnh</th>
                                <th className="text-center">Mô tả bệnh</th>
                            </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td >
                                    <MDBInput  label="Tên bệnh" onChange={(e)=>setdata({...data, tenbenh: e.target.value})}/>
                                    </td>
                                    <td >
                                        <Autocomplete
                                            id="disabled-options-demo"
                                            className="mt-3"
                                            options={loaibenh}
                                            getOptionLabel={(option) => option.title}
                                            onChange={(e,value)=>setdata({...data, loaibenh: value.uri})}
                                            renderInput={(params) => (
                                                <TextField {...params} label="Thêm mô tả" variant="outlined" />
                                            )}
                                        />
                                    </td>
                                    <td > <MDBInput type="textarea" label="Mô tả bệnh" rows="5" onChange={(e)=>setdata({...data, mota: e.target.value})} /></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable >
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
                <Button type="primary" size="large" loading={insertloading} onClick={() => handleInsertBenh()}>
                    Thêm bệnh
                </Button>
                <MDBBtn color="secondary" onClick={props.evInsert}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
}
export default ModalInsert