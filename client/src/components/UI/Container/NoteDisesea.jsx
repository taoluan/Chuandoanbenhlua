import { MDBContainer, MDBRow ,MDBCol,MDBTypography, MDBBox ,MDBBtn} from 'mdbreact';
import React,{useEffect,useState} from 'react'
import diseseaApi from '../../../api/diseseaApi'
import { Popover, Button } from 'antd';
const NoteDisesea = (props) => {
    const [gionglua, setgionglua] = useState([]);
    const [khuvuc, setkhuvuc] = useState([]);
    const [giaidoan, setgiaidoan] = useState([]);
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
    useEffect(() => {
        fetchGiong(props.data)
        fetchKhuVuc(props.data)
        fetchGiaiDoan(props.data)
    }, [props.data]);
    if(gionglua.length === 0 && khuvuc.length === 0 && gionglua.length === 0){
       return(
            <></>
        )
    }else{
        return(
            <>
            <MDBCol size="12" className=" d-flex justify-content-lg-start mt-5 justify-content-center"> 
                <img src={process.env.PUBLIC_URL + '/img/note.png'} height="40px" width="40px" alt=""/>
                <p className="title-9 mb-0 text-darger">Thông tin thêm</p>
            </MDBCol>
            <MDBCol size="12" className=" d-flex justify-content-start mt-1">
            <MDBTypography note noteColor='warning' className="trieuchung w-100" component={'div'} variant={'body2'}>   
            <p className="font-weight-bolder">Giống kháng bệnh  :
            {
               gionglua.length === 0 
                ? (
                    <span className="font-weight-normal"> Chưa có giống kháng bệnh</span>
                )
                :(
                    gionglua.map((item,key)=>{
                     return(
                        <Popover key={key} content={
                            <div style={{maxWidth:"400px"}} >{item.mota.value}</div>
                                } title={<p className="mb-0"> Thông tin về giống lúa {item.ten_giong.value}</p>}>
                                {key === gionglua.length-1
                                    ? <span className="font-weight-normal" style={{cursor : "pointer"}}> <u>{item.ten_giong.value}</u></span>
                                    : <span className="font-weight-normal" style={{cursor : "pointer"}}> <u>{item.ten_giong.value}</u>, </span>
                                }
                        </Popover>)   
                    })
                )
            }
                </p>
            <p className="font-weight-bold">Khu vực dễ mắc bệnh : {
                khuvuc.map((item,key)=>{
                    return (
                    key === khuvuc.length-1
                    ? <span className="font-weight-normal" key={key}>{item.ten_khuvuc.value}</span>
                    : <span className="font-weight-normal" key={key}>{item.ten_khuvuc.value}, </span>
                    )
                })
            }
            </p>
            <p className="font-weight-bold">Giai đoạn của lúa dễ mắc bệnh : 
                {
                    giaidoan.map((item,key)=>{
                        return(
                           <Popover key={key} content={
                               <div style={{maxWidth:"400px"}} >{item.mota.value}</div>
                                   } title={<p className="mb-0">{item.ten_giaidoan.value}</p>}>
                               <span className="font-weight-normal" style={{cursor : "pointer"}}> {key===giaidoan.length-1 ? item.ten_giaidoan.value : item.ten_giaidoan.value+", "} </span>
                           </Popover>)   
                       })
                }
            </p>
            </MDBTypography>
            </MDBCol>
            </>
        )
    }
}
export default NoteDisesea;