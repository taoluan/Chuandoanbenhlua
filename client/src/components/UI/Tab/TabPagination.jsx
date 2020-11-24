import React, {useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';
import CardDisesea from '../Card/CardDisesea'
import {MDBRow,MDBCol} from 'mdbreact'
import diseseaApi from '../../../api/diseseaApi'
const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const TabPagination = (props) =>{
  const classes = useStyles();
  const [page, setPage] = useState(1);
  const [option, setOption] = useState(props.option)
  const [items,setItem] = useState([])
  const handleChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    const fetchdanhsachbenh =async ()=>{
      try {
        const params = {
            loaibenh : option ,
            page : page
        }
        const respose = await diseseaApi.dsBenh(params)
        setItem(respose)
      } catch (error) {
        
      }
    }
    fetchdanhsachbenh()
  }, [page])
  return (
    <div className={classes.root}>
        <MDBRow >
          {
            items.map((x,y)=>{
              return(
                <MDBCol key={y} sm="6" xl="3" md="6" lg="3"  className="pb-2">
                  <CardDisesea item = {x}/>
                </MDBCol>
              )
            })
          }
            
        </MDBRow>
        <MDBRow className="d-flex justify-content-center" >
             <Pagination count={Math.ceil(props.total/8)} page={page} onChange={handleChange} color="secondary" />
        </MDBRow>
     
    </div>
  );
}
export default TabPagination