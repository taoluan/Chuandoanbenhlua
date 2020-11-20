import React, { Component,useState } from 'react';
import vnTopo from './mapvietnam.json'
import ReactTooltip from "react-tooltip";
import {MDBCard, MDBCardBody,MDBCardHeader} from 'mdbreact';
import ChartThongKeBenh from '../Charts/ThongKeBenh'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
  } from "react-simple-maps"
const markers = [
  { markerOffset: 15, name: "Đồng bằng Sông Cửu Long", coordinates: [105.74296529,10.04194564]},
  { markerOffset: 15, name: "Đồng bằng Sông Hồng", coordinates: [106.07953938,20.64786993] },
  { markerOffset: 15, name: "Đồng bằng Duyên Hải Miền Trung", coordinates: [107.61177520,16.47953022] },
];
const paracelIslandGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XPI_0.json";

const spralyIslandGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XSP_0.json";
const vietnam = [vnTopo, paracelIslandGeoUrl, spralyIslandGeoUrl];
const MapChart = () => {
  const [content, setcontext] = useState()
  return (
    <>
    <ComposableMap
      data-tip=""
      projection="geoMercator"
      projectionConfig={{
          scale: 3100,
          center: [106, 16]
      }}
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <ZoomableGroup>
        {vietnam.map((geoUrl) => (
          <Geographies key={geoUrl} geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#d4d1cb",
                      stroke: "#212529",
                      strokeWidth: 0.75,
                      outline: "none"
                    },
                    hover: {
                      fill: "#f05316",
                      stroke: "#212529",
                      strokeWidth: 0.75,
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        ))}
              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} style={{cursor: "pointer"}} coordinates={coordinates} onMouseEnter={()=>{setcontext(name)}} onMouseLeave={()=>{setcontext()}}>
                  <g
                    fill="none"
                    stroke="#FF5533"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    transform="translate(-12, -24)"
                    style={{cursor: "pointer"}}
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                  </g>
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fill: "black" , color: 'black' , fontSize: "30px" , fontWeight: 'bold'}}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
      </ZoomableGroup>
    </ComposableMap>
    {content === "Đồng bằng Sông Cửu Long" 
      ? <ReactTooltip place="right" type="light">
          <MDBCard className="pb-0 mb-0 pl-0 pr-0 ml-0">
            <MDBCardHeader className="pb-0">
              <p className="font-weight-bold text-dark">Thống kê các loại bệnh ở ĐB Sông Cửu Long</p>
            </MDBCardHeader>
            <MDBCardBody>
                <ChartThongKeBenh/>
            </MDBCardBody>
          </MDBCard>
      </ReactTooltip>
      : (content === "Đồng bằng Sông Hồng")
      ? <ReactTooltip place="right">
            <MDBCard className="pb-0">
              <MDBCardHeader className="pb-0">
                <p className="font-weight-bold text-dark">Thống kê các loại bệnh ở ĐB Sông Hồng</p>
              </MDBCardHeader>
              <MDBCardBody>
                  <ChartThongKeBenh/>
              </MDBCardBody>
            </MDBCard>
        </ReactTooltip>
      : (content === "Đồng bằng Duyên Hải Miền Trung") 
      && <ReactTooltip place="right">
            <MDBCard className="bg-blue">
              <MDBCardHeader className="pb-0">
                <p className="font-weight-bold text-dark">Thống kê các loại bệnh ở ĐB Duyên Hải Miền Trung</p>
              </MDBCardHeader>
              <MDBCardBody>
                  <ChartThongKeBenh/>
              </MDBCardBody>
            </MDBCard>
        </ReactTooltip>
      }
    </>
  )
};

export default React.memo(MapChart) ;
