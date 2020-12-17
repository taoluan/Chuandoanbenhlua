import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBInput,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import ShowListImage from './ShowListImage'
import diseseaApi from '../../../api/diseseaApi';
const ModalInsertGiong = (props) => {
    const [insertloading, setinsertloading] = useState(false);
    const [data, setdata] = useState({
        tengiong : null,
        mota: null,
    });
    const handleInsertGiong = async() => {
        if(data.tengiong && data.mota){
            let insertGiong = await diseseaApi.insertGiong(data)
            setinsertloading(true)
            setTimeout(() => {
                setinsertloading(false)
                insertGiong && props.evInsert()
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
                <MDBCol md="6">
                    <MDBCard className="z-depth-0 m-0 p-0">
                        <MDBCardBody className="p-0 ">
                        <MDBTable striped>
                            <MDBTableHead color="dark" >
                            <tr>
                                <th className="text-center" style={{width:'30%'}}>Loại giống</th>
                                <th className="text-center">Mô tả</th>
                            </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td >
                                    <MDBInput  label="Loại giống" onChange={(e)=>setdata({...data, tengiong: e.target.value})}/>
                                    </td>
                                    <td > <MDBInput type="textarea" label="Mô tả giống" rows="5" onChange={(e)=>setdata({...data, mota: e.target.value})} /></td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable >
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
                <Button type="primary" size="large" loading={insertloading} onClick={() => handleInsertGiong()}>
                    Thêm giống
                </Button>
                <MDBBtn color="secondary" onClick={props.evInsert}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
}
export default ModalInsertGiong