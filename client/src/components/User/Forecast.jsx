import React, { useState , useEffect} from 'react'
import { MDBMask,MDBView,MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "../UI/Header/Header"
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import FormControl from '@material-ui/core/FormControl';
import Header from '../UI/Header/Header'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import DuBaoBenh from '../UI/Container/CtnDuBaoBenh'
import diseseaApi from '../../api/diseseaApi'
import {message } from 'antd';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

const khuVuc = [
  { title: 'Đồng bằng Sông Cửu Long', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Cửu_Long' },
  { title: 'Đồng bằng Sông Hồng', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Hồng' },
  { title: 'Đồng bằng Duyên Hải Miền Trung', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Duyên_Hải_Miền_Trung' },
]
const vuMua = [
    { title: 'Hè Thu', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Hè_Thu' },
    { title: 'Đông Xuân', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đông_Xuân' },
    { title: 'Mùa', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Mùa' },
  ]
  const giaiDoan = [
    { title: 'Mạ', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_mạ' },
    { title: 'Đẻ Nhánh', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_đẻ_nhánh' },
    { title: 'Làm Đồng', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_làm_đồng' },
    { title: 'Trổ Chính', uri: 'http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_trổ-chín' },
  ]
const Forecast = () =>{
    const [show, setShow] = useState(false)
    const [gionglua,setGiongLua] = useState([])
    const [data,setData] = useState([])
    const [thongtin, setThongTin] = useState({
      vumua: null,
      giong: null,
      khuvuc:null,
      giaidoan:null
    })
    const [thongtinshow, setThongTinShow] = useState({
      vumua: '',
      giong: '',
      khuvuc: '',
      giaidoan:''
    })
    useEffect(() => {
      const fetchGiongLua =async ()=>{
         const respose = await diseseaApi.getGiongLua()
         setGiongLua(respose)
      }
      fetchGiongLua()
    }, [])
    const handelClick = async(e)=>{        
      console.log(thongtin)
      if(thongtin.vumua  && thongtin.giong  && thongtin.khuvuc && thongtin.giaidoan){
        const respose = await diseseaApi.duBao({khuvuc: thongtin.khuvuc, giaidoan: thongtin.giaidoan , vumua: thongtin.vumua , giong: thongtin.giong})
        setData(respose)
        await setShow(true)
        document.querySelector('#onBottom').scrollIntoView({ behavior: 'smooth', block: 'start' })
      }else{
        message.config({
          top: 80,
          duration: 2,
          maxCount: 3,
          rtl: true,
          prefixCls: 'ant-message',
        });
      message.error('Vui lòng nhập đầy đủ thông tin');
      } 
    }
    return(
      <div className="grey lighten-3">
        <Header url={true}/>
        <MDBView src={process.env.PUBLIC_URL + '/img/mbr-1920x1281.jpg'} className="pb-0 mb-0 smooth-scroll ">
            <MDBMask className="flex-center flex-column text-white text-center d-flex align-items-center bd-highlight mb-3 example-parent">
            <MDBCol xl="6" lg="8" md="10" sm="10" size="12" className="d-flex align-items-center"> 
                <MDBContainer  style={{backgroundColor:"white" , opacity: 0.9 }} className="rounded mb-0 shadow-box-example z-depth-3 mt-5" >
                  <h3 className="text-dark title-1 mb-4 pt-5">Dự Báo Các Loại Bệnh Có Thể  Bị Trên Cây Lúa</h3>
                  <span className="line-3 mt-0 pt-0 warning-color-dark mb-4"></span>
                    <MDBRow className="d-flex justify-content-center pb-5">
                    <MDBCol lg="12" sm="12" >
                    <MDBRow>
                  <MDBCol sm="12">
                      <MDBRow className="mb-4">
                          <MDBCol sm="6" className="d-flex justify-content-center">
                          <FormControl  className="mt-0 ml-2">
                            <p className="title-3">Vụ Mùa</p>
                            <RadioGroup className="ml-3" aria-label="gender" name="vumua" value={thongtin.vumua} onChange={(e)=>{
                              setThongTin({...thongtin,vumua:e.target.value})
                              setThongTinShow({...thongtinshow,vumua:e.target.name})
                              }}>
                                  <FormControlLabel style={{color:'black'}} name="Đông Xuân" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đông_Xuân" control={<Radio color="primary"  />} label="Vụ Đông Xuân"/>
                                  <FormControlLabel style={{color:'black'}} name="Mùa" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Mùa" control={<Radio color="primary"  />} label="Vụ Mùa"/>
                                  <FormControlLabel style={{color:'black'}} name="Hè Thu" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Hè_Thu" control={<Radio color="primary"  />} label="Vụ Hè Thu"/>
                              </RadioGroup>
                          </FormControl>
                              {/* <Autocomplete
                                  id="combo-box-demo"
                                  options={vuMua}
                                  getOptionLabel={(option) => option.title}
                                  onChange={(e,value)=>{value && setThongTin({...thongtin,vumua:value})}}
                                  style={{ width: 300 }}
                                  renderInput={(params) => <TextField {...params} label="VỤ MÙA" variant="outlined" />}
                              /> */}
                          </MDBCol>
                          <MDBCol sm="6" className="d-flex justify-content-center ">
                            <FormControl  className="mt-0 ml-2">
                            <p className="title-3">Khu Vực</p>
                                <RadioGroup className="ml-3" aria-label="gender" name="khuvuc" value={thongtin.khuvuc} onChange={(e)=>{
                                  setThongTin({...thongtin,khuvuc:e.target.value})
                                  setThongTinShow({...thongtinshow,khuvuc:e.target.name})
                                  }}>
                                    <FormControlLabel style={{color:'black'}} name="Đồng bằng Sông Cửu Long" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Cửu_Long" control={<Radio color="primary"  />} label="Đồng bằng Sông Cửu Long"/>
                                    <FormControlLabel style={{color:'black'}} name="Đồng bằng Sông Hồng" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Hồng" control={<Radio color="primary"  />} label="Đồng bằng Sông Hồng"/>
                                    <FormControlLabel style={{color:'black'}} name="Đồng bằng Duyên Hải Miền Trung" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Duyên_Hải_Miền_Trung" control={<Radio color="primary"  />} label="Đồng bằng Duyên Hải Miền Trung"/>
                                </RadioGroup>
                            </FormControl>
                              {/* <Autocomplete
                                  id="combo-box-demo"
                                  options={khuVuc}
                                  getOptionLabel={(option) => option.title}
                                  onChange={(e,value)=>{value && setThongTin({...thongtin, khuvuc:value})}}
                                  style={{ width: 300 }}
                                  renderInput={(params) => <TextField {...params} label="KHU VỰC" variant="outlined" />}
                              /> */}
                          </MDBCol>
                      </MDBRow>
                      <MDBRow>
                          <MDBCol sm="6" className="d-flex justify-content-center ">
                            <FormControl className="mt-0 ml-2">
                            <p className="title-3">Giai đoạn</p>
                                <RadioGroup className="ml-3" aria-label="gender" name="khuvuc" value={thongtin.giaidoan} onChange={(e)=>{
                                  setThongTin({...thongtin,giaidoan:e.target.value})
                                  setThongTinShow({...thongtinshow,giaidoan:e.target.name})
                                  }}>
                                  <FormControlLabel style={{color:'black'}} name="Giai đoạn mạ" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_mạ" control={<Radio color="primary"  />} label="Giai đoạn mạ"/>
                                  <FormControlLabel style={{color:'black'}} name="Giai đoạn làm đồng" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_làm_đồng" control={<Radio color="primary"  />} label="Giai đoạn làm đồng"/>
                                  <FormControlLabel style={{color:'black'}} name="Giai đoạn đẻ nhánh" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_đẻ_nhánh" control={<Radio color="primary"  />} label="Giai đoạn đẻ nhánh"/>
                                  <FormControlLabel style={{color:'black'}} name="Giai đoạn trổ chín" value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_trổ-chín" control={<Radio color="primary"  />} label="Giai đoạn trổ chín"/>
                                </RadioGroup>
                            </FormControl>
                              {/* <Autocomplete
                                  id="combo-box-demo"
                                  options={khuVuc}
                                  getOptionLabel={(option) => option.title}
                                  onChange={(e,value)=>{value && setThongTin({...thongtin, khuvuc:value})}}
                                  style={{ width: 300 }}
                                  renderInput={(params) => <TextField {...params} label="KHU VỰC" variant="outlined" />}
                              /> */}
                          </MDBCol>
                          <MDBCol sm="6">
                            <MDBRow>
                              <MDBCol sm="12"><p className="title-3 mb-0 pb-0">Giống Lúa</p></MDBCol>
                              <MDBCol sm="12" className="d-flex justify-content-center mt-0 pt-0">
                                <Autocomplete
                                  id="highlights-demo"
                                  options={gionglua}
                                  className="mt-0 pt-0"
                                  getOptionLabel={(option) => option.title.value}
                                  onChange={(e,value)=>{if(value){ 
                                    setThongTin({...thongtin,giong:value.uri.value})
                                    setThongTinShow({...thongtinshow,giong:value.title.value})
                                  }
                                  }}
                                  style={{ width: 300 }}
                                  renderInput={(params) => (
                                      <TextField {...params} label="GIỐNG LÚA" variant="outlined" margin="normal" />
                                  )}
                              />
                              </MDBCol>
                            </MDBRow>
                          </MDBCol>
                      </MDBRow>
                      <MDBRow className="d-flex justify-content-center pt-2">
                          <Button variant="contained" color="primary" disableElevation onClick={handelClick}>
                              DỰ BÁO
                          </Button>
                      </MDBRow>
                  </MDBCol>khuvuc
              </MDBRow>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
            </MDBCol>
            </MDBMask>
        </MDBView>
        <main className=" smooth-scroll pb-4"  style={{ display: show ? "block" : "none"}} id="onBottom" >
        <MDBContainer className="bg-white mt-4 shadow-box-example z-depth-1 pb-2" >
          <MDBRow>
            <header className=" align-self-md-center w-100" style={{backgroundColor:"rgb(250, 170, 11)"}}>
                    <p className="title-7 pb-0 mb-0">Dự báo các bệnh có thể gặp phải  <ErrorOutlineIcon fontSize="large" className="pb-1"/></p>
            </header>
          </MDBRow>
          <MDBRow className="mt-4">
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0 ">Khu Vực</p> 
              <span className="title-text-small">{thongtinshow.khuvuc}</span>
            </MDBCol>
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0">Vụ Mùa</p>
              <span className="title-text-small">{thongtinshow.vumua}</span>
            </MDBCol>
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0">Giai Đoạn</p>
              <span className="title-text-small">{thongtinshow.giaidoan}</span>
            </MDBCol>
            <MDBCol sm="6" className="text-center mb-3">
              <p className="title-text mb-0">Giống Lúa</p>
              <span className="title-text-small">{thongtinshow.giong}</span>
            </MDBCol>
          </MDBRow>
          <hr/>
          <MDBRow>
            <DuBaoBenh results = {data}/>
          </MDBRow>
        </MDBContainer>
        </main>
      </div>
    )
}
export default Forecast;