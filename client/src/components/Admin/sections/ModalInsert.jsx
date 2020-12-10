import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import AutoComplete from './AutoComplete'

const ModalInsert = (props) => {
    const [showmodalUpdate, setShowModalUpdate] = useState(props.show);
    console.log(props.show)
    return(
        <MDBModal isOpen={showmodalUpdate} toggle={()=>{setShowModalUpdate(!showmodalUpdate)}} fullHeight position="bottom">
            <MDBModalHeader className="text-center" toggle={()=>{setShowModalUpdate(!showmodalUpdate)}}>Thêm triệu chứng mới cho {props.benh} </MDBModalHeader>
            <MDBModalBody className="m-0 p-0">
            <MDBRow className=" d-flex justify-content-center">
            <MDBCol md="8" className="m-0 p-0">
                <MDBCard className="z-depth-0 m-0 p-0">
                    <MDBCardBody className="pt-0 pb-0">
                    <MDBTable scrollY maxHeight="500px">
                        <MDBTableHead color="dark">
                        <tr>
                            <th>#</th>
                            <th>Triệu chứng</th>
                            <th>Vị trí</th>
                            <th>Hình ảnh</th>
                        </tr>
                        </MDBTableHead>
                        <MDBTableBody>  

                        </MDBTableBody>
                    </MDBTable>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            </MDBRow>
            </MDBModalBody>
            <MDBModalFooter>
            <MDBBtn color="secondary" onClick={()=>{setShowModalUpdate(!showmodalUpdate)}}>Close</MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    )
}
export default ModalInsert