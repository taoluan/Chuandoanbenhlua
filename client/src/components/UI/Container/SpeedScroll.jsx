import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import AppBar from '@material-ui/core/AppBar';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginTop: theme.spacing(3),
  },
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
}));

const actions = [
  { icon: <img src={process.env.PUBLIC_URL + '/img/seo.png'} height="30px" width="30px" alt=""/>, name: 'Tìm kiếm' , scroll: '#timkiem' },
  { icon: <img src={process.env.PUBLIC_URL + '/img/network.png'} height="30px" width="30px" alt=""/>, name: 'Mô tả', scroll: '#mota' },
  { icon: <img src={process.env.PUBLIC_URL + '/img/emergency.png'} height="30px" width="30px" alt=""/>, name: 'Triệu chứng',scroll: '#trieuchung' },
  { icon: <img src={process.env.PUBLIC_URL + '/img/pictures.png'} height="30px" width="30px" alt=""/>, name: 'Hình ảnh' ,scroll: '#hinhanh'},
  { icon: <img src={process.env.PUBLIC_URL + '/img/cross.png'} height="30px" width="30px" alt=""/>, name: 'Tác hại, nguyên nhân và điều trị',scroll: '#tachai' },
  { icon: <img src={process.env.PUBLIC_URL + '/img/note.png'} height="30px" width="30px" alt=""/>, name: 'Thông tin thêm',scroll: '#motathem' },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
};
  const handleCloseAc =(action)=>{
    document.querySelector(action).scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={classes.root}>
        <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            className={classes.speedDial}
            hidden={hidden}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            {actions.map((action) => (
            <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={()=>{handleCloseAc(`${action.scroll}`)}}
            />
            ))}
        </SpeedDial>
    </div>
  );
}
