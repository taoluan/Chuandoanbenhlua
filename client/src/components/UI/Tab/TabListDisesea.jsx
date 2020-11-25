import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {  useSelector} from 'react-redux'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import GestureIcon from '@material-ui/icons/Gesture';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TabList } from '@material-ui/lab';
import Paper from '@material-ui/core/Paper';
import {MDBCol, MDBIcon, MDBRow} from 'mdbreact';
import BugReportOutlinedIcon from '@material-ui/icons/BugReportOutlined';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import CardDisesea from '../Card/CardDisesea'
import TabPagination from './TabPagination'
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import Icon from '../UndrawDesigner/IconSVG'

const TabListDisesea = ()=> {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const sobenh = useSelector(state => state.disesea.sobenh)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
    <Paper className={classes.root} className=" blue lighten-4" >
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="icon label tabs example"
        >
            <Tab icon={<Icon.Sau height="30" width="30"/>} label="Sâu"  />
            <Tab icon={<Icon.Virus height="30" width="30"/>} label="Virus" />
            <Tab icon={<Icon.ViKhuan height="30" width="30"/>} label="Vi khuẩn" />
            <Tab icon={<Icon.TuyenTrung height="30" width="30"/>} label="Tuyến trùng" />
            <Tab icon={<Icon.Nam height="30" width="30"/>} label="Nấm" />
            <Tab icon={<Icon.ChatDinhDuong height="30" width="30"/>} label="Thiếu dinh dưỡng" />
        </Tabs>
    </Paper>
      <TabPanel value={value} index={0} >
        <MDBRow>
          <MDBCol sm="12" >
          <TabPagination option="Sâu_Hại" total={sobenh.dataset ? sobenh.dataset[1] : 1}/>
          </MDBCol>
        </MDBRow>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MDBRow>
            <MDBCol sm="12" >
            <TabPagination option="Virus" total={sobenh.dataset ? sobenh.dataset[5] : 1}/>
            </MDBCol>
        </MDBRow>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MDBRow>
            <MDBCol sm="12" >
            <TabPagination option="Vi_Khuẩn" total={sobenh.dataset ? sobenh.dataset[4] : 1}/>
            </MDBCol>
        </MDBRow>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <MDBRow>
            <MDBCol sm="12" >
            <TabPagination option="Tuyến_Trùng" total={sobenh.dataset ? sobenh.dataset[3] : 1}/>
            </MDBCol>
        </MDBRow>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <MDBRow>
            <MDBCol sm="12">
            <TabPagination option="Nấm" total={sobenh.dataset ? sobenh.dataset[0] : 1}/>
            </MDBCol>
        </MDBRow>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <MDBRow>
            <MDBCol sm="12" >
            <TabPagination option="Thiếu_Chất_Dinh_Dưỡng" total={sobenh.dataset ? sobenh.dataset[2] : 1}/>
            </MDBCol>
        </MDBRow>
      </TabPanel>
    </div>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));
export default  TabListDisesea;