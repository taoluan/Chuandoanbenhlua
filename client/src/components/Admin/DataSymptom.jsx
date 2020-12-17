import {MDBContainer, MDBCard, MDBCardBody, MDBDataTableV5, MDBTableBody,MDBInput, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader,MDBTable, MDBBtn,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import diseseaApi from '../../api/diseseaApi'
import ModalInsertGiong from './sections/ModalInsertGiong'
import ModalInsertTrieuChung from './sections/ModalInsertTrieuChung'
import { Button } from 'antd';

const DataSymptom = () => {
    const [datatable, setDatatable] = useState({
        columns: [
          {
            label: 'Triệu chứng',
            field: 'trieuchung',
            width: 270,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'Triệu chứng',
            },
          },
          {
            label: 'Vị trí',
            field: 'vitri',
            width: '30%',
          },
        ],
        rows:[]
        })
    const [dataGiong, setdataGiong] = useState({
        columns: [
            {
            label: 'Loaị giống',
            field: 'title',
            width: 100,
            attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'TLoaị giống',
            },
            },
            {
            label: 'Mô tả',
            field: 'thongtin',
            width: 270,
            },
        ],
        rows:[]
        })
    const [checkedTT, setCheckedTT] = useState('');
    const [checkedG, setCheckedG] = useState('');
    const [gionglua, setgionglua] = useState([]);
    const [inserttrieuchung, setinsertTrieuchung] = useState(false);
    const [insertgionglua, setinsertGionglua] = useState(false);
    const [deleteTT, setdeleteTT] = useState(false);
    const [showdeletett, setshowdeletett] = useState(false);
    const [deleteG, setdeleteG] = useState(false);
    const [showdeleteg, setshowdeleteg] = useState(false);
    const fetchAllTrieuChung = async() =>{
        const respose = await diseseaApi.getAllTrieuChungAdmin()
        setDatatable({
            ...datatable,
            rows:respose || []
        })
    }
    const fetchAllGiong = async() =>{
        const respose = await diseseaApi.getGiongLua()
        let newArr =[]
        respose.map(item=>{
            newArr.push({title : item.title.value , thongtin: item.thongtin.value , uri: item.uri.value})
        })
        setdataGiong({
            ...dataGiong,
            rows:newArr
        })
    }
    useEffect(() => {
        fetchAllGiong()
        fetchAllTrieuChung()
    }, []);
    const checkedTrieuchung = (e) => {
        setshowdeletett(true)
        setCheckedTT({uri_trieuchung : e.uri_trieuchung , vitri: e.vitri})
    }
    const checkedGiong = (e) => {
        setshowdeleteg(true)
        setCheckedG({giong : e.title , uri: e.uri , thongtin: e.thongtin})
    }
    const handleDeleteTT = async (value) => {
        setdeleteTT(true)
        let deletetc = await diseseaApi.deleteTC(value)
        setTimeout(() => {
            setdeleteTT(false)
            deletetc && fetchAllTrieuChung()
        }, 3000);
    }
    const handleDeleteG =async (value) => {
        setdeleteG(true)
        let deleteg = await diseseaApi.deleteG(value)
        setTimeout(() => {
            setdeleteG(false)
            deleteg && fetchAllGiong()
        }, 3000);
    }
    const hanldelloadtt = () => {
        setinsertGionglua(false)
        // fetchAllGiong()
    }
        return(
            (datatable.rows.length >0)
            ? (<MDBContainer fluid>
                <MDBRow className="justify-content-start mb-5 mt-4">
                    <MDBCol sm="6" size="12">
                        <MDBCard>
                            <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Danh sách triệu chứng
                            <Button style={{ display: showdeletett ? "block" : "none" }} type="primary" danger className="float-right mt-2 ml-1" size="small"
                             loading={deleteTT} onClick={() => handleDeleteTT(checkedTT)}>
                                Xóa
                            </Button>
                             <img className="float-right mt-1" onClick={()=>setinsertTrieuchung(true)} style={{cursor: 'pointer'}} src={process.env.PUBLIC_URL + '/img/plus.png'} height="30px" width="30px" alt=""/>
                            </MDBCardHeader>
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
                                          e && checkedTrieuchung(e)
                                        }}
                                    />
                                </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol sm="6" size="12">
                        <MDBCard>
                            <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Danh sách giống lúa
                                <Button style={{ display: showdeleteg ? "block" : "none" }} type="primary" danger className="float-right mt-2 ml-1" size="small"
                                loading={deleteG} onClick={() => handleDeleteG(checkedG)}>
                                    Xóa
                                </Button>
                                <img className="float-right mt-1" onClick={()=>setinsertGionglua(true)} style={{cursor: 'pointer'}} src={process.env.PUBLIC_URL + '/img/plus.png'} height="30px" width="30px" alt=""/>
                            </MDBCardHeader>
                                <MDBCardBody>
                                    <MDBDataTableV5
                                        hover
                                        entriesOptions={[5, 10, 15]}
                                        entries={5}
                                        pagesAmount={4}
                                        data={dataGiong}
                                        checkbox
                                        headCheckboxID='id3'
                                        bodyCheckboxID='checkboxes3'
                                        getValueCheckBox={(e) => {
                                           e && checkedGiong(e)
                                        }}
                                    />
                                </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <ModalInsertGiong insertShow={insertgionglua}
                evInsert={()=>hanldelloadtt()}
                />
                <ModalInsertTrieuChung insertShow={inserttrieuchung} 
                evInsert={()=>{
                    setinsertTrieuchung(false)
                    // fetchAllTrieuChung()
                }}/>
            </MDBContainer>)
            : (
                <></>
            )
        )
}
export default DataSymptom