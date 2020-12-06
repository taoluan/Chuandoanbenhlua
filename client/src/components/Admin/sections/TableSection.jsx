import React,{useEffect,useState} from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader} from 'mdbreact';
import { MDBDataTableV5 } from 'mdbreact';
import diseseaApi from '../../../api/diseseaApi'
import {Image as ImageCloud} from 'cloudinary-react';
const TableSection = () => {
  const [checkbox1, setCheckbox1] = useState('');
  const [data, setdata] = useState([]);
  const [show,setShow] = useState(false)
  const [datatable, setDatatable] = useState({
    columns: [
      {
        label: 'Tên bệnh',
        field: 'ten_benh',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Tên bệnh',
        },
      },
      {
        label: 'Loại bệnh',
        field: 'ten_loaibenh',
        width: 270,
      },
    ],
    rows:[]
    })
  useEffect(() => {
    const fetchDanhSachBenh = async()=>{
      const respose = await diseseaApi.dsBenhNoType()
      let newArr = []
      respose.map(x=>{
        x.benh.map(y=>{
           newArr.push({ten_benh: y.ten_benh , ten_loaibenh: x.loaibenh})
        })
      })
      setDatatable({
        ...datatable,
        rows:newArr
      })
    }
    fetchDanhSachBenh()
  },[]);
  const showLogs2 = (e) => {
     setCheckbox1(e.ten_benh);
    const fetchThongTinBenh = async()=>{
      const respose = await diseseaApi.getTrieuChungCuaBenh({tenbenh : e.ten_benh})
      await setdata(respose)
    }
    setShow(true)
    fetchThongTinBenh()
  };
  if(datatable.rows.length >0){
    return (
    <MDBRow className="mb-4 mt-0">
          <MDBCol md="6">
              <MDBCard>
              <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Danh sách bệnh</MDBCardHeader>
                  <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[8, 20, 25]}
                    entries={8}
                    pagesAmount={4}
                    data={datatable}
                    checkbox
                    headCheckboxID='id2'
                    bodyCheckboxID='checkboxes2'
                    getValueCheckBox={(e) => {
                      showLogs2(e);
                    }}
                  />
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          {
            (data.length > 0)
            &&(
              <MDBCol md="6" className="mb-4" style={{ display: show ? "block" : "none" }}>
                <MDBCard>
                <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Triêụ chứng của {checkbox1}</MDBCardHeader>
                    <MDBCardBody>
                      <MDBTable hover>
                        <MDBTableHead color="blue lighten-4">
                          <tr>
                            <th>#</th>
                            <th>Triệu chứng</th>
                            <th>Vị trí</th>
                            <th>Hình ảnh</th>
                          </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                          {
                              data.map((item,key)=>{
                               return ( <tr key={key}>
                                  <td>{key+1}</td>
                                  <td>{item.ten_trieuchung}</td>
                                  <td>{item.vitri}</td>
                                  <td>{item.hinhanh !== "" 
                                    ? <ImageCloud cloudName="taoluanby" publicId={item.hinhanh} width="100" height="100" crop="scale"/>
                                    : 'Không có'
                                  }
                                  </td>
                                </tr>)
                              })
                          }
                        </MDBTableBody>
                      </MDBTable>
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
            )
          }
          
      </MDBRow>
  )
  }else{
    return(
      <></>
    )
  }
  
}

export default TableSection;

