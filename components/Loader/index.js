/**
*
* Loader
*
*/

import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import styles from './styles.css';

function Loader() {
  return (
    <div className={styles.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
