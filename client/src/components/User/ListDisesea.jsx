import { MDBContainer, MDBRow ,MDBCol} from 'mdbreact';
import React,{useEffect} from 'react'
import {useParams} from "react-router-dom";
import Disesea from './Disesea'
const DiseseaTag = () =>{
    const Params = useParams()
    useEffect(() => {
        document.querySelector('#benh').scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return(
        <div className="rgba-blue-slight">
        <Disesea/>
        <main className=" smooth-scroll pb-4 " id="benh" style={{height:"1000px"}}>
            <MDBContainer className="bg-white mt-2 pb-4 z-depth-1" style={{height:"1000px"}}>
                <MDBRow>
                <header className=" align-self-md-center w-100" style={{backgroundColor:"#00C851"}}>
                    <p className="title-7 pb-0 mb-0">Thông Tin Bệnh </p>
                </header>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12" className="d-flex justify-content-center">
                        <MDBRow>
                        <MDBCol sm="12" className="d-flex justify-content-center">
                            <p className="title mt-4 mb-0">BỆNH BẠC LÁ</p>
                        </MDBCol>
                        <MDBCol sm="12" className="d-flex justify-content-center">
                            <p className="title-8 mt-0 mb-2">Tên khoa học : <span className="title-text-small">Tiki taka</span></p>
                        </MDBCol>
                        <MDBCol sm="12" className="d-flex justify-content-center">
                            <span className="line-2 mt-0 pt-0"></span>
                        </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
        </main>
        </div>
    )
}
export default DiseseaTag;