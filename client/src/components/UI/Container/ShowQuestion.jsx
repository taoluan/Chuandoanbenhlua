import React , {useState,useEffect} from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import ShowImage from './ShowImage'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {addDisesea , removeDisesea , addDiseseaImage} from '../../../reduxToolkit/Slice/diseseaSlice'
import {  useSelector , useDispatch} from 'react-redux'

const ShowQuestion = (props) => {
    const  dispatch = useDispatch()
    const dstrieuchung = useSelector(state=>state.disesea.chuandoan)
    const [value, setValue] = useState()
    const [show,setShow] = useState(false)
    const [changeimg, setChangeimg] = useState()
    const [check, setCheck] = useState(false)
    const [checkedOk, setcheckedOk] = useState(props.data)
    const [data , setData] = useState([])
    // useEffect(() => {
    //     let checkdata = {
    //         ten_trieuchung: props.data.ten_trieuchung,
    //         vitri: props.vitri
    //     }
    //     if(checkArray(dstrieuchung,checkdata)){
    //             // setcheckedOk({
    //             //     ...checkedOk,
    //             //     checked:true
    //             // })
    //             setCheck(true)
    //             setShow(true)
    //         }
    //     /*let hasImage = {
    //         ten_trieuchung: props.data.ten_trieuchung,
    //         vitri: props.vitri
    //     }
    //     if(checkArray(dstrieuchung,checkdata)){
    //         setCheck(true)
    //         setShow(true)
    //     }*/
    // }, [dstrieuchung]);
    const handleCheckBox = (e)=>{
        if(!props.data.img){
          if(e.target.checked){
            let data = {ten_trieuchung: e.target.value, vitri: props.vitri}
            dispatch(addDisesea(data))

          }else{
            let data = {ten_trieuchung: e.target.value, vitri: props.vitri}
            dispatch(removeDisesea(data))
          }
          
        }else{
            setShow(!show)
            let data = {ten_trieuchung: props.data.ten_trieuchung , vitri: props.vitri}
            dispatch(removeDisesea(data))
        }
        //console.log(checkedOk)
        setCheck(e.target.checked)
    }
    const handleChange = (e) => {
        if(e.target.checked){
            let data = {ten_trieuchung: props.data.ten_trieuchung ,hinhanh: e.target.value, vitri: props.vitri}
            dispatch(addDiseseaImage(data))
            setChangeimg(e.target.value)
        }else{
            let data = {ten_trieuchung: props.data.ten_trieuchung ,hinhanh: e.target.value, vitri: props.vitri}
            dispatch(removeDisesea(data))
        }
    };
    if(props.data.img){
        return(
        <MDBCol md="12"  className=" pl-3 mb-0 ">
            <FormControlLabel
                control={<Checkbox checked={props.data.checked} color="primary" value={props.data.ten_trieuchung} onChange={handleCheckBox}/>}
                label={props.data.ten_trieuchung}
            />
            <MDBCol md="12" className="mt-3" style={{ display: show ? "block" : "none" }} >
                    <FormControl component="fieldset" className="d-flex justify-content-center">
                            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange} className="w-100">
                                <MDBRow className="d-flex justify-content-center">
                                {
                                    props.data.img.map((img,key)=>{
                                        return( <ShowImage key={key} hinhanh={img} value={changeimg} trieuchung={props.data.ten_trieuchung} vitri={props.vitri} />)
                                    })
                                }
                                </MDBRow>
                            </RadioGroup>
                    </FormControl>
            </MDBCol>
            
        </MDBCol>
    )
    }else{
        return(
            <MDBCol md="12"  className=" pl-3 mb-0  ">
                <FormControlLabel
                control={<Checkbox checked={props.data.checked} color="primary" value={props.data.ten_trieuchung} onChange={handleCheckBox} name={props.data.ten_trieuchung} />}
                label={props.data.ten_trieuchung}
            />           
        </MDBCol>
        )
    }
    
}
const checkArray = (list, object)=>{
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].ten_trieuchung === object.ten_trieuchung && list[i].vitri === object.vitri) {
            return true;
        }
    }
    return false;
}

// const checkArrayhasImahe = (list, object)=>{
//     let i;
//     for (i = 0; i < list.length; i++) {
//         if (list[i].ten_trieuchung === object.ten_trieuchung && list[i].vitri === object.vitri && list[i].hinhanh === object.hinhanh) {
//             return true;
//         }
//     }
//     return false;
// }
export default React.memo(ShowQuestion)