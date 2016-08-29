/**
*
* Footer
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import styles from './styles.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export default Footer;
