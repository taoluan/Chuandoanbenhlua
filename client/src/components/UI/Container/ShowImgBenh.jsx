import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';
import React,{useEffect,useState} from 'react'
import Lightbox from "react-image-lightbox";
import {Image as ImageCloud} from 'cloudinary-react';
import './Lightbox.css'
const LightboxPage = (props) =>  {
  const [data, setdata] = useState({
      photoIndex: 0,
      isOpen: false,
      images: []
  });
  useEffect(() => {
    setdata({...data,images: props.img})
  }, [props.img]);
  const renderImages = () => {
    let photoIndex = -1;
    const { images } = data;
    return images.map(imageSrc => {
      photoIndex++;
      const privateKey = photoIndex;
      return (
        <MDBCol md="4" key={photoIndex}>
          <figure>
            <Link target="_blank" to={{ pathname: "https://res.cloudinary.com/taoluanby/image/upload/"+imageSrc}} >
          <ImageCloud cloudName="taoluanby" publicId={imageSrc} width="450" height="300" crop="scale"
            className="img-fluid" 
            // onClick={()=>
            //   <Redirect to={{}} />
            // //this.setState({ photoIndex: privateKey, isOpen: true })
            // }
          />
          </Link>
          </figure>
        </MDBCol>
        );
      })
    }
  const { photoIndex, isOpen, images } = data;
    return (
        <MDBContainer className="mt-5 ">
          <div className="mdb-lightbox no-margin ">
            <MDBRow>
              {renderImages()}
            </MDBRow>
          </div>
          {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => setdata({...data, isOpen: false })}
            onMovePrevRequest={() =>
              setdata({
                ...data,
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              setdata({
                ...data,
                photoIndex: (photoIndex + 1) % images.length
              })
              }
            />
          )}
        </MDBContainer>
      );
    }

export default LightboxPage;