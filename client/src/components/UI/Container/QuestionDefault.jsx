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
const QuestionDefault = (props) => {
    const [value, setValue] = useState({
        khuvuc: null,
        vumua: null,
        giaidoan: null
    });
    const classes = useStyles();
    const handleChangeKhuVuc = (e) => {
        setValue({...value , khuvuc: e.target.value});
        props.khuvuc(e.target.value)
    }
    const handleChangeVuMua = (e) => {
        setValue({...value , vumua: e.target.value});
        props.vumua(e.target.value)
    }
    const handleChangeGiaiDoan = (e) => {
        setValue({...value , giaidoan: e.target.value});
        props.giaidoan( e.target.value)
    }
    return(
        <>
        <MDBCol size="12" className="pt-1 ">
            <Accordion className="m-0 p-0">
            <AccordionSummary
                className="m-0 p-0 border border-0"
                style={{backgroundColor: "#fce4ec"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <MDBTypography className="m-0 h-100" note noteColor='danger' noteTitle='Bắt buộc: '>
            <span className="title-5-1 pb-0 mb-0 mt-0"> Khu vực hiện tại ? </span>
            </MDBTypography>
            </AccordionSummary>
            <AccordionDetails>
                <MDBRow>
                    <FormControl  className="mt-0 ml-2" className={classes.formControl}>
                        <RadioGroup className="ml-3" aria-label="gender" name="khuvuc" value={props.data.khuvuc} onChange={handleChangeKhuVuc}>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Cửu_Long" control={<Radio color="primary"  />} label="Đồng bằng Sông Cửu Long"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Sông_Hồng" control={<Radio color="primary"  />} label="Đồng bằng Sông Hồng"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đồng_Bằng_Duyên_Hải_Miền_Trung" control={<Radio color="primary"  />} label="Đồng bằng Duyên Hải Miền Trung"/>
                        </RadioGroup>
                    </FormControl>
                </MDBRow>
            </AccordionDetails> 
            </Accordion>
        </MDBCol>
        <MDBCol size="12" className="pt-1 ">
            <Accordion className="m-0 p-0">
            <AccordionSummary
                className="m-0 p-0 border border-0"
                style={{backgroundColor: "#fce4ec"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <MDBTypography className="m-0 h-100" note noteColor='danger' noteTitle='Bắt buộc: '>
            <span className="title-5-1 pb-0 mb-0 mt-0"> Vụ mùa hiện tại ? </span>
            </MDBTypography>
            </AccordionSummary>
            <AccordionDetails>
                <MDBRow>
                    <FormControl  className="mt-0 ml-2" className={classes.formControl}>
                        <RadioGroup className="ml-3" aria-label="gender" name="vumua" value={props.data.vumua} onChange={handleChangeVuMua}>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Đông_Xuân" control={<Radio color="primary"  />} label="Vụ Đông Xuân"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Mùa" control={<Radio color="primary"  />} label="Vụ Mùa"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Hè_Thu" control={<Radio color="primary"  />} label="Vụ Hè Thu"/>
                        </RadioGroup>
                    </FormControl>
                </MDBRow>
            </AccordionDetails> 
            </Accordion>
        </MDBCol>
        <MDBCol size="12" className="pt-1 ">
            <Accordion className="m-0 p-0">
            <AccordionSummary
                className="m-0 p-0 border border-0"
                style={{backgroundColor: "#fce4ec"}}
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <MDBTypography className="m-0 h-100" note noteColor='danger' noteTitle='Bắt buộc: '>
            <span className="title-5-1 pb-0 mb-0 mt-0">Lúa đang ở giai đoạn nào ? </span>
            </MDBTypography>
            </AccordionSummary>
            <AccordionDetails>
                <MDBRow>
                    <FormControl  className="mt-0 ml-2" className={classes.formControl}>
                        <RadioGroup className="ml-3" aria-label="gender" name="giaidoan" value={props.data.giaidoan} onChange={handleChangeGiaiDoan}>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_mạ" control={<Radio color="primary"  />} label="Giai đoạn mạ"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_làm_đồng" control={<Radio color="primary"  />} label="Giai đoạn làm đồng"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_đẻ_nhánh" control={<Radio color="primary"  />} label="Giai đoạn đẻ nhánh"/>
                            <FormControlLabel value="http://www.semanticweb.org/tvanl/ontologies/2020/8/benhlua#Giai_đoạn_trổ-chín" control={<Radio color="primary"  />} label="Giai đoạn trổ chín"/>
                        </RadioGroup>
                    </FormControl>
                </MDBRow>
            </AccordionDetails> 
            </Accordion>
        </MDBCol>
        </>
    )
}
 const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
        },
        heading: {
          fontSize: theme.typography.pxToRem(15),
          fontWeight: theme.typography.fontWeightRegular,
        },
      }));
export default QuestionDefault