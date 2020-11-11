import React from "react";
import vnTopo from './mapvietnam.json'

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Markers,
  Marker
} from "react-simple-maps";
const vietnamGeoUrl =
  "https://gist.githubusercontent.com/tvanluanst/e0861ba073d940bb805b1a646c9d1ddb/raw/ad1e95c43ef4e32f954addccc4b1a74bf1ad0908/vietnam_map";

const paracelIslandGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XPI_0.json";

const spralyIslandGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XSP_0.json";
  const vietnam = [vietnamGeoUrl, paracelIslandGeoUrl, spralyIslandGeoUrl];
const MapChart = (setTooltipContent) => {
  return (
    <ComposableMap
      data-tip=""
      projection="geoMercator"
      projectionConfig={{
        scale: 2000,
        center: [106, 15]
      }}
      style={{
        width: "100%",
        height: "auto"
      }}
    >
      <ZoomableGroup>
          <Geographies key={vietnamGeoUrl} geography={vietnamGeoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME_0 } = geo.properties;
                   
                  }}
                  onMouseLeave={() => {
                    
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
        ))
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
