import BreadcrumSection from './sections/BreadcrumSection';
import React,{useEffect,useState} from 'react';
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon, MDBContainer } from 'mdbreact';
import TableDiseseaSection from './sections/TableDiseseaSection'
import { useHistory } from 'react-router-dom';
import diseseaApi from '../../api/diseseaApi'

const DataDiseseaPage = () => {
    const [isLogin, setisLogin] = useState(false);
    const history = useHistory();
    const checkLogin = async (tokens) => {
      const respose = await diseseaApi.verifyToken({token: tokens})
      if(respose.status){
        await setisLogin(true)
      }else{
        localStorage.removeItem('token')
        history.push('/login');
      }
    }
    useEffect(() => {
      const tokens = localStorage.getItem('token')
      checkLogin(tokens)
      
    }, [localStorage.getItem('token')]);
    if(isLogin){
    return(
        <MDBContainer fluid>
            <TableDiseseaSection/>
        </MDBContainer>
        
    )
    }else{
        return(
            <></>
        )
    }
}
export default DataDiseseaPage