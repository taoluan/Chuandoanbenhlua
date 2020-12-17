import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed " >
            <a href="/admin" className="logo-wrapper waves-effect d-flex justify-content-center">
                <img alt="MDB React Logo" className="img-fluid " src={process.env.PUBLIC_URL + '/img/mbr-121x134.png'}/>
            </a>
            <MDBListGroup className="list-group-flush w-100" style={{width:"100%"}}>
                <NavLink exact={true} to="/admin/dashboard" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <img src={process.env.PUBLIC_URL + '/img/pie-chart.png'} height="25" width="25" alt="" className="mr-2 pb-1"/>
                        <span className="title-8 ">Thống kê</span>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/admin/diseseae" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <img src={process.env.PUBLIC_URL + '/img/folders.png'} height="25" width="25" alt="" className="mr-2 pb-1"/>
                        <span className="title-8 ">Danh sách bệnh</span>
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/admin/symptom" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <img src={process.env.PUBLIC_URL + '/img/photos.png'} height="25" width="25" alt="" className="mr-2 pb-1"/>
                        <span className="title-8 ">Triệu chứng</span>
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;