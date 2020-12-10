import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import React,{useEffect,useState} from 'react';
import '../../../css/admin.css'
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const PicturesWall = (props)=>{
    const [upload, setUpload] = useState(false);
    const [img, setimg] = useState();
    const handleChange = info => {
    if (info.file.status === 'uploading') {
        setUpload(true)
        return;
    }
    if (info.file.status === 'done') {
      setUpload(false)
      getBase64(info.file.originFileObj, imageUrl =>
        setimg(imageUrl)
      );
      getBase64(info.file.originFileObj, imageUrl =>
        props.img(imageUrl)
      );
    }
  };
    const uploadButton = (
      <div>
        {upload ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={(e)=>handleChange(e)}
      >
        {img ? <img src={img} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
}
export default PicturesWall