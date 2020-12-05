import React,{useEffect,useState} from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';
import { MDBDataTableV5 } from 'mdbreact';
import diseseaApi from '../../../api/diseseaApi'
const TableSection = () => {
  const [checkbox1, setCheckbox1] = useState('');
  const [data, setdata] = useState([]);
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
    setCheckbox1(e);
  };
  if(datatable.rows.length >0){
    return (
    <MDBRow className="mb-4 mt-0">
          <MDBCol md="6">
              <MDBCard>
                  <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={datatable}
                    checkbox
                    headCheckboxID='id2'
                    bodyCheckboxID='checkboxes2'
                    getValueCheckBox={(e) => {
                      console.log(e)
                      showLogs2(e);
                    }}
                  />
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue lighten-4">
                        <tr>
                          <th>#</th>
                          <th>First</th>
                          <th>Last</th>
                          <th>Handle</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>Mark</td>
                          <td>Otto</td>
                          <td>@mdo</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Jacob</td>
                          <td>Thornton</td>
                          <td>@fat</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Larry</td>
                          <td>the Bird</td>
                          <td>@twitter</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
  )
  }else{
    return(
      <></>
    )
  }
  
}

export default TableSection;

