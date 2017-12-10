import React from 'react';
import { render } from 'react-dom';
import Header from './components/Header.js';
import HeadInfo from './components/HeadInfo.js';

// Page header info
render(<HeadInfo
	pageTitle="React Template"
	pageDescription="A starter app for building production ready React templates"
	pageImage="./../../stars.png"
	pageWebsite="http://example.com"
/>, document.getElementById('head-info'));

render(<Header />, document.getElementById('header'));