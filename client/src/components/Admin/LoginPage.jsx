import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Redirect,Route,useHistory,BrowserRouter} from 'react-router-dom';
import diseseaApi from '../../api/diseseaApi'
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import OtpInput from 'react-otp-input';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/formphone.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import Header from '../UI/Header/Header'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    background: `url('${process.env.PUBLIC_URL}/img/bg.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginTop: theme.spacing(4)
  },
  form: {
    width: '80%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  form1: {
    width: '50%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 6),
  },
}));

export default function SignInSide() {
    const classes = useStyles();
    const [phone, setphone] = useState();
    const [check, setcheck] = useState(false);
    const [otp, setotp] = useState('');
    const [logincheck, setlogincheck] = useState(false);
    const history = useHistory();
    const handlePhone = async () => {
        if(phone){
            const respose = await diseseaApi.checkPhone({number : phone})
            if(respose.status){
                setcheck(true)
            }else{
                alert(respose.message)
            }
        }else{
            alert('no no')
        }
    }
    const handleOTP = async () => {
        if(otp.length == 4){
          const checkOTP = await diseseaApi.checkOTP({phone: phone , otp : otp})
          if(checkOTP.status){
            await localStorage.setItem('token', checkOTP.token)
            setlogincheck(true)
          }else{
            alert(checkOTP.message)
          }
        }else{
            alert("no no")
        }
    }
    return(
  logincheck
  ? (
    <Redirect to={{
      pathname:"/admin",
      }}/>
  )
  :(
    
     <>
    <Header url={true}/>
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <img alt="MDB React Logo" className="img-fluid " height="50" width="50" src={process.env.PUBLIC_URL + '/img/mbr-121x134.png'}/>
          </Avatar>
          <div className={classes.form1} id="form-phone" style={{ display: !check ? "block" : "none" }}> 
          <Typography component="h1" variant="h5" className="text-center mb-4 title-4 mt-3">
            Đăng nhập
          </Typography>
            <PhoneInput
                country={'vn'}
                value={phone}
                onChange={phones => setphone(phones)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>handlePhone()}
            >
              Đăng nhập
            </Button>
          </div>
          <div className={classes.form} id="form-phone-otp" style={{ display: check ? "block" : "none" }}>
            <Typography component="h1" variant="h5" className="text-center mb-4 title-4 mt-3">
                Nhập mã OTP
            </Typography>
            <OtpInput
                value={otp}
                onChange={otps => setotp(otps)}
                numInputs={4}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={()=>handleOTP()}
            >
              Nhập OTP
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
    </>
  )
)
}
