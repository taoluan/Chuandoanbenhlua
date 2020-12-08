import { MDBCard, MDBCardBody, MDBDataTableV5, MDBTableBody, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader,MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
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

        };
        return(
            (datatable.rows.length >0)
                ?   (
                    <MDBRow className="justify-content-center mb-5 mt-4">
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
                        <MDBCol sm="7">
                            <MDBCard>
                            <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Danh sách bệnh</MDBCardHeader>
                                <MDBCardBody>
                                <MDBDataTableV5
                                    hover
                                    entriesOptions={[12, 20, 25]}
                                    entries={12}
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
                    </MDBRow>
                    )
                : (
                    <></>
                )
        )
        
}
export default TableDiseseaSection
