import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photosPartFour = [
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/71f6e049078421.58ab1274451f5.png', width: 3, height: 3 },
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/399d4d49078421.58aaf155da4a3.png', width: 3, height: 3 },
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/4a0a7549078421.58ab12744f19a.png', width: 3, height: 3 },
];

class ProjectFourLightFour extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return (
      <div>
        <Gallery photos={photosPartFour} onClick={this.openLightbox} />
        <Lightbox
          images={photosPartFour}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

export default ProjectFourLightFour;
