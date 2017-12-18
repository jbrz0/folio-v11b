import React from 'react';
import ReactTooltip from 'react-tooltip';

import Nav from './Nav.jsx';
import ProjBgLink from '../../img/bg.png';
import ProjLogo from '../../img/logos/logo-projects-02.svg';
import ProjBgHeaderPath from '../../img/project-header/projbg2.jpg';

// Lightboxes
import ProjectTwoLightOne from './ProjTwoLight/ProjectTwoLightOne.jsx';
import ProjectTwoLightTwo from './ProjTwoLight/ProjectTwoLightTwo.jsx';
import ProjectTwoLightThree from './ProjTwoLight/ProjectTwoLightThree.jsx';
import ProjectTwoLightFour from './ProjTwoLight/ProjectTwoLightFour.jsx';

// Tech Icons
import Sass from '../../img/tech/sass.png';
import ReactJs from '../../img/tech/react.png';
import Javascript from '../../img/tech/js.png';
import NodeJs from '../../img/tech/nodejs.png';
import PostCss from '../../img/tech/postcss.png';
import Webpack from '../../img/tech/webpack.png';
import Sketch from '../../img/tech/sketch.png';
import Illustrator from '../../img/tech/illustrator.png';

import PaginationLogoPrev from '../../img/logos/logo-projects-01.svg';
import PaginationImgPrevPath from '../../img/home/project-01.jpg';
import PaginationLogoNext from '../../img/logos/logo-projects-03.svg';
import PaginationImgNextPath from '../../img/home/project-03.jpg';

const Scroll = require('react-scroll');
const { Link } = Scroll;
const { Element } = Scroll;
const ProjBgHeader = { backgroundImage: `url(${ProjBgHeaderPath})` };

// Pagination
const PaginationImgPrev = { backgroundImage: `url(${PaginationImgPrevPath})` };
const PaginationImgNext = { backgroundImage: `url(${PaginationImgNextPath})` };


export default class ProjectTwo extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'Terminal UI';
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
                  <img src={ProjLogo} className="projectLogo" alt="Terminal UI" />
                  <a href="http://terminalui.info" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline" />&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/terminal-ui" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline" />&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49066719/Terminal-UI" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline" />&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">Taking inspiration from terminal navigation on computers in the past/present, this UI Kit is a collection of ReactJS components to integrate into a website or app. The components fit nicely in the pre-built grid, with a number of different column options. Contains a range of different cards to be inserted into the grid setup, with interactivity and animations built in.</p>
                <span className="projTags">terminal, scifi, ui kit, library, components</span>

                <Link
                  activeClass="active"
                  to="projects"
                  spy
                  smooth
                  offset={-42}
                  duration={500}
                  onSetActive={this.handleSetActive}
                >
                  <button className="homeBtn hvr-pulse projViewBtn">
                    <i className="ion-ios-bolt-outline" />&nbsp;&nbsp;VIEW PROJECT
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="projTextWrap projTextWrapBody">
          <Element name="projects" />

          <h2 className="projHeaderTxt">Wireframes</h2>
          <p className="projDesc">The wireframe development process for this project involved a lot of experimenting with sizing/layout options for different cards to be inserted into the grid layout. The first step was building a versatile grid system, then building all the necessary components that would be useful for a version release of the UI kit. Then options were developed for input navigation and re-iterations of all items.</p>
          <ProjectTwoLightOne />

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">The re factored UI mockups are re adjusted and in this stage added a few more responsive behaviours of the cards themselves. The integration of the branding style into the elements helped to adjust the main layout and card contents. This stage also helped to use the previously built elements to focus on a few key layouts and flow of the project.</p>
          <ProjectTwoLightTwo />

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">Overall style of the kit library is built on a terminal, slightly sci-fi theme, with old fashioned terminal use elements mixed with modern web development layout and style techniques. The colours incorporate a colour mix while still maintaining this look, as well as thin, futuristic looking typography. The logo (as well as colours and other elements) are meant to be swapped, but aim to provide a good base with this library. The final logo option for this project uses a T icon with a retro/futuristic style using a bold T and word mark of the word ‘Terminal’.</p>
          <ProjectTwoLightThree />

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">The library makes use of two different window behaviours, slideshow featuring specific cards - or scrolling with many cards. The ability to easily add terminal commands attached to pages built in, including multiple queries for the same page (ex: Home, Welcome, 0 can all load /home layout). responsive customized grid, for easily fitting in card designs.</p>
          <ProjectTwoLightFour />

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">The main card components are built as ReactJS and Sass components completely pre built. The Sass files contain variables to adjust the theme files to new branding elements. Developer version currently exists with these files, and also a design files version built with Adobe Illustrator and Sketch. The cards use a PostCSS plugin called Lost for extensive flex box grids to be used, combined with pre designed structures that were developed into Javascript and CSS files after.</p>

          <ReactTooltip />

          <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid" alt="Sass" />
          <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid" alt="ReactJS" />
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid" alt="Javascript" />
          <img src={NodeJs} className="techIcon" data-tip="Node" data-effect="solid" alt="NodeJS" />
          <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid" alt="PostCSS" />
          <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid" alt="Webpack" />
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid" alt="Sketch" />
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid" alt="Illustrator" /><br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="chart-suite" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo" />
            </div>
          </a>
          <a href="homes-from-the-future" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo" />
          </div>
          </a>
        </div>
      </div>
    );
  }
}
