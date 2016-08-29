/**
*
* SearchProduct
*
*/

import React from 'react';
import Paper from 'material-ui/Paper';
import { Link } from 'react-router';
import styles from './styles.css';

function SearchProduct(props) {
  console.log(props);
  return (
    <div className={styles.searchProduct}>
      <Link to={`/product/${props.product.id}`}>
        <Paper zDepth={2} className={styles.paper}>
          <div className={styles.image} style={{backgroundImage:`url('${props.product.thumb}')`}} />
          <div className={styles.pname}>{props.product.name}</div>
          <div className={styles.price}>Rs. {props.product.price}</div>
          <div className={styles.rating}>{'★ '+props.product.rating}</div>
        </Paper>
      </Link>
    </div>
  );
}

export default SearchProduct;
