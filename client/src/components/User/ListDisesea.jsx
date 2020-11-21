import { MDBContainer, MDBRow ,MDBCol,MDBTypography, MDBBox ,MDBBtn} from 'mdbreact';
import React,{useEffect} from 'react'
import {useParams} from "react-router-dom";
import Disesea from './Disesea'
import CarouselPage from '../UI/Container/ShowImgBenh'
import SpeedScroll from '../UI/Container/SpeedScroll'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import AppBar from '@material-ui/core/AppBar';

const DiseseaTag = () =>{
    const Params = useParams()
    useEffect(() => {
        document.querySelector('#benh').scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return(
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
                            <p className="title mt-4 mb-0">BỆNH BẠC LÁ</p>
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
                        <MDBTypography blockquote bqColor="primary" className="text-center mt-0 pt-0">
                            <MDBBox tag="p" mb={0}>
                            - Tên khoa học: Xanthomonas campestris pv. Oryzae Dowson
                            - Bệnh bạc lá lúa được phát hiện đầu tiên tại Nhật Bản vào khoảng năm 1884 - 1885. Bệnh phổ biến ở hầu khắp các nước trồng lúa trên thế giới, đặc biệt ở Nhật Bản, Trung Quốc, Philippines, Ấn Độ, Xaaylan. Ở Việt Nam, bệnh bạc lá lúa đã đươc phát hiện từ lâu trên các giống lúa mùa cũ. Đặc biệt, từ năm 1965 - 1966 trở lại đây, bệnh thường xuyên phá hoại một cách nghiêm trọng ở các vùng trồng lúa trên các giống nhập nội có năng suất cao cấy trong vụ chiêm xuân và đặc biệt ở vụ mùa. 
                            - Mức độ, tác hại của bệnh phụ thuộc vào giống, thời kỳ bị bệnh của cây sớm hay muộn và mức độ bị bệnh nặng hay nhẹ, bệnh làm cho lá lúa đặc biệt là lá đòng sớm tàn, nhanh chóng chết khô, bộ lá sơ xác, tỷ lệ hạt lép cao, năng suất giảm sút rõ rệt.
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
                    <li>Bệnh bạc lá lúa phát sinh phá hại suốt thời kỳ mạ đến khi lúa chín, nhưng có triệu chứng điển hình là thời kỳ lúa cấy tren ruộng từ sau khi lúa đẻ - trỗ - chín - sữa. </li>
                    <li>Vết bệnh triệu chứng bạc lá lúa giai đoạn mạ: Triệu chứng gây bệnh không đặc trưng như trên lúa, do đó dễ nhầm lẫn với các hiện tượng khô đầu lá lúa do sinh lý. Vi khuẩn hại mạ gây ra triệu chứng ở mép lá, mút lá với những vệt có độ dài ngắn khác nhau, có màu xanh vàng, nâu bạc rồi khô xác. </li>
                    <li>Vết bệnh triệu trứng bạc lá lúa trên cây lúa giai đoạn sinh trưởng: Triệu chứng bệnh biểu hiện rõ dệt hơn, tuy nhiên nó có thể biến đổi ít nhiều tùy theo giống và điều kiện ngoại cảnh. Vết bệnh từ mép lá, mút ls lan dần vào trong phiến lá hoặc kéo dài theo gân chính, nhưng cũng có vết bệnh từ ngay giữa phiến lá lan rộng ra. Vết bệnh lan rộng theo đường gợn sóng màu vàng, mô bệnh xanh tái, vàng lục, lá nâu bạc, khô xác. </li>
                    </MDBTypography>
                    </MDBCol>
                </MDBRow>
                <MDBRow id="hinhanh"> 
                    <MDBCol sm="12">
                    <CarouselPage/>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="d-flex justify-content-center" id="tachai">
                    <MDBCol sm="12">
                        <MDBRow className="d-flex justify-content-center">
                            <MDBCol size="12" className=" d-flex justify-content-center mt-5"> 
                                <div className=" d-flex justify-content-center align-items-center" style={{height:"40px" , width:"40px"}}>
                                    <img src={process.env.PUBLIC_URL + '/img/program.png'} height="40px" width="40px" alt=""/>
                                </div>
                            </MDBCol>
                            <MDBCol size="12" className=" d-flex justify-content-center mt-1">
                                <p className="title-9 mb-0">Đặc điểm phát sinh và phát triển</p>
                            </MDBCol>
                            <MDBCol md="8" size="12" className=" d-flex justify-content-center mt-1">
                                <MDBTypography blockquote bqColor="primary" className="text-center mt-0 pt-0">
                                    <MDBBox tag="p" mb={0}>
                                    - Tên khoa học: Xanthomonas campestris pv. Oryzae Dowson
                                    - Bệnh bạc lá lúa được phát hiện đầu tiên tại Nhật Bản vào khoảng năm 1884 - 1885.  bệnh bạc lá lúa đã đươc phát hiện từ lâu trên các giống lúa mùa cũ. Đặc biệt, 
                                    </MDBBox>
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
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
                                    Bệnh không những làm giảm năng suất, sản lượng lúa mà còn làm giảm phẩm chất của hạt gạo, nếu bán sẽ mất giá từ đó gây thất thu về mặt kinh tế cho bà con nông dân. Ngoài ra, nếu dùng làm giống thì chất lượng của hạt giống cũng kém, ảnh hưởng nhiều đến sinh trưởng và phát triển của cây lúa ở vụ sau, và đây cũng là nguồn bệnh ban đầu gây cho lúa ở vụ sau.
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
                                    - Tên khoa học: Xanthomonas campestris pv. Oryzae Dowson
                                    - Mức độ, tác hại của bệnh phụ thuộc vào giống, thời kỳ bị bệnh của cây sớm hay muộn và mức độ bị bệnh nặng hay nhẹ, bệnh làm cho lá lúa đặc biệt là lá đòng sớm tàn, nhanh chóng chết khô, bộ lá sơ xác, tỷ lệ hạt lép cao, năng suất giảm sút rõ rệt.
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
                                <MDBTypography blockquote bqColor="primary" className="text-center mt-0 pt-0">
                                    <MDBBox tag="p" mb={0}>
                                    - Tên khoa học: Xanthomonas campestris pv. Oryzae Dowson
                                    - Bệnh bạc lá lúa được phát hiện đầu tiên tại Nhật Bản vào khoảng năm 1884 - 1885. Bệnh phổ biến ở hầu khắp các nước trồng lúa trên thế giới, đặc biệt ở Nhật Bản, Trung Quốc, Philippines, Ấn Độ, Xaaylan. Ở Việt Nam, bệnh bạc lá lúa đã đươc phát hiện từ lâu trên các giống lúa mùa cũ. Đặc biệt, từ năm 1965 - 1966 trở lại đây, bệnh thường xuyên phá hoại một cách nghiêm trọng ở các vùng trồng lúa trên các giống nhập nội có năng suất cao cấy trong vụ chiêm xuân và đặc biệt ở vụ mùa. 
                                    - Mức độ, tác hại của bệnh phụ thuộc vào giống, thời kỳ bị bệnh của cây sớm hay muộn và mức độ bị bệnh nặng hay nhẹ, bệnh làm cho lá lúa đặc biệt là lá đòng sớm tàn, nhanh chóng chết khô, bộ lá sơ xác, tỷ lệ hạt lép cao, năng suất giảm sút rõ rệt.
                                    </MDBBox>
                                </MDBTypography>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </main>
        </div>
    )
}
export default DiseseaTag;