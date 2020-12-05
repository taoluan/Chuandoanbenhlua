import React,{useEffect,useState} from 'react';
import { MDBRow } from 'mdbreact';
import AdminCardSection1 from './sections/AdminCardSection1';
import AdminCardSection2 from './sections/AdminCardSection2';
import TableSection from './sections/TableSection';
import BreadcrumSection from './sections/BreadcrumSection';
import ChartSection1 from './sections/ChartSection1';
import ChartSection2 from './sections/ChartSection2';
import diseseaApi from '../../api/diseseaApi'
const DashboardPage =  () => {
    // const [datatable, setdatatable] = useState([]);
    // useEffect(() => {
    //     const fetchDanhSachBenh = async()=>{
    //       const respose = await diseseaApi.dsBenhNoType()
    //       let newArr = []
    //       respose.map(x=>{
    //         x.benh.map(y=>{
    //            newArr.push({ten_benh: y.ten_benh , ten_loaibenh: x.loaibenh})
    //         })
    //       })
    //       setdatatable(newArr)
    //     }
    //     fetchDanhSachBenh()
    //   },[]);
  return (
    <React.Fragment>
      <BreadcrumSection />
      <AdminCardSection1 />
      <ChartSection1 />
      <TableSection/>
      <ChartSection2 />
      <AdminCardSection2 />
    </React.Fragment>
  )
}

export default DashboardPage;