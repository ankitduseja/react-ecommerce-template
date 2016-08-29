/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import styles from './styles.css';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className={styles.container}>
          <TopBar />
          <div className={styles.mainContainer}>
            {React.Children.toArray(this.props.children)}
          </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
