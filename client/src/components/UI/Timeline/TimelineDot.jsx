import TimelineDot from '@material-ui/lab/TimelineDot';
import Icon from '../UndrawDesigner/IconSVG'
import React,{useEffect,useState} from 'react';
const TimelineDots = (props) => {
    const [option,setOption] = useState(props.option)
    let vitri = [{icon : <Icon.LaIcon /> , op: ['Bẹ lá' , 'Lá', 'Chóp lá', 'Phiến lá'] },
                    {icon:'Than' , op: ['Thân'] },
                    {icon:'Hat' ,  op: ['Vỏ hạt','Hạt'] },
                    {icon: 'Re', op: ['Rễ'] },
                    {icon:'Quan the', op: ['Quần thể'] },
                    {icon:'Bong', op: ['Bông','Cổ bông'] }]
    if(props.option.includes('lá') ){
        return (
            <TimelineDot color="secondary">
                <Icon.LaIcon />
            </TimelineDot>
        )
    }else if(props.option.includes('thân') || props.option.includes('đốt') || props.option.includes('ống rạ')){
        return (
            <TimelineDot className="blue lighten-2">
                <Icon.ThanIcon />
            </TimelineDot>
        )
    }else if(props.option.includes('hạt')){
        return (
            <TimelineDot className="lime lighten-3">
                <Icon.HatIcon />
            </TimelineDot>
        )
    }else if(props.option.includes('rễ')){
        return (
            <TimelineDot className="yellow lighten-3">
                <Icon.ReIcon  />
            </TimelineDot>
        )
    }else if(props.option.includes('bông')){
        return (
            <TimelineDot className="yellow lighten-3">
                <Icon.BongIcon/>
            </TimelineDot>
        )
    }else if(props.option.includes('thể') || props.option.includes('chồi')){
        return (
            <TimelineDot className="blue lighten-3">
                <Icon.DongIcon/>
            </TimelineDot>
        )
    }
    
}
export default React.memo(TimelineDots)
