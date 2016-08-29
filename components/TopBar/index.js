/**
*
* TopBar
*
*/

import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/home';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import messages from './messages';

import styles from './styles.css';

class TopBar extends React.Component {
  handleTouchTap() {

  }
  render() {
    return (
      <div className={styles.topBar}>
        <AppBar
          title={<span style={styles.title}><FormattedMessage {...messages.header} /></span>}
          onTitleTouchTap={this.handleTouchTap}
          iconElementLeft={<Link to="/"><IconButton><Home /></IconButton></Link>}
          iconElementRight={<FlatButton label={<FormattedMessage {...messages.login} />} />}
        />
      </div>
    );
  }
}

export default TopBar;
