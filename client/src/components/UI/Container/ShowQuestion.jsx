import React , {useState} from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import ShowImage from './ShowImage'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
const ShowQuestion = (props) => {
    const [value, setValue] = useState('other')
    const [show,setShow] = useState(false)
    const handleCheckBox = (e)=>{
        setShow(!show)
    }
    const handleChange = (event) => {
        setValue(event.target.value);
      };
    return(
        <MDBCol md="12"  className=" pl-3 mb-0 pb-3 ">
            <div className="custom-control custom-checkbox custom-control-inline pt-1 ml-2" style={{fontSize:"20px"}}>
                <input type="checkbox" className="custom-control-input title-6" id={props.data.ten} value={props.data.ten} onChange={handleCheckBox} />
                <label className="custom-control-label title-6  mb-0 pb-0" htmlFor={props.data.ten} >{props.data.ten}</label>
            </div>
            <MDBCol md="12" className="mt-3" style={{ display: show ? "block" : "none" }}>
                    <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <MDBRow>
                            {
                                props.data.hinhanh.map((img,key)=>{
                                    return( <ShowImage key={key} hinhanh={img} />)
                                })
                            }
                        </MDBRow>
                    </RadioGroup>
                </FormControl>
            </MDBCol>
            
        </MDBCol>
    )
}
export default ShowQuestion 