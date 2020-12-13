import React,{useEffect,useState} from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import { MDBDataTableV5 } from 'mdbreact';
import diseseaApi from '../../../api/diseseaApi'
import {Image as ImageCloud} from 'cloudinary-react';
import AutoComplete from './AutoComplete'
import TableMap from './TableMap'
import UploadFile from './UploadFile'
const TableSection = () => {
  const [checkbox1, setCheckbox1] = useState('');
  const [update, setupdate] = useState([]);
  const [insert, setinsert] = useState({});
  const [data, setdata] = useState([]);
  const [show,setShow] = useState(false)
  const [showmodalUpdate,setShowModalUpdate] = useState(false)
  const [showInsert,setShowInsert] = useState(false)
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
  const fetchThongTinBenh = async(ten_benh)=>{
      const respose = await diseseaApi.getTrieuChungCuaBenh({tenbenh : ten_benh})
      await setdata(respose)
    }
  const showLogs2 = (e) => {
    setCheckbox1(e.ten_benh);
    setShow(true)
    fetchThongTinBenh(e.ten_benh)
  };
  const changeImg = (value) => {
    setinsert({
      ...insert,
      value
    })
   
  }
  const handleInsert = async () => {
     if(insert.newTrieuchung  && insert.newVitri ){
       let respose = await diseseaApi.insertTrieuChung({data: insert , benh : checkbox1})
       if(respose){
        setShowInsert(false)
        fetchThongTinBenh(checkbox1)
       } 
     }else{
       alert('no no')
     }
  }
  
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
            // (data.length > 0)
            // &&(
              <>
              <MDBCol md="6"  style={{ display: show ? "block" : "none" }}>
                <MDBCard>
                <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">
                  Triệu chứng của {checkbox1} 
                  </MDBCardHeader>
                    <MDBCardBody>
                      <MDBTable hover >
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
                            (data.length > 0)
                             ? data.map((item,key)=>{
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
                              : (
                                <tr className="text-center">
                                 <td colspan="4">Chưa có chiệu chứng ! Vui lòng nhập triếu chứng</td> 
                                </tr>
                              )

                          }
                        </MDBTableBody>
                      </MDBTable>
                      <MDBBtn className="float-right m-0 " color="primary" onClick={()=>{setShowModalUpdate(!showmodalUpdate)}}>Cập nhật</MDBBtn>
                      <MDBBtn className="float-right m-0 mr-1" color="success" onClick={()=>{ setShowInsert(true), setinsert({})}}>Thêm triệu chứng</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBModal isOpen={showmodalUpdate} toggle={()=>{setShowModalUpdate(!showmodalUpdate)}} fullHeight position="bottom">
                <MDBModalHeader className="text-center" toggle={()=>{setShowModalUpdate(!showmodalUpdate)}}>Cập nhật triệu chứng của {checkbox1} </MDBModalHeader>
                <MDBModalBody className="m-0 p-0">
                  <MDBRow className=" d-flex justify-content-center">
                  <MDBCol md="12" className="m-0 p-0">
                    <MDBCard className="z-depth-0 m-0 p-0">
                        <MDBCardBody className="pt-0 pb-0">
                          <MDBTable scrollY maxHeight="500px">
                            <MDBTableHead color="dark">
                              <tr>
                                <th>#</th>
                                <th>Triệu chứng</th>
                                <th className="text-danger"><img src={process.env.PUBLIC_URL + '/img/right.png'} height="20" width="20" alt="" className="pb-1"/> Triệu chứng mới</th>
                                <th>Vị trí</th>
                                <th className="text-danger"><img src={process.env.PUBLIC_URL + '/img/right.png'} height="20" width="20" alt="" className="pb-1"/> Vị trí mới</th>
                                <th>Hình ảnh</th>
                                <th className="text-danger"><img src={process.env.PUBLIC_URL + '/img/right.png'} height="20" width="20" alt="" className="pb-1"/> Hình ảnh mới</th>
                                <th className="text-success"><img src={process.env.PUBLIC_URL + '/img/refresh.png'} height="25" width="25" alt="" className="pb-1"/> Cập nhật</th>
                              </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                              {
                                  data.map((items,key)=>{
                                  return ( 
                                    <TableMap evOnClick={(e)=>{showLogs2(e)}} tenbenh={checkbox1} key={key} item={items} i={key}/>
                                    )
                                  })
                                  
                              }
                            </MDBTableBody>
                          </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  </MDBRow>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color="secondary" onClick={()=>{setShowModalUpdate(!showmodalUpdate)}}>Close</MDBBtn>
                </MDBModalFooter>
              </MDBModal>
              <MDBModal isOpen={showInsert} toggle={()=>{setShowInsert(!showInsert)}} fullHeight position="bottom">
                  <MDBModalHeader className="text-center" toggle={()=>{setShowInsert(!showInsert)}}>Thêm triệu chứng mới cho {checkbox1} </MDBModalHeader>
                  <MDBModalBody className="m-0 p-0">
                  <MDBRow className=" d-flex justify-content-center">
                  <MDBCol md="8" className="m-0 p-0">
                      <MDBCard className="z-depth-0 m-0 p-0">
                          <MDBCardBody className="pt-0 pb-0">
                            <MDBTable scrollY maxHeight="500px">
                              <MDBTableHead color="dark">
                                <tr>
                                  <th>Triệu chứng</th>
                                  <th>Vị trí</th>
                                  <th>Hình ảnh</th>
                                </tr>
                              </MDBTableHead>
                              <MDBTableBody>
                              <tr>
                                  <td className="align-middle"><AutoComplete option="trieuchung" callOnChangeTT={(value)=>{value && setinsert({...insert,newTrieuchung:value}) }}/></td>
                                  <td className="align-middle" ><AutoComplete callOnChangeVT={(value)=>{setinsert({...insert,newVitri:value})}}/></td>
                                  <td className="align-middle" ><UploadFile img={changeImg}/></td>
                              </tr>
                              </MDBTableBody>
                            </MDBTable>
                          </MDBCardBody>
                      </MDBCard>
                  </MDBCol>
                  </MDBRow>
                  </MDBModalBody>
                  <MDBModalFooter>
                  <MDBBtn className="float-right m-0 " color="primary" onClick={()=>{handleInsert()}}>Cập nhật</MDBBtn>
                  <MDBBtn color="secondary" onClick={()=>{setShowInsert(!showInsert)}}>Close</MDBBtn>
                  </MDBModalFooter>
              </MDBModal>
            </>
            // )
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

