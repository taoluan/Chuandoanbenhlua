import BreadcrumSection from './sections/BreadcrumSection';
import React,{useEffect,useState} from 'react';
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon, MDBContainer } from 'mdbreact';
import TableDiseseaSection from './sections/TableDiseseaSection'
const DataDiseseaPage = () => {
    return(
        <MDBContainer fluid>
            <TableDiseseaSection/>
        </MDBContainer>
        
    )
}
export default DataDiseseaPage