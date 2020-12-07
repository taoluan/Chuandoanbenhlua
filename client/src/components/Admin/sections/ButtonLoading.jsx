import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import React,{useEffect,useState} from 'react';

const ButtonLoading = ()=> {
  const [loadings, setloadings] = useState(false);
  const enterLoading = () => {
    setloadings(true)
    setTimeout(() => {
     setloadings(false)
    }, 3000);
  };
    return (
      <>
        <Button type="primary" loading={loadings} onClick={() => enterLoading()}>
          Cập nhật
        </Button>

      </>
    );
}

export default ButtonLoading;