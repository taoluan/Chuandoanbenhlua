import React, { Component } from 'react';
import vnTopo from './mapvietnam.json'
import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
    Markers,
    Marker,
  } from "react-simple-maps"
import {geoAlbersUsa} from "d3-geo";
const paracelIslandGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XPI_0.json";

const spralyIslandGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XSP_0.json";
const vietnam = [vnTopo, paracelIslandGeoUrl, spralyIslandGeoUrl];
const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap
      data-tip=""
      projection="geoMercator"
      projectionConfig={{
          scale: 2000,
          center: [105, 16]
      }}
      style={{
        width: "100%",
        height: "auto"
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
                  onMouseEnter={() => {
                    const { NAME_0 } = geo.properties;
                    setTooltipContent(NAME_0);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#808080",
                      stroke: "#212529",
                      strokeWidth: 0.75,
                      outline: "none"
                    },
                    hover: {
                      fill: "#e6dfd9",
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
    
      </ZoomableGroup>
    </ComposableMap>
  )
};

export default MapChart;
