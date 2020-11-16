import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import BugReportIcon from '@material-ui/icons/BugReport';
import GestureIcon from '@material-ui/icons/Gesture';
import InfoIcon from '@material-ui/icons/Info';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import BubbleChartIcon from '@material-ui/icons/BubbleChart';
import InvertColorsOffIcon from '@material-ui/icons/InvertColorsOff';
import AdbIcon from '@material-ui/icons/Adb';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
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
    height: 264,
    flexGrow: 1,
    maxWidth: 900,
  },
});

const GmailTreeView = ({show}) =>{
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
      onNodeSelect={(e,value)=>{show(e,value)}}
    >
      <StyledTreeItem nodeId="1" labelText="Sâu" labelIcon={EmojiNatureIcon} labelInfo="10"  color="#03a9f4" bgColor="#e1f5fe">
      </StyledTreeItem>
      <StyledTreeItem nodeId="2" labelText="Virus" labelIcon={AdbIcon} color="#a250f5" bgColor="#f3e8fd">
      <StyledTreeItem
          nodeId="ghg"
          labelText="Vàng lùn"
          labelIcon={InfoIcon}
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Lùn xoắn lá"
          labelIcon={InfoIcon}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="3" labelText="Vi khuẩn" labelIcon={BugReportIcon} labelInfo="18" color="#33691e" bgColor="#dcedc8">
        <StyledTreeItem
          nodeId="9"
          labelText="Vàng lùn 1"
          labelIcon={InfoIcon}
        />
        <StyledTreeItem
          nodeId="10"
          labelText="Lùn xoắn lá 2"
          labelIcon={InfoIcon}
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="Tuyến trùng" labelIcon={GestureIcon} color="#ff80ab" bgColor="#fce4ec">
      </StyledTreeItem>
      <StyledTreeItem nodeId="5" labelText="Nấm" labelIcon={BubbleChartIcon} color="#f4511e" bgColor="#fbe9e7 ">
      </StyledTreeItem>
      <StyledTreeItem nodeId="6" labelText="Thiếu dinh dưỡng" labelIcon={InvertColorsOffIcon} color="#f57f17" bgColor="#fff9c4 ">
      </StyledTreeItem>
    </TreeView>
  );
}
export default GmailTreeView