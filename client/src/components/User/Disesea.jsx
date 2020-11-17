import React from 'react'
import { MDBView,MDBMask,MDBContainer } from 'mdbreact';
import Header from '../UI/Header/Header'
import { useHistory ,useLocation ,useParams} from 'react-router-dom';
const Disesea = () =>{
    const Params = useParams();
    console.log(Params.benh);
    return(
        <>
        <Header url={false}/>
        <main>
        <MDBContainer className="text-center my-5">
        <p align="justify">eniam, id est laborum.</p>
        </MDBContainer>
        </main>
        </>
    )
}
export default Disesea;