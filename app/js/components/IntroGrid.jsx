import React from 'react';

import Social from './Social.jsx';
import Footer from './Footer.jsx';

import LogoOne from '../../img/logos/logo-projects-01.svg';
import LogoTwo from '../../img/logos/logo-projects-02.svg';
import LogoThree from '../../img/logos/logo-projects-03.svg';
import LogoFour from '../../img/logos/logo-projects-04.svg';
import LogoFive from '../../img/logos/logo-projects-06.svg';
import LogoSix from '../../img/logos/logo-projects-05.svg';
import ProjectOnePath from '../../img/home/project-01.jpg';
import ProjectTwoPath from '../../img/home/project-02.jpg';
import ProjectThreePath from '../../img/home/project-03.jpg';
import ProjectFourPath from '../../img/home/project-04.jpg';
import ProjectFivePath from '../../img/home/project-05.jpg';
import ProjectSixPath from '../../img/home/project-06.jpg';

const Scroll = require('react-scroll');
const { Element } = Scroll;

const ProjectOne = { backgroundImage: `url(${ProjectOnePath})` };
const ProjectTwo = { backgroundImage: `url(${ProjectTwoPath})` };
const ProjectThree = { backgroundImage: `url(${ProjectThreePath})` };
const ProjectFour = { backgroundImage: `url(${ProjectFourPath})` };
const ProjectFive = { backgroundImage: `url(${ProjectFivePath})` };
const ProjectSix = { backgroundImage: `url(${ProjectSixPath})` };

export default class IntroGrid extends React.Component {
  render() {
    return (
      <div className="introGridWrap">
        <Element name="projects" />
        <a href="chart-suite">
          <div className="introGridCell" style={ProjectOne}>
            <img src={LogoOne} className="logoHome" alt="Chart Suite"/>
          </div>
        </a>
        <a href="terminal-ui">
          <div className="introGridCell" style={ProjectTwo}>
            <img src={LogoTwo} className="logoHome" alt="Terminal UI"/>
          </div>
        </a>
        <a href="homes-from-the-future">
          <div className="introGridCell" style={ProjectThree}>
            <img src={LogoThree} className="logoHome" alt="Homes From The Future"/>
          </div>
        </a>
        <a href="odd-scenes">
          <div className="introGridCell" style={ProjectFour}>
            <img src={LogoFour} className="logoHome" alt="Odd Scenes"/>
          </div>
        </a>
        <a href="walltagged">
          <div className="introGridCell" style={ProjectFive}>
            <img src={LogoFive} className="logoHome" alt="Wall Tagged"/>
          </div>
        </a>
        <a href="gold-tooth">
          <div className="introGridCell" style={ProjectSix}>
            <img src={LogoSix} className="logoHome" alt="Gold Tooth"/>
          </div>
        </a>
        <Social />
        <Footer />
      </div>
    );
  }
}
