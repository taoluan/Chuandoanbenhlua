import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
const ThongBao = (props)=>{
    return(
        <Result
        status="404"
        title={props.title}
        subTitle={props.subTitle}
      />
    )
}
export default ThongBao