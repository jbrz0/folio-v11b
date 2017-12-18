import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photosPartThree = [
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/57460b49066719.58aa70dc161e5.jpg', width: 3, height: 7 },
  { src: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/09ca0b49066719.58aa7a328bac4.png', width: 3, height: 4 },
];

class ProjectTwoLightThree extends React.Component {
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

export default ProjectTwoLightThree;
