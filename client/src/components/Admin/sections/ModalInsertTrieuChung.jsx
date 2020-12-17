import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBInput,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Button } from 'antd';
import TextField from '@material-ui/core/TextField';
import ShowListImage from './ShowListImage'
import diseseaApi from '../../../api/diseseaApi';
import { lightGreen } from '@material-ui/core/colors';
const ModalInsertTrieuChung = (props) => {
    const [insertloading, setinsertloading] = useState(false);
    const [data, setdata] = useState({
        trieuchung : null,
        vitri: null,
    });
    const handleInsertTT = async() => {
        if(data.trieuchung && data.vitri){
            let insertTT = await diseseaApi.insertTrieuChungNew(data)
            setinsertloading(true)
            setTimeout(() => {
                setinsertloading(false)
                insertTT && props.evInsert()
            }, 3000);
        }else{
            alert('no no')
        }
    }
    const Vitri = [
        {title :"Bẹ lá" ,uri: "data:Bẹ_lá"},
        {title :"Bông" ,uri: "data:Bông"},
        {title :"Lá" ,uri: "data:Lá"},
        {title :"Chóp lá" ,uri: "data:Chóp_lá"},
        {title :"Chồi" ,uri: "data:Chồi"},
        {title :"Cổ Bông" ,uri: "data:Cổ_bông"},
        {title :"Hạt" ,uri: "data:Hạt"},
        {title :"Mô" ,uri: "data:Mô"},
        {title :"Phiến lá" ,uri: "data:Phiến_lá"},
        {title :"Quần thể" ,uri: "data:Quần_thể"},
        {title :"Bẹ lá" ,uri: "data:Rễ"},
        {title :"Thân" ,uri: "data:Thân"},
    ]
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
                                <th className="text-center" style={{width:'70%'}}>Triệu chứng</th>
                                <th className="text-center">Vị trí</th>
                            </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                                <tr>
                                    <td className="align-middle ">
                                    <MDBInput  label="Triệu chứng mới" onChange={(e)=>setdata({...data, trieuchung: e.target.value})}/>
                                    </td>
                                    <td className="align-middle ">  
                                    <Autocomplete
                                        id="disabled-options-demo"
                                        options={Vitri}
                                        getOptionLabel={(option) => option.title}
                                        onChange={(e,value)=>setdata({...data,vitri: value.uri})}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Vị trí" variant="outlined" />
                                        )}
                                    />    
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
                <Button type="primary" size="large" loading={insertloading} onClick={() => handleInsertTT()}>
                    Thêm triệu chứng
                </Button>
                <MDBBtn color="secondary" onClick={props.evInsert}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
}
export default ModalInsertTrieuChung