import React from 'react';
import { render } from 'react-dom';
import ReactGA from 'react-ga';
import Header from './components/Header.js';
import HeadInfo from './components/HeadInfo.js';
import PluginMoment from './components/PluginMoment.js';

// Analytics Info
ReactGA.initialize('UA-000000-01');

// Page header info
render(<HeadInfo
	pageTitle="React Template"
	pageDescription="A starter app for building production ready React templates"
	pageImage="./../../stars.png"
	pageWebsite="http://example.com"
/>, document.getElementById('head-info'));

render(<Header />, document.getElementById('header'));

render(<PluginMoment />, document.getElementById('plugin-moment'));
