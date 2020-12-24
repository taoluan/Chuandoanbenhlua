import React,{useEffect,useState} from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import diseseaApi from '../../api/diseseaApi'
import { Route,Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import LoginPage from './LoginPage'
const DashboardPage =  () => {
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
        <React.Fragment>
          <BreadcrumSection />
          <AdminCardSection1 />
          <ChartSection1 />
          <TableSection/>
        </React.Fragment>
      )
    }else{
      // 
      return( 
        <></>
      )
    }
}

export default DashboardPage;