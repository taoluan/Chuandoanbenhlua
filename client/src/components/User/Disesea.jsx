import React from 'react'
import { MDBView,MDBMask,MDBContainer,MDBRow,MDBCol } from 'mdbreact';
import Header from '../UI/Header/Header'
import SearchBenh from '../UI/Search/SearchBenh'
const Disesea = () =>{
    return(
        <>
            <Header url={true}/>
            <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1351.png'} className="pb-0 mb-0">
                <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
                <MDBContainer style={{backgroundColor:"white" , opacity: 0.9 }} className="w-50 rounded mb-0 shadow-box-example z-depth-3 " >
                <h3 className="text-dark pt-4">Chuẩn đoán bệnh theo triệu chứng</h3>
                    <MDBRow className="d-flex justify-content-center pb-5">
                    <SearchBenh/>
                    </MDBRow>
                </MDBContainer>
                </MDBMask>
            </MDBView>
        </>
    )
}
export default Disesea;