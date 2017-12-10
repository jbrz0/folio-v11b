import React from "react";
import {Helmet} from "react-helmet";

class HeadInfo extends React.Component {
  render () {
    return (
			<Helmet>
				<meta charSet="utf-8" />
				<meta http-equiv="x-ua-compatible" content="ie=edge" />

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
};

export default HeadInfo;