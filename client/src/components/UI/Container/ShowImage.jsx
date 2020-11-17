import React, { useState } from 'react'
import {MDBRow, MDBCol } from 'mdbreact';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
function ShowImage(props){
    const [value, setValue] = React.useState('other')
    const handleChange = (event) => {
        setValue(event.target.value);
      };
        return(
            <MDBCol md="12" className="mt-3" style={{ display: props.show ? "block" : "none" }}>
                    <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <MDBRow>
                            <MDBCol sm="4">
                                <MDBCol sm="12">
                                    <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />  
                                </MDBCol>
                                <MDBCol sm="12" className="d-flex justify-content-sm-center">
                                    <FormControlLabel value="famale" control={<Radio color="primary" />} labelPlacement="top"/>
                                </MDBCol>
                            </MDBCol>
                            <MDBCol sm="4" >
                                <MDBCol sm="12">
                                    <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />  
                                </MDBCol>
                                <MDBCol sm="12" className="d-flex justify-content-sm-center">
                                    <FormControlLabel value="male" control={<Radio color="primary" />} labelPlacement="top"/>
                                </MDBCol>
                            </MDBCol>
                            <MDBCol sm="4" className="d-flex align-items-end">
                                <MDBCol sm="12" className="d-flex justify-content-sm-center">
                                    <FormControlLabel value="other" control={<Radio color="primary" />} label="Dấu hiệu khác" labelPlacement="top"/>
                                </MDBCol>
                            </MDBCol>
                        </MDBRow>
                    </RadioGroup>
                </FormControl>
                </MDBCol>
            )

    
}
export default ShowImage