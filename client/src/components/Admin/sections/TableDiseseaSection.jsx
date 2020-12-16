import { MDBCard, MDBCardBody, MDBDataTableV5, MDBTableBody,MDBInput, MDBTableHead, MDBRow, MDBCol ,MDBCardHeader,MDBTable, MDBBtn,MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import React,{useEffect,useState} from 'react';
import diseseaApi from '../../../api/diseseaApi'
import { Button } from 'antd';
import {Image as ImageCloud} from 'cloudinary-react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ShowListImage from './ShowListImage'
import ModalInsert from './ModalInsert'
import ModalUpdate from './ModalUpdate'

const check_Arr = (data) => {
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].type === "Hình ảnh"){
            return true
        }
    }
    return false
}

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
    const [insertProperty, setinsertProperty] = useState(false);
    const [checkbox1, setCheckbox1] = useState('');
    const [data,setdata] = useState([])
    const [show, setshow] = useState(false);
    const [showUpdate, setshowUpdate] = useState(false);
    const [updatedata, setUpdateData] = useState()
    const [update, setupdate] = useState(false);
    const [text, settext] = useState('');
    const [insertbenh, setinsertbenh] = useState(false);
    const [insertloading, setinsertloading] = useState(false);
    const [dataproperty, setdataproperty] = useState([]);
    const [insertDataProperty, setinsertDataProperty] = useState({});
    const [gionglua, setgionglua] = useState([]);
    const [khuvuc, setkhuvuc] = useState([]);
    const [giaidoan, setgiaidoan] = useState([]);
    const [vumua, setvumua] = useState([]);
    const [updateTT, setupdateTT] = useState(false);
    const [optionupdate, setoptionupdate] = useState({});
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
    const fetchGiong = async (benh)=>{
        const respose = await diseseaApi.getGiong({benh})
        setgionglua(respose)
    }
    const fetchKhuVuc = async (benh)=>{
        const respose = await diseseaApi.getKhuVuc({benh})
        setkhuvuc(respose)
    }
    const fetchGiaiDoan = async (benh)=>{
        const respose = await diseseaApi.getGiaiDoan({benh})
        setgiaidoan(respose)
    }
    const fetchProperty = async(data)=>{
        const respose = await diseseaApi.getProperty(data)
        setdataproperty(respose)
    }
    const fetchThongTinBenh= async(benh)=>{
        const respose = await diseseaApi.getThongTinBenh({uri_benh: benh})
        let newArr = []
        newArr = Object.values(respose)
        setdata(newArr)
    }
    const fetchVuMua = async (benh)=>{
        const respose = await diseseaApi.getVuMua({benh})
        setvumua(respose)
    }
    const hanldelUpdate = (value)=>{
        setshowUpdate(true)
        setUpdateData(value)
    }
    useEffect(() => {
        fetchDanhSachBenh()
        },[]);
    const handleUpdate = async (value) => {
        if(text === value.value || text === ''){
            alert('no no no')
        }else{
            const respose = await diseseaApi.updateProperty({data: value , benh: checkbox1 , newValue: text})
            setupdate(true)
            setTimeout(() => {
                setupdate(false)
                setshowUpdate(false)
                fetchThongTinBenh(checkbox1)
            }, 3000);
        }
       
    }
    const handleInsertProperty =async() => {
        if(insertDataProperty.uri && insertDataProperty.noidung){
            const respose = await diseseaApi.insertProperty({data: insertDataProperty , benh : checkbox1})
            setinsertProperty(true)
        setTimeout(() => {
            setinsertProperty(false)
            setinsertbenh({})
            respose && fetchThongTinBenh(checkbox1)
        }, 3000);
        }else{
            alert('nono')
        }
        
    }
    const hanldelUpdateOption = () => {
        setupdateTT(!updateTT)
        fetchGiong(checkbox1)
        fetchKhuVuc(checkbox1)
        fetchGiaiDoan(checkbox1)
        fetchVuMua(checkbox1)
    }
    
    const showLogs2 = async (e) => {
        setCheckbox1(e.ten_benh);
        setshow(true)
        fetchThongTinBenh(e.ten_benh)
        fetchProperty({benh : e.ten_benh})
        fetchGiong(e.ten_benh)
        fetchKhuVuc(e.ten_benh)
        fetchGiaiDoan(e.ten_benh)
        fetchVuMua(e.ten_benh)
        };
    const handleUpdateImg = async (e) => {
        e.benh =  checkbox1
        const respose = await diseseaApi.updateImage(e)
        if(respose){
            fetchThongTinBenh(checkbox1)
        }
    }
    const hanldelUpdateTT = (e) => {
        setupdateTT(true)
        setoptionupdate(e)
    }
    
        return(
            (datatable.rows.length >0 )
                ?   (
                    <MDBRow className="justify-content-start mb-5 mt-4">
                        <MDBCol sm="5" size="12">
                            <MDBCard>
                            <MDBCardHeader className="text-center title-2 mt-0 mb-0 text-dark">Danh sách bệnh  
                            <img className="float-right mt-1" onClick={()=>setinsertbenh(true)} style={{cursor: 'pointer'}} src={process.env.PUBLIC_URL + '/img/plus.png'} height="30px" width="30px" alt=""/>
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
                                    showLogs2(e);
                                    }}
                                />
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                            {data.length > 0
                                && 
                                <>
                                    <MDBCol sm="7" size="12" style={{ display: show ? "block" : "none" }}>
                                        <MDBCard className="z-depth-0 m-0 p-0">
                                            <MDBCardBody className="p-0 ">
                                                <MDBTable >
                                                        <MDBTableHead color="dark" >
                                                        <tr>
                                                            <th className="text-center" style={{width:'30%'}}>Giới thiệu</th>
                                                            <th className="text-center">Mô tả</th>
                                                        </tr>
                                                        </MDBTableHead>
                                                        <MDBTableBody>
                                                            {
                                                                data.map((item,key)=>{
                                                                    return(
                                                                        (item.type)
                                                                        ?   (
                                                                            item.value
                                                                            ?
                                                                            <tr key={key}>
                                                                                <td>{item.type}</td>
                                                                                <td>{item.value}
                                                                                <img style={{cursor: 'pointer'}} onClick={()=>hanldelUpdate(item)} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/></td>
                                                                            </tr>
                                                                            :
                                                                            <tr key={key}>
                                                                            <td>{item.type}</td>
                                                                            <td>
                                                                                 <ShowListImage data={item.img} evUpdateImg={handleUpdateImg}/>
                                                                                            {/* // &&  <ImageCloud key={key} cloudName="taoluanby" publicId={img} width="100" height="100" crop="scale" className="mr-4"/>   */}
                                                                            </td>
                                                                        </tr>
                                                                            )
                                                                        : (
                                                                            
                                                                            <tr key={key}>
                                                                                <td>Mô tả thêm</td>
                                                                                <td>{item.value} <img style={{cursor: 'pointer'}} onClick={()=>hanldelUpdate(item)} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/></td>
                                                                            </tr>
                                                                        )
                                                                    )
                                                                })
                                                               
                                                            }
                                                            <tr>
                                                                <td>Giống lúa kháng bệnh</td>
                                                                <td>
                                                                    {   gionglua.length === 0
                                                                        ? 'chưa có thông tin'
                                                                        :
                                                                        gionglua.map((item,key)=>{
                                                                            return(
                                                                                key === gionglua.length-1
                                                                                    ? item.ten_giong.value
                                                                                    : item.ten_giong.value+", "
                                                                            
                                                                            )
                                                                        })
                                                                    }
                                                                    <img className="ml-1" style={{cursor: 'pointer'}} onClick={()=>hanldelUpdateTT({option: 'data:Giống_Lúa',value :gionglua , benh: checkbox1})} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Khu vực ảnh hưởng</td>
                                                                <td>
                                                                    {   khuvuc.length === 0
                                                                        ? 'chưa có thông tin'
                                                                        :
                                                                        khuvuc.map((item,key)=>{
                                                                            return(
                                                                                key === khuvuc.length-1
                                                                                    ? item.ten_khuvuc.value
                                                                                    : item.ten_khuvuc.value+", "
                                                                            
                                                                            )
                                                                        })
                                                                    }
                                                                     <img className="ml-1" style={{cursor: 'pointer'}} onClick={()=>hanldelUpdateTT({option: 'data:Khu_Vực',value :khuvuc, benh: checkbox1})} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/>                                                                   
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Giai đoạn gây hại</td>
                                                                <td>
                                                                    {   giaidoan.length === 0
                                                                        ? 'chưa có thông tin'
                                                                        :
                                                                        giaidoan.map((item,key)=>{
                                                                            return(
                                                                                key === giaidoan.length-1
                                                                                    ? item.ten_giaidoan.value
                                                                                    : item.ten_giaidoan.value+", "
                                                                            
                                                                            )
                                                                        })
                                                                    }
                                                                    <img className="ml-1" style={{cursor: 'pointer'}} onClick={()=>hanldelUpdateTT({option: 'data:Giai_Đoạn',value :giaidoan , benh: checkbox1})} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>Vụ mùa gây hại</td>
                                                                <td>
                                                                    {   vumua.length === 0
                                                                        ? 'chưa có thông tin'
                                                                        :
                                                                        vumua.map((item,key)=>{
                                                                            return(
                                                                                key === vumua.length-1
                                                                                    ? item.ten_vumua.value
                                                                                    : item.ten_vumua.value+", "
                                                                            
                                                                            )
                                                                        })
                                                                    }
                                                                    <img className="ml-1" style={{cursor: 'pointer'}} onClick={()=>hanldelUpdateTT({option: 'data:Vụ_Mùa',value :giaidoan , benh: checkbox1})} src={process.env.PUBLIC_URL + '/img/pen.png'} width="20" height="20" alt=""/>
                                                                </td>
                                                            </tr>
                                                             <tr >
                                                                <td >
                                                                    <div className=" d-flex  align-self-center">
                                                                        <Autocomplete
                                                                            id="disabled-options-demo"
                                                                            options={dataproperty}
                                                                            getOptionLabel={(option) => option.mota}
                                                                            style={{ width: '100%' , marginTop:"40px"}}
                                                                            onChange={(e,value)=>setinsertDataProperty({...insertDataProperty,uri: value.uri})}
                                                                            renderInput={(params) => (
                                                                                <TextField {...params} label="Thêm mô tả" variant="outlined" />
                                                                            )}
                                                                    />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                <div className="input-group ">
                                                                    <div className="input-group-prepend">
                                                                        <span className="input-group-text" id="basic-addon">
                                                                        <i className="fas fa-pencil-alt prefix"></i>
                                                                        </span>
                                                                    </div>
                                                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>setinsertDataProperty({...insertDataProperty , noidung : e.target.value})}>
                                                                        
                                                                    </textarea>
                                                                    <div className="d-flex justify-content-cente align-self-center">
                                                                        <Button type="primary" size="large" className="ml-1" loading={insertProperty} onClick={() => handleInsertProperty()}>
                                                                            Thêm
                                                                        </Button>
                                                                    </div>
                                                                    
                                                                </div>
                                                                </td>
                                                            </tr>
                                                            {
                                                                !check_Arr(data)
                                                                &&
                                                                    <tr>
                                                                        <td>Hình ảnh {check_Arr(data)}</td>
                                                                        <td>
                                                                        <ShowListImage data={[]} evUpdateImg={handleUpdateImg}/>
                                                                        </td>
                                                                    </tr>
                                                            }
                                                        </MDBTableBody>
                                                </MDBTable>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </MDBCol>
                                    <MDBModal isOpen={showUpdate} toggle={()=>{setshowUpdate(!showUpdate)}} fullHeight position="bottom">
                                        <MDBModalHeader className="text-center" toggle={()=>{setshowUpdate(!showUpdate)}}>Cập nhật {updatedata && updatedata.type } của {checkbox1} </MDBModalHeader>
                                        <MDBModalBody className="m-0 p-0">
                                        <MDBRow className=" d-flex justify-content-center">
                                        <MDBCol md="10">
                                            <MDBCard className="z-depth-0 m-0 p-0">
                                                <MDBCardBody>
                                                            {updatedata
                                                                ? (     <>
                                                                            <div className="input-group">
                                                                                <div className="input-group-prepend">
                                                                                    <span className="input-group-text" id="basic-addon">
                                                                                    <i className="fas fa-pencil-alt prefix"></i>
                                                                                    </span>
                                                                                </div>
                                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={(e)=>settext(e.target.value)}>
                                                                                    {updatedata && updatedata.value.replace(/[\n]/gi,' ')}
                                                                                </textarea>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                : ''
                                                            }
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                        </MDBRow>
                                        </MDBModalBody>
                                        <MDBModalFooter>
                                        <Button type="primary" size="large" loading={update} onClick={() => handleUpdate(updatedata)}>
                                            Cập nhật
                                        </Button>
                                        <MDBBtn color="secondary" onClick={()=>{setshowUpdate(!showUpdate)}}>Close</MDBBtn>
                                        </MDBModalFooter>
                                    </MDBModal>
                                   
                                </>
                            }
                            <ModalInsert insertShow={insertbenh} evInsert={()=>setinsertbenh(!insertbenh)}/>
                            <ModalUpdate insertShowTT={updateTT} benh={checkbox1} option={optionupdate} evInsertTT={()=>(hanldelUpdateOption())}/>
                    </MDBRow>
                    )
                : (
                    <></>
                )
        )
        
}
export default TableDiseseaSection
