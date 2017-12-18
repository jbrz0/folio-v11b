import React from 'react';
import Prime from '../../img/prime.svg';
import HomeBgLink from '../../img/bg.png';

const Scroll = require('react-scroll');
const Link = Scroll.Link;
const Events = Scroll.Events;
const scroll = Scroll.animateScroll;
const scrollSpy = Scroll.scrollSpy;

const HomeBg = { backgroundImage: `url(${HomeBgLink})` };

export default class Intro extends React.Component {
  render() {
    return (
      <div className="homeBg" style={HomeBg}>
        <div className="homeSectionWrap">
          <div className="homeSectionLeft">
            <img src={Prime} className="prime" alt="Prime Icon" />
          </div>
          <div className="homeSectionRight">
            <div>
              <h1>Web Maker</h1>
              <p>I build digital products with a detailed eye for design, responsiveness, interaction & style.</p>
              <div className="processWrap">
                <span className="fira teal intro-arrow-add-fix">&nbsp;->&nbsp;</span><span className="fira yellow">concept</span><span className="intro-arrow-fix"></span>
                <span className="fira teal">&nbsp;->&nbsp;</span>
                <span className="fira green">design</span><span className="intro-arrow-fix"></span>
                <span className="fira teal">&nbsp;->&nbsp;</span>
                <span className="fira red">code</span>
              </div>
              <Link 
                activeClass="active"
                to="projects"
                spy
                smooth
                offset={-42}
                duration={500}
                onSetActive={this.handleSetActive}
              >
                <button className="homeBtn hvr-pulse">VIEW WORK</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
