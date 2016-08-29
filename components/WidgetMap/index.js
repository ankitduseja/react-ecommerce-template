/**
*
* WidgetMap
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './styles.css';

class WidgetMap extends React.Component {
  render() {
    //TODO Update key
    return (
      <div className={styles.widgetMap}>
        <Paper zDepth={3} className={styles.embedMap}>
          <iframe frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Railway,+Bangalore,+India&key=AIzaSyAN0om9mFmy1QN6Wf54tXAowK4eT0ZUPrU"></iframe>
        </Paper>
      </div>
    );
  }
}

export default WidgetMap;
