/**
*
* SearchBar
*
*/

import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Home from 'material-ui/svg-icons/action/search';
import { browserHistory } from 'react-router';
import styles from './styles.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  handleKeyDown(evt) {
    if(evt.keyCode==13) {
      this.doSearch();
    }
  }
  doSearch() {
    var query=this.inputR.value;
    browserHistory.push('/search?q='+query);
  }
  render() {
    return (
      <div className={styles.searchBar}>
        <div className={styles.search}>
          <input onKeyDown={this.handleKeyDown.bind(this)} placeholder='Search for Products, Brands and More' ref={(c) => this.inputR = c} className={styles.searchInput} type='text' />
          <div className={styles.searchButton} onClick={this.doSearch.bind(this)}><IconButton><Home /></IconButton></div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
