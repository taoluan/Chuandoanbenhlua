import React, { useState } from 'react'
import { MDBTypography,MDBInput, MDBRow, MDBCol } from 'mdbreact';
import { makeStyles } from '@material-ui/core/styles';
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

const QuestionForm = (props) => {
    const [defaultInline3,setdefaultInline3] = useState(false)
    const classes = useStyles();
    if(props.results.length > 0){
    return(
        <>
        {
            props.results.map((x,key)=>{
                return(
                    <MDBCol key={key} size="12" className="pt-1 ">
                        <MDBTypography  note noteColor='warning' noteTitle='Quan sát: '>
                        <span className="title-5 pb-0 mb-0"> Triệu chứng xuất hiện trên {x.vi_tri} ? </span>
                        </MDBTypography>
                        <MDBRow>
                        <FormControl component="fieldset" className="mt-0" className={classes.formControl}>
                            <FormGroup>
                                <MDBRow > 
                                {
                                    x.data.map((trieuchung,key)=>{
                                    return ( <ShowQuestion key={key} data={trieuchung} vitri={x.vi_tri} />)
                                    })
                                }
                                </MDBRow>
                            </FormGroup>
                        </FormControl>
                        </MDBRow>
                    </MDBCol>
                )
            })
        }
        
        </>
    )
    }else{
        return(
            <></>
        )
    }
}
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      marginLeft: '24px',
      marginRight: '24px',
      marginTop: '10px',
      marginBottom: '10px'
    },
  }));
export default QuestionForm