import React from 'react';
import ReactTooltip from 'react-tooltip';

import Nav from './Nav.jsx';
import ProjBgLink from '../../img/bg.png';
import ProjLogo from '../../img/logos/logo-projects-01.svg';
import ProjBgHeaderPath from '../../img/project-header/projbg1.jpg';

// Lightboxes
import ProjectOneLightOne from './ProjOneLight/ProjectOneLightOne.jsx';
import ProjectOneLightTwo from './ProjOneLight/ProjectOneLightTwo.jsx';
import ProjectOneLightThree from './ProjOneLight/ProjectOneLightThree.jsx';
import ProjectOneLightFour from './ProjOneLight/ProjectOneLightFour.jsx';

// Tech Icons
import Sass from '../../img/tech/sass.png';
import DThree from '../../img/tech/d3.png';
import ReactJs from '../../img/tech/react.png';
import Javascript from '../../img/tech/js.png';
import NodeJs from '../../img/tech/nodejs.png';
import PostCss from '../../img/tech/postcss.png';
import Webpack from '../../img/tech/webpack.png';
import Sketch from '../../img/tech/sketch.png';
import Illustrator from '../../img/tech/illustrator.png';

import PaginationLogoPrev from '../../img/logos/logo-projects-05.svg';
import PaginationImgPrevPath from '../../img/home/project-06.jpg';
import PaginationLogoNext from '../../img/logos/logo-projects-02.svg';
import PaginationImgNextPath from '../../img/home/project-02.jpg';

const Scroll = require('react-scroll');
const Link = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;
const ProjBgHeader = { backgroundImage: `url(${ProjBgHeaderPath})` };

// Pagination
const PaginationImgPrev = { backgroundImage: `url(${PaginationImgPrevPath})` };
const PaginationImgNext = { backgroundImage: `url(${PaginationImgNextPath})` };


export default class ProjectOne extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'Chart Suite';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center center';

    if (window.matchMedia('(max-width: 767px)').matches) {
      document.body.style.backgroundImage = 'none';
    } else {
      document.body.style.backgroundImage = `url(${ProjBgLink})`;
    }
  }
  componentDidMount() { scrollSpy.update(); }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  componentWillMount() { scroll.scrollToTop(); }
  scrollToTop() { scroll.scrollToTop(); }
  scrollToBottom() { scroll.scrollToBottom(); }
  scrollTo() { scroll.scrollTo(100); }
  scrollMore() { scroll.scrollMore(100); }

  render() {
    return (
      <div>
        <Nav />
        <div className="projectIntro">
          <div style={ProjBgHeader} className="projectIntroBanner">
            <div className="projTextWrap projTextWrapTop">
              <div className="projIntroTop">
                <div className="projIntroLinksWrap">
                  <img src={ProjLogo} className="projectLogo" alt="Chart Suite Logo" />
                  <a href="http://chartsuite.us" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline" />&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/chart-suite" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline" />&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49062167/Chart-Suite" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline" />&nbsp;&nbsp;behance
                  </a>
                </div>
                <p className="projTextIntro">A web app for creating interactive charts to easily display data and update the information in browser. Lets you add info via browser on any device, and save as a PNG image. Options of different charts and settings. All info can be edited in real time via the settings sidebar.</p>
                <span className="projTags">charts, interaction, webapp, UI, presentation, live updates</span>

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
          <p className="projDesc">The wireframes covered a wide range of possibilities for the chart layouts and behaviour for this project, which led an excessive amount of initial concepts. The screens mapped out were initially mapped for some extra features, and alternate behaviours. The chart editor page has quite a few options as well initially that ended up being one result.</p>      
          <ProjectOneLightOne />
          <div className="clearfix" />

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">As with the wireframes, the UI mockups for this project initially were extensive. The mockups reduced a few of the ideas in wireframes, and helped to hone down and focus on the important layouts for the initial version of the web app. This stage also had some refactoring of the layout for the same reason. In this stage other responsive elements were worked out, as well as finalizing the chart editor.</p>
          <ProjectOneLightTwo />

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">The main goal for the branding of this project is to visually simplify the users data into something easily digestible, while of course looking good simultaniously. The process work for the logo had some predictable chart type solutions, and some abstract idea progression. The best outcome from this came with a geometric shape resembling a few different charts combined. An in between of the obvious chart type logo, and some nice looking abstract geometric shapes.</p>
          <ProjectOneLightThree />

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">Layout options were built with re useable components to be added throughout the layouts, and possible future layouts. The charts themselves have extensive interactivity that adjust in real time to the user input. The data is also displayed with a high level of interaction on hover/touch events. Forms and buttons have a high level of contract and some basic animations for ease of navigation.</p>
          <ProjectOneLightFour />

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">The project is built with a nodeJS server for a speed and to use many popular front end javascript tools easily. The app itself consists of components with functionality built in React JS, and some external libraries. The charts themselves use a react component chart library called Recharts. The styling used involved a collection of PostCSS plugins and SASS mixins for layout and re useable CSS parts. All mockups were created in Sketch, Branding/Concepts built in Adobe Illustrator, and photo editing done with Adobe Photoshop.</p>

          <ReactTooltip />

          <img src={Sass} className="techIcon" data-tip="Sass" data-effect="solid" alt="Sass" />
          <img src={ReactJs} className="techIcon" data-tip="React" data-effect="solid" alt="ReactJS" />
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid" alt="Javascript" />
          <img src={NodeJs} className="techIcon" data-tip="Node" data-effect="solid" alt="NodeJS" />
          <img src={PostCss} className="techIcon" data-tip="PostCSS" data-effect="solid" alt="PostCSS" />
          <img src={DThree} className="techIcon" data-tip="D3" data-effect="solid" alt="ThreeJS" />
          <img src={Webpack} className="techIcon" data-tip="Webpack" data-effect="solid" alt="Webpack" />
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid" alt="Sketch" />
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid" alt="Illustrator" /><br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="gold-tooth" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo" />
            </div>
          </a>

          <a href="terminal-ui" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo terminalPagination" />
          </div>
          </a>
        </div>
      </div>
    )
  }
}
