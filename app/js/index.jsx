import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import Header from './components/Header.jsx';
import HeadInfo from './components/HeadInfo.jsx';
import PluginMoment from './components/PluginMoment.jsx';
import PluginScroll from './components/PluginScroll.jsx';
import './components/PluginAnimate.jsx';

// Analytics Info
ReactGA.initialize('UA-000000-01');

// Page header info
render(<HeadInfo
  pageTitle="React Template"
  pageDescription="A starter app for building production ready React templates"
  pageImage="./../../stars.png"
  pageWebsite="http://example.com"
/>, document.getElementById('head-info'));

// Sitewide components (every page)
render(<Header />, document.getElementById('header'));

// Conditional components
if (document.body.contains(document.getElementById('plugin-moment'))) {
  render(<PluginMoment />, document.getElementById('plugin-moment'));
}

if (document.body.contains(document.getElementById('plugin-scroll'))) {
  render(<PluginScroll />, document.getElementById('plugin-scroll'));
}
