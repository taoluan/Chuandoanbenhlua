import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { MDBCol ,MDBTypography} from 'mdbreact';
export default function MediaControlCard(props) {
  if(props.results){
    return (
    <MDBCol>
       <MDBTypography note noteColor='warning' noteTitle={"Bệnh "+props.results.tenbenh}>
        <p className="text-muted mb-0">Kháng bệnh: <span className="font-weight-bold text-warning">{props.results.khangbenh ? props.results.khangbenh : 'Không'}</span></p>  
      </MDBTypography>
    </MDBCol>
  );
  }else{
    return(
      <></>
    )
  }
  
}
