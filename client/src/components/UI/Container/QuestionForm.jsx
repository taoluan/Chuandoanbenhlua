import React, { useState,useEffect} from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import ShowQuestion from './ShowQuestion'
import { Hidden } from '@material-ui/core';
import LightboxPage from './LightboxPage';
import {  useSelector , useDispatch} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const checkArray = (list, object,vitri)=>{
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].ten_trieuchung === object.ten_trieuchung && list[i].vitri === object.vitri) {
            return {result: true , vitri:i};
        }
    }
    return {result: false};
  }
const QuestionForm = (props) => {
    const classes = useStyles();
    const dstrieuchung = useSelector(state=>state.disesea.chuandoan)
    const [data , setData] = useState([])
    //console.log(data)
    // useEffect(() => {
    //     if(checkArray(dstrieuchung,checkdata)){
    //         setCheck(true)
    //         setShow(true)
    //     }
    //     /*let hasImage = {
    //         ten_trieuchung: props.data.ten_trieuchung,
    //         vitri: props.vitri
    //     }
    //     if(checkArray(dstrieuchung,checkdata)){
    //         setCheck(true)
    //         setShow(true)
    //     }*/

    // }, [dstrieuchung]);
    // console.log(props.results)
    // if(props.results.length > 0){
    // useEffect(() => {
    //     let arrNew = [...props.results.data]
    //     dstrieuchung.map(x=>{
    //         if(checkArray(arrNew,x).result){
    //             let vitri = checkArray(arrNew,x).vitri
    //             let temp = arrNew[vitri]
    //             temp.checked = true
    //             arrNew[vitri] = temp
    //         }
    //     })
    //     setData(arrNew)
    // },[props.results])
    return(
        // <>
        // {   
        //     props.results.map((x,key)=>{
        //         return(
                    // <MDBCol size="12" className="pt-1 ">
                        <Accordion className="m-0 p-0 w-100">
                        <AccordionSummary
                            className="m-0 p-0 border border-0"
                            style={{backgroundColor: "#faf4e0"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                        <MDBTypography className="m-0 h-100" note noteColor='warning' noteTitle='Quan sát: '>
                        <span className="title-5-1 pb-0 mb-0 mt-0"> Triệu chứng xuất hiện trên <span className="font-weight-bold text-muted title-5">{props.results.vi_tri}</span>  ? </span>
                        </MDBTypography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <MDBRow>
                                <FormControl  className="mt-0" className={classes.formControl}>
                                    <FormGroup>
                                        
                                        {/* <ShowQuestion key={key} data={x.data} vitri={x.vi_tri} /> */}
                                        {
                                            props.results.data.map((trieuchung,key)=>{
                                                return ( <ShowQuestion key={key} data={trieuchung} vitri={props.results.vi_tri} />)
                                            })
                                        }
                                 
                                    </FormGroup>
                                </FormControl>
                            </MDBRow>
                        </AccordionDetails>
                            
                        </Accordion>
                    // </MDBCol>
        //         )
        //     })
        // }
        
        // </>
    )
    // }else{
    //     return(
    //         <></>
    //     )
    // }
}
// const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//     },
//     formControl: {
//       marginLeft: '24px',
//       marginRight: '24px',
//       marginTop: '10px',
//       marginBottom: '10px'
//     },
//   }));
export default QuestionForm