import React from 'react';
import ReactTooltip from 'react-tooltip';

import Nav from './Nav.jsx';
import ProjBgLink from '../../img/bg.png';
import ProjLogo from '../../img/logos/logo-projects-04.svg';
import ProjBgHeaderPath from '../../img/project-header/projbg4.jpg';

// Lightboxes
import ProjectFourLightOne from './ProjFourLight/ProjectFourLightOne.jsx';
import ProjectFourLightTwo from './ProjFourLight/ProjectFourLightTwo.jsx';
import ProjectFourLightThree from './ProjFourLight/ProjectFourLightThree.jsx';
import ProjectFourLightFour from './ProjFourLight/ProjectFourLightFour.jsx';

// Tech Icons
import Sass from '../../img/tech/sass.png';
import ReactJs from '../../img/tech/react.png';
import Javascript from '../../img/tech/js.png';
import NodeJs from '../../img/tech/nodejs.png';
import PostCss from '../../img/tech/postcss.png';
import Webpack from '../../img/tech/webpack.png';
import Sketch from '../../img/tech/sketch.png';
import Illustrator from '../../img/tech/illustrator.png';
import Photoshop from '../../img/tech/photoshop.png';

import PaginationLogoPrev from '../../img/logos/logo-projects-03.svg';
import PaginationImgPrevPath from '../../img/home/project-03.jpg';
import PaginationLogoNext from '../../img/logos/logo-projects-06.svg';
import PaginationImgNextPath from '../../img/home/project-05.jpg';

const Scroll = require('react-scroll');
const { Link } = Scroll;
const { Element } = Scroll;
// const Events = Scroll.Events;
// const scroll = Scroll.animateScroll;
// const scrollSpy = Scroll.scrollSpy;
const ProjBgHeader = { backgroundImage: `url(${ProjBgHeaderPath})` };

// Pagination
const PaginationImgPrev = { backgroundImage: `url(${PaginationImgPrevPath})` };
const PaginationImgNext = { backgroundImage: `url(${PaginationImgNextPath})` };


export default class ProjectThree extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'Homes From The Future';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';

    if (window.matchMedia('(max-width: 767px)').matches) {
      document.body.style.backgroundImage = 'none';
    } else {
      document.body.style.backgroundImage = `url(${ProjBgLink})`;
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="projectIntro">
          <div style={ProjBgHeader} className="projectIntroBanner">
            <div className="projTextWrap projTextWrapTop">
              <div className="projIntroTop">
                <div className="projIntroLinksWrap">
                  <img src={ProjLogo} className="projectLogo"/>
                  <a href="http://oddscenes.us" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/odd-scenes" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49078421/Odd-Scenes" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">A unique layout media website, as a showcase and commerce hub for a digital illustration brand. The layout arranges elements to break a standard grid format, and showcase all the products & art pieces.</p>
                <span className="projTags">digital art, illustration, shop, clothing, showcase</span>

                <Link activeClass="active" to="projects" spy={true}
                  smooth={true} offset={-42} duration={500} onSetActive={this.handleSetActive}>
                  <button className="homeBtn hvr-pulse projViewBtn">
                    <i className="ion-ios-bolt-outline"></i>&nbsp;&nbsp;VIEW PROJECT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="projTextWrap projTextWrapBody">
          <Element name="projects" />

          <h2 className="projHeaderTxt">Wireframes</h2>
          <p className="projDesc">The first step of these wireframes was mapping out all the main layouts for the sections on the site. Knowing it will be a one page, scrolling website there was a couple iterations of the layout made, as well as some experimental external shop page templates. From there revisions were made and altered versions were made.</p>
          <ProjectFourLightOne />

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">At this stage the decision of what artwork to add as the floating elements to the chosen layouts was made, as well as the best flow/layout to go with. The elements used the bright colours to pop out of the layout and give each section a distinct call to action. More of the text and flow was mapped out also in this stage, after incorporating the developed branding style.</p>
          <ProjectFourLightTwo />

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">The brand itself is built on style incorporating abstracted shapes, bright colours and sometimes using different media/technology to make its pieces. The logo plays on this with a chaotic layout of some basic shapes, the same way the illustration elements are made. The colours and shapes use a bold turquoise and purple combination that were initially being used years ago as its colours, with more accents and shading being added to the palette.</p>
          <ProjectFourLightThree />

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">High quality images optimized and compressed to load fast and display well. Responsive behaviour of unique style grids flows well into smaller screens. Shop page, modal loads up a menu with information and a bold direct link to product.</p>
          <ProjectFourLightFour />

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">A lightweight nodeJS app built with Sass and ReactJS as its main front end tools. Using a fairly basic setup with some PostCSS plugins for extra layout design and automation. Modules build into an optimized, minified single page application with a modified webpack setup. Some extra NPM packages also used as a basis for modals, and other ui elements.</p>

          <ReactTooltip />

          <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid" alt="Sass" />
          <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid" alt="ReatJS" />
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid" alt="Javascript" />
          <img src={NodeJs} className="techIcon" data-tip="NodeJS" data-effect="solid" alt="NodeJS" />
          <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid" alt="PostCSS" />
          <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid" alt="Webpack" />
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid" alt="Sketch" />
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid" alt="Illustrator" />
          <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid" alt="Photoshop" /> <br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="homes-from-the-future" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo terminalPagination" />
            </div>
          </a>
          <a href="walltagged" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo" />
          </div>
          </a>
        </div>
      </div>
    );
  }
}
