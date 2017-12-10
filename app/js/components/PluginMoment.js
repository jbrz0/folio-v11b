import React from 'react';
import Moment from 'react-moment';
var moment = require('moment');

class PluginMoment extends React.Component {
  render() {
    var now = moment();
		return (
		<div>
    <Moment>{now}</Moment>
		</div>
		)
  }
}

export default PluginMoment;
