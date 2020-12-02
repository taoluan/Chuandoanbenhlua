import React, { useState , useEffect } from 'react';
import { Popover, Button } from 'antd';
import diseseaApi from '../../../api/diseseaApi'
import Icon from '../UndrawDesigner/IconSVG'
import {  useSelector , useDispatch} from 'react-redux'
const checkArray = (list, object)=>{
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].ten_trieuchung === object.ten_trieuchung && list[i].vitri === object.vitri) {
            return {result: true , vitri:i};
        }
    }
    return {result: false};
}

const Popovers = (props) => {
    const [data, setdata] = useState([]);
    const [dataResult, setdataResult] = useState([]);
    const [test, settest] = useState({});
    const dataRidux = useSelector(state=>state.disesea.chuandoan)
    // useEffect(() => {
    //     const fetchTrieuChung = async ()=>{
    //         const respose = await diseseaApi.getTrieuChung({uri_benh: props.uri})
    //         let arr = []
    //         respose.map(x=>{
    //             arr.push({ten_trieuchung : x.ten_trieuchung.value , vitri: x.vitri.value , check : false})
    //         })
    //         setdata(arr)
    //     }
    //     fetchTrieuChung()
    // }, [dataRidux  || props.uri]);
    
    // useEffect(() => {
    //     let arrNew = [...data]
    //     dataRidux.map(x=>{
    //         if(checkArray(data,x).result){
    //             let vitri = checkArray(data,x).vitri
    //             let temp = data[vitri]
    //             temp.check = true
    //             arrNew[vitri] = temp
    //         }
    //     })
    //     setdata(arrNew)
    //     setdataResult(arrNew)
    // }, [dataRidux || props.uri]);
    if(props.uri.length > 0){
        const content =
        //    if(data.uri_benh === props.uri){
                 (
                        <div>
                            {
                                props.uri.map((x,key)=>{
                                    if(x.check === true){
                                        return (
                                            <p key={key} className="text-success"><img src={process.env.PUBLIC_URL + '/img/tick.png'} height="15" width="15" className="mb-1"/>   {x.ten_trieuchung} vị trí {x.vitri}</p>
                                        )
                                    }else{
                                        return (
                                            <p key={key} className="text-danger"> <img src={process.env.PUBLIC_URL + '/img/negative.png'} height="15" width="15" className="mb-1"/> {x.ten_trieuchung} vị trí {x.vitri}</p>
                                        )
                                    }
                                })
                            }
                        </div>
                    );
                
           // }
      const text = <span> Các triệu chứng</span>;
    return(
        <Popover content={<div>
            {
                props.uri.map((x,key)=>{
                    if(x.check === true){
                        return (
                            <p key={key} className="text-success"><img src={process.env.PUBLIC_URL + '/img/tick.png'} height="15" width="15" className="mb-1"/>   {x.ten_trieuchung} vị trí {x.vitri}</p>
                        )
                    }else{
                        return (
                            <p key={key} className="text-danger"> <img src={process.env.PUBLIC_URL + '/img/negative.png'} height="15" width="15" className="mb-1"/> {x.ten_trieuchung} vị trí {x.vitri}</p>
                        )
                    }
                })
            }
        </div>
        } title={text}>
                  <Button size="small" type="link"  style={{backgroundColor: "rgba(0, 0, 0, 0.0)"}} shape="circle" icon={<Icon.Warning height="19" width="19" mr="pb-1"/>} />
        </Popover> 
    )
    }else{
        return (
            <></>
        )
    }
}
export default Popovers;
