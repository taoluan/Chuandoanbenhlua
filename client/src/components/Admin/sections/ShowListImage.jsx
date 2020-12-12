import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React,{useEffect,useState} from 'react';
import { Button } from 'antd';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const PicturesWall=  (props)=> {
    const [updateImage, setupdateImage] = useState(false);
    const [removeImage,setRemoveImage] = useState([])
    const [data, setdata] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
    })
useEffect(() => {
    let newArr = []
    props.data.map((item,key)=>{
        if(item !== ""){
              newArr.push({
                    uid: key,
                    name: item,
                    status: 'done',
                    url: `https://res.cloudinary.com/taoluanby/image/upload/${item}`,
                })
        }
  
    })
    setdata({
        ...data,
        fileList: newArr
    })
}, [props.data]);
const handleUpdateImage = (value) => {
    let newArr = []
    value.map(item=>{
        (!Number.isInteger(item.uid))
            && newArr.push(item.thumbUrl) 
    })
    if(newArr.length === 0 && removeImage.length === 0){
        alert('no no')
    }else{
        setupdateImage(true)
        props.evUpdateImg({insertImg : newArr , removeImg : removeImage , imgCu: props.data})
        setTimeout(() => {
            setupdateImage(false)
            setRemoveImage([])
        }, 3000);
    }
}
const handleRemove = (value) => {
     if(Number.isInteger(value.uid)){
        let newArr = [...removeImage]
        newArr.push(value.name)
        setRemoveImage(newArr)
     }
    }

const handleCancel = () => setdata({ ...data, previewVisible: false });

const handlePreview = async file => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
    }

    setdata({
        ...data,
        previewImage: file.url || file.preview,
        previewVisible: true,
        previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
};

const handleChange = ({ fileList }) => {
    setdata({
        ...data,
        fileList:fileList
    })
} ;
const uploadButton = (
    <div>
    <PlusOutlined />
    <div style={{ marginTop: 8 }}>Upload</div>
    </div>
);
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={data.fileList}
          onPreview={(e)=>handlePreview(e)}
          onChange={(e)=>handleChange(e)}
          onRemove={(e)=>handleRemove(e)}
        >
          {data.fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={data.previewVisible}
          title={data.previewTitle}
          footer={null}
          onCancel={(e)=>handleCancel(e)}
        >
          <img alt="example" style={{ width: '100%' }} src={data.previewImage} />
        </Modal>
        <Button type="primary" size="large" loading={updateImage} onClick={() => handleUpdateImage(data.fileList)}>
            Cập nhật
        </Button>
      </>
    );
}
export default PicturesWall