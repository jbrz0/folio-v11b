import React from 'react';
import ReactTooltip from 'react-tooltip';

import Nav from './Nav.jsx';
import ProjBgLink from '../../img/bg.png';
import ProjLogo from '../../img/logos/logo-projects-03.svg';
import ProjBgHeaderPath from '../../img/project-header/projbg3.jpg';

// Lightboxes
import ProjectThreeLightOne from './ProjThreeLight/ProjectThreeLightOne.jsx';
import ProjectThreeLightTwo from './ProjThreeLight/ProjectThreeLightTwo.jsx';
import ProjectThreeLightThree from './ProjThreeLight/ProjectThreeLightThree.jsx';
import ProjectThreeLightFour from './ProjThreeLight/ProjectThreeLightFour.jsx';

// Tech Icons
import Wordpress from '../../img/tech/wordpress.png';
import Javascript from '../../img/tech/js.png';
import Php from '../../img/tech/php.png';
import Css from '../../img/tech/css.png';
import Html from '../../img/tech/html.png';
import Litmus from '../../img/tech/litmus.png';
import Sketch from '../../img/tech/sketch.png';
import Illustrator from '../../img/tech/illustrator.png';
import Photoshop from '../../img/tech/photoshop.png';

import PaginationLogoPrev from '../../img/logos/logo-projects-02.svg';
import PaginationImgPrevPath from '../../img/home/project-02.jpg';
import PaginationLogoNext from '../../img/logos/logo-projects-04.svg';
import PaginationImgNextPath from '../../img/home/project-04.jpg';

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
                  <img src={ProjLogo} className="projectLogo" />
                  <a href="http://homesfromthefuture.com" className="projIntroLinks projIntroLinkOne">
                    <i className="ion-ios-world-outline"></i>&nbsp;&nbsp;website
                  </a>
                  <a href="https://github.com/brz0/hftf-wp" className="projIntroLinks projIntroLinkTwo">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;github
                  </a>
                  <a href="https://www.behance.net/gallery/49069065/Homes-From-The-Future" className="projIntroLinks projIntroLinkThree">
                    <i className="ion-social-github-outline"></i>&nbsp;&nbsp;behance
                  </a>
                </div>

                <p className="projTextIntro">Homes from the Future is an active tech blog dedicated to home automation and the internet of things. With a detailed product review page, and article page housed in a distinctly styled blog.</p>
                <span className="projTags">blog, tech, internet of things, home automation, news</span>

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
          <Element name="projects"></Element>

          <h2 className="projHeaderTxt">Wireframes</h2>
          <p className="projDesc">The main goal of the wireframes was to house many different media types and large amounts of text in an informative and clear way. The navigation elements are separated from the post content on layouts to aid with navigation. The iterations varied throughout the wireframing, mockups and even development process for this project, based on the best suited way to display product and article info.</p>
          <ProjectThreeLightOne />

          <h2 className="projHeaderTxt">UI</h2>
          <p className="projDesc">Interface elements use a modern and clean stylistic approach combining the brand style and wireframe layouts. Housing the content in boxes helped to use whitespace to separate elements, and the branding colours/styles helped to further this idea. Mobile layouts re-organize the sidebars to work below the content, and let the content be the main focus. This stage also involved a lot of refactoring to the product template (which later went through further revisions in the development stage).</p>
          <ProjectThreeLightTwo />

          <h2 className="projHeaderTxt">Branding</h2>
          <p className="projDesc">The branding imagery and style for this project was based on technology and connectedness, as this is displayed prominently in the logo especially. The button and element styling uses playful colours and clean text to also make the topic of “home automation” seem inviting and fun rather than overwhelming. The header typography uses a monospace font to mimic a typewriter style, to add some extra originality to the overall layouts.</p>
          <ProjectThreeLightThree />

          <h2 className="projHeaderTxt">Features</h2>
          <p className="projDesc">Post page features bold and enlarged media elements, that behave well between screen sizes. The menu contains a modal with many features for navigation through the website, with all elements being enlarged on most screen sizes to optimize the interactivity. Contains a separated post template to highlight features of the product, and article template which is better suited for longer text articles about guides and concepts.</p>
          <ProjectThreeLightFour />

          <h2 className="projHeaderTxt">Tech</h2>
          <p className="projDesc">Build on wordpress, with a custom theme built into it from scratch. The theme uses some custom plugins for post management, and some pre built plugins for Mailchimp, analytics, and content management. Images are optimized for speed and styling is written with vanilla CSS, using some features from BEM methodology, and well structured content organization in the theme style files. Theme functionality also has many customized elements using PHP for content, layout, and data organization.</p>

          <ReactTooltip />

          <img src={Wordpress} className="techIcon" data-tip="Wordpress" data-effect="solid" alt="Wordpress" />
          <img src={Javascript} className="techIcon" data-tip="Javascript" data-effect="solid" alt="Javascript" />
          <img src={Php} className="techIcon" data-tip="PHP" data-effect="solid" alt="PHP" />
          <img src={Html} className="techIcon" data-tip="HTML" data-effect="solid"alt="HTML" />
          <img src={Css} className="techIcon" data-tip="CSS" data-effect="solid"alt="CSS" />
          <img src={Litmus} className="techIcon" data-tip="Litmus" data-effect="solid"alt="Litmus" />
          <img src={Sketch} className="techIcon" data-tip="Sketch" data-effect="solid"alt="Sketch" />
          <img src={Illustrator} className="techIcon" data-tip="Illustrator" data-effect="solid" alt="Illustrator" />
          <img src={Photoshop} className="techIcon" data-tip="Photoshop" data-effect="solid" alt="Photoshop" /><br />

          <h2 className="projHeaderTxt projHeaderTxtLast">More Projects</h2><br />
          <a href="terminal-ui" className="paginationLinkWrap">
            <div style={PaginationImgPrev} className="projPagination">
              <img src={PaginationLogoPrev} className="projPaginationLogo terminalPagination" />
            </div>
          </a>
          <a href="odd-scenes" className="paginationLinkWrap">
          <div style={PaginationImgNext} className="projPagination">
            <img src={PaginationLogoNext} className="projPaginationLogo" />
          </div>
          </a>
        </div>
      </div>
    );
  }
}
