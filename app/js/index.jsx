import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import HeadInfo from './components/HeadInfo.jsx';
import Nav from './components/Nav.jsx';
import Intro from './components/Intro.jsx';
import IntroGrid from './components/IntroGrid.jsx';

// Projects
import ProjectOne from './components/ProjectOne.jsx';
import ProjectTwo from './components/ProjectTwo.jsx';
import ProjectThree from './components/ProjectThree.jsx';
import ProjectFour from './components/ProjectFour.jsx';
import ProjectFive from './components/ProjectFive.jsx';
import ProjectSix from './components/ProjectSix.jsx';

// Analytics Info
ReactGA.initialize('UA-45238727-1');

// Page header info
render(<HeadInfo
  pageTitle="Design & Frontend Dev"
  pageDescription="Design and frontend web development"
  pageImage="./../../screenshot.png"
  pageWebsite="http://justinbrazeau.com"
/>, document.getElementById('head-info'));

// Conditional components
if (document.body.contains(document.getElementById('nav'))) {
  render(<Nav />, document.getElementById('nav'));
}
if (document.body.contains(document.getElementById('intro'))) {
  window.scrollTo(0, 0);
  render(<Intro />, document.getElementById('intro'));
}
if (document.body.contains(document.getElementById('intro-grid'))) {
  render(<IntroGrid />, document.getElementById('intro-grid'));
}

// Projects
if (document.body.contains(document.getElementById('project-one'))) {
  window.scrollTo(0, 0);
  render(<ProjectOne />, document.getElementById('project-one'));
}
if (document.body.contains(document.getElementById('project-two'))) {
  window.scrollTo(0, 0);
  render(<ProjectTwo />, document.getElementById('project-two'));
}
if (document.body.contains(document.getElementById('project-three'))) {
  window.scrollTo(0, 0);
  render(<ProjectThree />, document.getElementById('project-three'));
}
if (document.body.contains(document.getElementById('project-four'))) {
  window.scrollTo(0, 0);
  render(<ProjectFour />, document.getElementById('project-four'));
}
if (document.body.contains(document.getElementById('project-five'))) {
  window.scrollTo(0, 0);
  render(<ProjectFive />, document.getElementById('project-five'));
}
if (document.body.contains(document.getElementById('project-six'))) {
  window.scrollTo(0, 0);
  render(<ProjectSix />, document.getElementById('project-six'));
}
