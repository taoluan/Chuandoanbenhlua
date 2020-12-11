import { MDBCard, MDBCardBody, MDBDataTableV5, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader,MDBTable, MDBBtn,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import diseseaApi from '../../../api/diseseaApi'

const TableDiseseaSection = () => {
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
    const [checkbox1, setCheckbox1] = useState('');
    const [data,setdata] = useState([])
    const [show, setshow] = useState(false);
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
    const fetchThongTinBenh= async(benh)=>{
        const respose = await diseseaApi.getThongTinBenh({uri_benh: benh})
        let newArr = []
        newArr = Object.values(respose)
        return newArr
    }
    useEffect(() => {
        fetchDanhSachBenh()
        },[]);
    const showLogs2 = async (e) => {
        setCheckbox1(e.ten_benh);
        setshow(true)
        let rs = await fetchThongTinBenh(e.ten_benh)
        setdata(rs)
        console.log(data)
        };
        return(
            (datatable.rows.length >0 )
                ?   (
                    <MDBRow className="justify-content-start mb-5 mt-4">
                        <MDBCol sm="5">
                            <MDBCard>
                            <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Danh sách bệnh</MDBCardHeader>
                                <MDBCardBody>
                                <MDBDataTableV5
                                    hover
                                    entriesOptions={[11, 20, 25]}
                                    entries={11}
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
                            {data.length > 0
                                && <MDBCol sm="7" style={{ display: show ? "block" : "none" }}>
                                    <MDBCard className="z-depth-0 m-0 p-0">
                                        <MDBCardBody className="p-0 ">
                                            <MDBTable >
                                                    <MDBTableHead color="dark" >
                                                    <tr>
                                                        <th className="text-center" style={{width:'20%'}}>Giới thiệu</th>
                                                        <th className="text-center">Mô tả</th>
                                                    </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody>
                                                        {
                                                            data.map((item,key)=>{
                                                               return( 
                                                                   (item.type)
                                                                        && (
                                                                            <tr key={key}>
                                                                                <td>{item.type}</td>
                                                                                <td>{item.value} <img style={{cursor: 'pointer'}} onClick={()=>{alert(item.uri)}} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/></td>
                                                                            </tr>
                                                                        )
                                                               )
                                                            })
                                                        }
                                                   
                                                    </MDBTableBody>
                                            </MDBTable>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                }
                    </MDBRow>
                    )
                : (
                    <></>
                )
        )
        
}
export default TableDiseseaSection
