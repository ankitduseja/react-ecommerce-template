/**
*
* Review
*
*/

import React from 'react';


import styles from './styles.css';

function Review(props) {
  return (
    <div className={styles.review}>
      <div className={styles.rating}>{'★ '+props.reviewData.rating}</div>
      <div className={styles.title}>{props.reviewData.title}</div>
      <div className={styles.reviewtext}>{props.reviewData.review}</div>
      <div className={styles.name}>by {props.reviewData.name}</div>
    </div>
  );
}

export default Review;
