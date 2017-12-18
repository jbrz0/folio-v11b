import React from 'react';

export default class Social extends React.Component {
  render() {
    return (
      <div className="socialWrap">
        <div className="socialGrid">
          <a href="http://be.net/justinbrazeau">
            <div className="socialCard hvr-grow-shadow">
              <h2>Behance</h2>
              <i className="fa fa-behance" aria-hidden="true" />
              <p>Showcase</p>
            </div>
          </a>
        </div>
        <div className="socialGrid">
          <a href="http://codepen.io/brz0">
            <div className="socialCard hvr-grow-shadow">
              <h2>Codepen</h2>
              <i className="fa fa-codepen" aria-hidden="true" />
              <p>Playground</p>
            </div>
          </a>
        </div>
        <div className="socialGrid">
          <a href="http://twitter.com/justinbrazeau">
            <div className="socialCard hvr-grow-shadow">
              <h2>Twitter</h2>
              <i className="fa fa-twitter" aria-hidden="true" />
              <p>Updates</p>
            </div>
          </a>
        </div>
        <div className="socialGrid">
          <a href="http://github.com/brz0">
            <div className="socialCard hvr-grow-shadow">
              <h2>Github</h2>
              <i className="fa fa-github" aria-hidden="true" />
              <p>Code Base</p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
