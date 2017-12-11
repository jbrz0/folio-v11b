import React from 'react';
import Tabs from './Tabs.jsx';
import Logo from './../../img/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <div>
        <img src={Logo} width="75" height="75" alt="Logo" />
        <h1>Basic Setup</h1>
        <Tabs />
      </div>
    );
  }
}

export default Header;
