import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import BugReportIcon from '@material-ui/icons/BugReport';
import GestureIcon from '@material-ui/icons/Gesture';
import InfoIcon from '@material-ui/icons/Info';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import AdbIcon from '@material-ui/icons/Adb';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import Icon from '../UndrawDesigner/IconSVG'
import diseseaApi from '../../../api/diseseaApi'
import FetchTreeItem from './FetchTreeItem'
const GmailTreeView = ({show}) =>{
  const classes = useStyles();
  const [dsbenh, setBenh] = useState([])
  useEffect(() => {
    const fetchdanhsachbenh =async ()=>{
      try {
        const respose = await diseseaApi.dsBenhNoType()
        setBenh(respose)
      } catch (error) {
        
      }
    }
    fetchdanhsachbenh()
  }, [])
  if(dsbenh.length > 0){
    return (
      <TreeView
        className={classes.root}
        defaultExpanded={['Vi Khuẩn']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        {
          dsbenh.map((x,key)=>{
            if(x.loaibenh === "Sâu"){
              return(
                <FetchTreeItem key={key} dsbenh={x} icon={IconSau} evShow={show}/>
              )
            }else if(x.loaibenh ==="Nắm"){
              return(
                <FetchTreeItem key={key} dsbenh={x} icon={IconNam} evShow={show}/>
              )
            }else if(x.loaibenh ==="Thiếu Chất Dinh Dưỡng"){
              return(
                <FetchTreeItem key={key} dsbenh={x} icon={IconChatDD} evShow={show}/>
              )
            }else if(x.loaibenh === "Vi Khuẩn"){
              return(
                <FetchTreeItem key={key} dsbenh={x} icon={IconVikhuan} evShow={show}/>
              )
            }else if(x.loaibenh ==="Tuyến Trùng"){
              return(
                <FetchTreeItem key={key} dsbenh={x} icon={IconTuyentrung} evShow={show}/>
              )
            }else {
              return(
                <FetchTreeItem key={key} dsbenh={x} icon={IconVirus} evShow={show}/>
              )
            }
          })
        }
      </TreeView>
    );
  }else{
    return(
      <>
      </>
    )
  }
}
const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[500]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;
  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography component="span" variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 900,
  },
});
const IconSau = ()=>{
    return (
      <Icon.Sau height="30" width="30" mr="mr-2"/>
    )
}
const IconVirus = ()=>{
  return (
    <Icon.Virus height="30" width="30" mr="mr-2"/>
  )
}
const IconTuyentrung = ()=>{
  return (
    <Icon.TuyenTrung height="30" width="30" mr="mr-2"/>
  )
}
const IconVikhuan = ()=>{
  return (
    <Icon.ViKhuan height="30" width="30" mr="mr-2"/>
  )
}
const IconNam = ()=>{
  return (
    <Icon.Nam height="30" width="30" mr="mr-2"/>
  )
}
const IconChatDD = ()=>{
  return (
    <Icon.ChatDinhDuong height="30" width="30" mr="mr-2"/>
  )
}
const IconWarning = ()=>{
  return(
    <Icon.Warning  height="10pt" width="10pt" mr="mr-2"/>
  )
}
export default GmailTreeView