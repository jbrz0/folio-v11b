import React from 'react';

import FooterPath from '../../img/footer.jpg';
const FooterBg = { backgroundImage: `url(${FooterPath}` };

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footerWrap" style={FooterBg}>
        <div className="footerInner">
          <p><span>v11</span> | 2017</p>
          <span>Contact:</span> <a href="mailto:justinbrazeau@gmail.com">justinbrazeau@gmail.com</a>
        </div>
      </div>
    );
  }
}
