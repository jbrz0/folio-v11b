import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photosPartThree = [
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/35625349062167.58aa4b8944201.jpg', width: 3, height: 7 },
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/2f850649062167.58aa643057a61.png', width: 3, height: 4 },
];

class ProjectOneLightThree extends React.Component {
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
      <div className="proj-one-light-three">
        <Gallery photos={photosPartThree} onClick={this.openLightbox} />
        <Lightbox
          images={photosPartThree}
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

export default ProjectOneLightThree;
