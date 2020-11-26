import React , {useState} from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import ShowImage from './ShowImage'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {addDisesea} from '../../../reduxToolkit/Slice/diseseaSlice'
import {  useSelector , useDispatch} from 'react-redux'
const ShowQuestion = (props) => {
    const  dispatch = useDispatch()
    const [value, setValue] = useState('other')
    const [show,setShow] = useState(false)
    const [changeimg, setChangeimg] = useState()
    const handleCheckBox = (e)=>{
       // console.log(e.target.value)
        if(!props.data.img){
          let data = {ten_trieuchung: e.target.value, vitri: props.vitri}
          console.log(data)
          dispatch(addDisesea(data))
        }
       // console.log(props.vitri)
        if(changeimg !== "other"){
       //     console.log(changeimg)
        }
       // props.oncheck({op: e.target.value})
        setShow(!show)
    }
    if(props.data.img){
        return(
        <MDBCol md="12"  className=" pl-3 mb-0 pb-3 ">
            <div className="custom-control custom-checkbox custom-control-inline pt-1 ml-2" style={{fontSize:"20px"}}>
                <input type="checkbox" className="custom-control-input title-6" id={props.data.ten_trieuchung} value={props.data.ten_trieuchung} 
                onChange={handleCheckBox} 
                onBlur={(e) => {
                    console.log('Triggered because this input lost focus');}}
                />
                <label className="custom-control-label title-6  mb-0 pb-0" htmlFor={props.data.ten_trieuchung} >{props.data.ten_trieuchung}</label>
            </div>
            <MDBCol md="12" className="mt-3" style={{ display: show ? "block" : "none" }} >
                    <FormControl component="fieldset" className="d-flex justify-content-center">
                            {
                                props.data.img.map((img,key)=>{
                                    return( <ShowImage key={key} hinhanh={img} value={props.data.ten_trieuchung} />)
                                })
                            }
                    </FormControl>
            </MDBCol>
            
        </MDBCol>
    )
    }else{
        return(
            <MDBCol md="12"  className=" pl-3 mb-0 pb-3 ">
            <div className="custom-control custom-checkbox custom-control-inline pt-1 ml-2" style={{fontSize:"20px"}}>
                <input type="checkbox" className="custom-control-input title-6" id={props.data.ten_trieuchung} value={props.data.ten_trieuchung} onChange={handleCheckBox} />
                <label className="custom-control-label title-6  mb-0 pb-0" htmlFor={props.data.ten_trieuchung} >{props.data.ten_trieuchung}</label>
            </div>            
        </MDBCol>
        )
    }
    
}
export default ShowQuestion 