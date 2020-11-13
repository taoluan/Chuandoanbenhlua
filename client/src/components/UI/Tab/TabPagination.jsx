import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import CardDisesea from '../Card/CardDisesea'
import {MDBRow,MDBCol} from 'mdbreact'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const TabPagination = () =>{
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={classes.root}>
        <MDBRow>
            <MDBCol sm="6" xl="3" md="6"  className="pb-2">
            <CardDisesea/>
            </MDBCol>
            <MDBCol sm="6" xl="3" md="6"  className="pb-2">
            <CardDisesea/>
            </MDBCol>
            <MDBCol sm="6" xl="3" md="6"  className="pb-2">
            <CardDisesea/>
            </MDBCol>
            <MDBCol sm="6" xl="3" md="6" className="pb-2">
            <CardDisesea/>
            </MDBCol>
            <MDBCol sm="6" xl="3" md="6"  className="pb-2">
            <CardDisesea/>
            </MDBCol>
            <MDBCol sm="6" xl="3" md="6"  className="pb-2">
            <CardDisesea/>
            </MDBCol>
            <MDBCol sm="6" xl="3" md="6" className="pb -2">
            <CardDisesea/>
            </MDBCol>
        </MDBRow>
        <MDBRow className="d-flex justify-content-center">
             <Pagination count={3} page={page} onChange={handleChange} color="secondary" />
        </MDBRow>
     
    </div>
  );
}
export default TabPagination