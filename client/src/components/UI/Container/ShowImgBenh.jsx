import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { Link } from 'react-router-dom';

import Lightbox from "react-image-lightbox";
import {Image as ImageCloud} from 'cloudinary-react';
import './Lightbox.css'
class LightboxPage extends React.Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: this.props.img
  }
  renderImages = () => {
    let photoIndex = -1;
    const { images } = this.state;
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
  render() {
  const { photoIndex, isOpen, images } = this.state;
    return (
        <MDBContainer className="mt-5 ">
          <div className="mdb-lightbox no-margin ">
            <MDBRow>
              {this.renderImages()}
            </MDBRow>
          </div>
          {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
              }
            />
          )}
        </MDBContainer>
      );
    }
  }

export default LightboxPage;