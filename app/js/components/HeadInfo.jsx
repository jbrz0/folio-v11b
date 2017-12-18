import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

class HeadInfo extends React.Component {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

        <meta name="google-site-verification" content="wVHCqj5uzKUKHdqVdAumb88mi6tWeMv8vOLD5ri5ysk" />
        <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:900|Open+Sans:300" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css" />

        <title>{this.props.pageTitle}</title>
        <meta name="description" content={this.props.pageDescription} />

        {/* Open Graph tags */}
        <meta property="og:title" content={this.props.pageTitle} />
        <meta property="og:description" content={this.props.pageDescription} />
        <meta property="og:image" content={this.props.pageImage} />
        <meta property="og:url" content={this.props.pageWebsite} />

        {/* Twitter Open Graph tags */}
        <meta property="twitter:title" content={this.props.pageTitle} />
        <meta property="twitter:description" content={this.props.pageDescription} />
        <meta property="twitter:image" content={this.props.pageImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site" content={this.props.pageWebsite} />
      </Helmet>
    );
  }
}

HeadInfo.propTypes = {
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string,
  pageImage: PropTypes.string,
  pageWebsite: PropTypes.string,
};

HeadInfo.defaultProps = {
  pageTitle: 'Justin Brazeau',
  pageDescription: 'Design and frontend web development',
  pageImage: './../../screenshot.png',
  pageWebsite: 'http://justinbrazeau.com',
};

export default HeadInfo;
