import React from 'react';
import { Link } from 'react-router-dom';
import { MDBCol ,MDBTypography} from 'mdbreact';
import Icon from '../UndrawDesigner/IconSVG'
export default function MediaControlCard(props) {
  if(props.results){
    console.log(props.results)
    return (
    <MDBCol>
       <MDBTypography component={'span'} note noteColor='warning' noteTitle={props.results.tenbenhlabel}> <Link target="_blank" to={{ pathname: "/benh/"+props.results.tenbenh.replace(/[/]/gi,' ') , query:{data: props.results.uri_benh}}} className="float-right"><Icon.Warning heigh="15" width="15" mr="mb-1"/></Link> 
        <p className="text-muted mb-0">Kháng bệnh: {
          props.results.khangbenh 
          ? (<span className="font-weight-bold text-success">Có</span>)
          : (<span className="font-weight-bold text-warning">Không</span>)
        }
        </p>  
      </MDBTypography>
    </MDBCol>
  );
  }else{
    return(
      <></>
    )
  }
  
}
