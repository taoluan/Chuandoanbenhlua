import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { MDBRow } from 'mdbreact';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height:'100%'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
    background: "rgba(255, 255, 255, 0.0)"
  },
}));

function getSteps() {
  return ['Triệu chứng', 'Quan sát và tìm các triệu chứng tiếp theo', 'Kết quả chuẩn đoán'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
      <div>
        <span className="text-dark"> <span className="font-weight-bold">Bước 1:</span>  Nhập triệu chứng mà bạn thấy được trên Lúa</span>  
        <img src={process.env.PUBLIC_URL + '/img/b1.png'} alt="" height="50px" className="img-fluid"/>
      </div>);
    case 1:
      return  (
        <div>
          <span className="text-dark"> <span className="font-weight-bold">Bước 2:</span>  Quan sát các triệu chứng tiếp theo</span>  
          <img src={process.env.PUBLIC_URL + '/img/chuandoan.png'} alt="" height="50px" className="img-fluid "/>
        </div>);
    case 2:
      return (
        <div>
          <span className="text-dark"> <span className="font-weight-bold">Bước 3:</span>  Xem tỷ lệ bệnh có khả năng mắc cao nhất</span>  
          <img src={process.env.PUBLIC_URL + '/img/ketqua.png'} alt="" height="50px" className="img-fluid "/>
        </div>);
    default:
      return 'Unknown step';
  }
}

export default function StepperHome() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" style={{background: "rgba(255, 255, 255, 0.0)"}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <div>{getStepContent(index)}</div>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography component="span">Dựa theo các triệu chứng của bạn hệ thống sẽ đưa ra tỷ lệ mắc bệnh trên Lúa </Typography>
          <Button onClick={handleReset} className="${classes.button}+ btn-primary">
              Làm lại
          </Button>
        </Paper>
      )}
    </div>
  );
}
