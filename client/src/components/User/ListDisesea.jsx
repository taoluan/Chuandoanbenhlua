import { MDBContainer, MDBRow ,MDBCol,MDBTypography, MDBBox ,MDBBtn} from 'mdbreact';
import React,{useEffect,useState} from 'react'
import {useParams,useLocation} from "react-router-dom";
import Disesea from './Disesea'
import CarouselPage from '../UI/Container/ShowImgBenh'
import SpeedScroll from '../UI/Container/SpeedScroll'
import diseseaApi from '../../api/diseseaApi'
import { Route } from 'react-router-dom';
const DiseseaTag = () =>{
    const Params = useParams()
    let location = useLocation();
    const [data, setData] = useState([]);
    useEffect(() => {
        document.querySelector('#benh').scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    useEffect(()=>{
        const fetchThongTinBenh = async()=>{
            const respose = await diseseaApi.getThongTinBenh({uri_benh: Params.benh})
            setData(respose)
        }
        if(Params.benh){
            fetchThongTinBenh()
        }
    },[location.pathname])
    if(data.mota){
    return(
        <Route>
        <div className="rgba-blue-slight" style={{position: "relative"}} id="timkiem">
        <Disesea />
        <SpeedScroll />
        <main className=" smooth-scroll pb-4 " id="benh">
            <MDBContainer className="bg-white mt-2 pb-4 z-depth-1" >
                <MDBRow id="mota">
                <header className=" align-self-md-center w-100" style={{backgroundColor:"#00C851"}}>
                    <p className="title-7 pb-0 mb-0">Thông Tin Bệnh </p>
                </header>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12" className="d-flex justify-content-center">
                        <MDBRow>
                        <MDBCol sm="12" className="d-flex justify-content-center">
                            <p className="title mt-4 mb-0">{data.tenbenh.value}</p>
                        </MDBCol>
                        <MDBCol sm="12" className="d-flex justify-content-center">
                            <span className="line-2 mt-0 pt-0"></span>
                        </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                        <div className="heavy-rain-gradient d-flex justify-content-center align-items-center rounded-circle z-depth-1" style={{height:"50px" , width:"50px"}}>
                            <img src={process.env.PUBLIC_URL + '/img/network.png'} height="40px" width="40px" alt=""/>
                        </div>
                    </MDBCol>
                    <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                        <p className="title-9 mb-0">Mô tả</p>
                    </MDBCol>
                    <MDBCol md="8" size="12" className=" d-flex justify-content-center mt-1">
                        <MDBTypography blockquote bqColor="primary" className="mt-0 pt-0">
                            <MDBBox tag="p" mb={0}>
                                 {data.mota.value.map(x=>{
                                    if(x !== ""){
                                        return( <p className="mb-0 mt-0 p-0">- {x.replace(/[-]/gi,' ')}</p>)
                                    }
                                
                                })}
                            </MDBBox>
                        </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-start" id="trieuchung">
                    <MDBCol size="12" className=" d-flex justify-content-lg-start mt-5 justify-content-center"> 
                            <img src={process.env.PUBLIC_URL + '/img/emergency.png'} height="40px" width="40px" alt=""/>
                        <p className="title-9 mb-0 text-warning">Các triệu chứng</p>
                    </MDBCol>
                    <MDBCol size="12" className=" d-flex justify-content-start mt-1">
                    <MDBTypography note noteColor='warning' className="trieuchung">
                        {data.trieuchung.value.map(x=>{
                            if(x !== ""){
                                return( <p className="mb-1"> <li>{x.replace(/[-,+]/gi,' ')}</li></p>)
                            }
                           
                        })}
                    </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBRow id="hinhanh"> 
                {
                        (data.ddht !== undefined)
                        ? (
                            <MDBCol sm="12">
                                <MDBRow className="d-flex justify-content-center">
                                    <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                        <div className=" d-flex justify-content-center align-items-center" style={{height:"40px" , width:"40px"}}>
                                            <img src={process.env.PUBLIC_URL + '/img/share.png'} height="40px" width="40px" alt=""/>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                    <p className="title-9 mb-0">{data.ddht.type}</p>
                                    </MDBCol>
                                    <MDBCol md="12" size="12" className=" d-flex justify-content-center mt-1">
                                        <MDBTypography blockquote bqColor="primary" className=" mt-0 pt-0">
                                            <MDBBox tag="p" mb={0}>
                                            -{data.ddht.value.replace(/[-]/gi,' ')}
                                            </MDBBox>
                                        </MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        )
                        : (data.nguyennhan !== undefined)
                        && (
                            <MDBCol sm="12">
                                <MDBRow className="d-flex justify-content-center">
                                    <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                        <div className=" d-flex justify-content-center align-items-center" style={{height:"40px" , width:"40px"}}>
                                            <img src={process.env.PUBLIC_URL + '/img/share.png'} height="40px" width="40px" alt=""/>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                    <p className="title-9 mb-0">{data.nguyennhan.type}</p>
                                    </MDBCol>
                                    <MDBCol md="8" size="12" className=" d-flex justify-content-center mt-1">
                                        <MDBTypography blockquote bqColor="primary" className=" mt-0 pt-0">
                                            <MDBBox tag="p" mb={0}>
                                            {data.nguyennhan.value.map(x=>{
                                                    if(x !== ""){
                                                        return( <p className="mb-0 mt-0 p-0">- {x.replace(/[-]/gi,' ')}</p>)
                                                    }
                                                
                                                })}
                                            </MDBBox>
                                        </MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        )
                    }
                    <MDBCol sm="12">
                        <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                            <p className="title-9 mb-0 pb-0">Một số hình ảnh</p>
                        </MDBCol>
                        <CarouselPage img={data.hinhanh.img}/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center" id="tachai">
                    {
                        (data.ddpspt !== undefined)
                        ? (
                            <MDBCol sm="12">
                                    <MDBRow className="d-flex justify-content-center">
                                        <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                            <div className=" d-flex justify-content-center align-items-center" style={{height:"40px" , width:"40px"}}>
                                                <img src={process.env.PUBLIC_URL + '/img/program.png'} height="40px" width="40px" alt=""/>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                        <p className="title-9 mb-0">{data.ddpspt.type}</p>
                                        </MDBCol>
                                        <MDBCol md="8" size="12" className=" d-flex justify-content-center mt-1">
                                            <MDBTypography blockquote bqColor="primary" className="mt-0 pt-0">
                                                <MDBBox tag="p" mb={0}>
                                                    -{data.ddpspt.value.replace(/[-]/gi,' ')}
                                                </MDBBox>
                                            </MDBTypography>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCol>
                        )
                        : (data.ddshgh !== undefined) 
                        && (
                            <MDBCol sm="12">
                                <MDBRow className="d-flex justify-content-center">
                                    <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                        <div className=" d-flex justify-content-center align-items-center" style={{height:"40px" , width:"40px"}}>
                                            <img src={process.env.PUBLIC_URL + '/img/program.png'} height="40px" width="40px" alt=""/>
                                        </div>
                                    </MDBCol>
                                    <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                    <p className="title-9 mb-0">{data.ddshgh.type}</p>
                                    </MDBCol>
                                    <MDBCol md="10" size="12" className=" d-flex justify-content-center mt-1">
                                        <MDBTypography blockquote bqColor="primary" className=" mt-0 pt-0">
                                            <MDBBox tag="p" mb={0}>
                                            -{data.ddshgh.value.replace(/[-]/gi,' ')}
                                            </MDBBox>
                                        </MDBTypography>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCol>
                        )
                    }
                    
                    <MDBCol sm="6">
                        <MDBRow>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                <div className=" d-flex justify-content-center align-items-center rounded-circle z-depth-1" style={{height:"40px" , width:"40px"}}>
                                    <img src={process.env.PUBLIC_URL + '/img/warning.png'} height="40px" width="40px" alt=""/>
                                </div>
                            </MDBCol>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                <p className="title-9 mb-0">Tác Hại</p>
                            </MDBCol>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                <MDBTypography note noteColor='primary' className="text-center mt-0 pt-0" className="trieuchung">
                                {data.tachai ? data.tachai.value : ''}
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm="6">
                        <MDBRow>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                <img src={process.env.PUBLIC_URL + '/img/shield.png'} className="z-index-1" height="40px" width="40px" alt=""/>
                            </MDBCol>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                <p className="title-9 mb-0">Phồng Chống</p>
                            </MDBCol>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                <MDBTypography note noteColor='primary' className="text-center mt-0 pt-0" className="trieuchung">
                                    {data.phongchong ? data.phongchong.value : "Hiện nay chưa có cách phòng chống"}
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol sm="12">
                        <MDBRow className="d-flex justify-content-center">
                            <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                    <img src={process.env.PUBLIC_URL + '/img/cross.png'} height="40px" width="40px" alt=""/>
                            </MDBCol>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                <p className="title-9 mb-0">Điều Trị</p>
                            </MDBCol>
                            <MDBCol md="8" size="12" className=" d-flex justify-content-center mt-1">
                                <MDBTypography blockquote bqColor="success" className="text-center mt-0 pt-0">
                                    <MDBBox tag="p" mb={0}>
                                        {data.dieutri.value}
                                    </MDBBox>
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </main>
        </div>
        </Route>
    )
    }else{
        return (
        <>
        <div id="benh"></div>
        </>)
    }
}
export default DiseseaTag;