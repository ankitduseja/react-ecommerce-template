/*
 *
 * ProductPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectProductPage from './selectors';
import { FormattedMessage } from 'react-intl';
import RaisedButton from 'material-ui/RaisedButton';
import messages from './messages';
import styles from './styles.css';
import Paper from 'material-ui/Paper';
import Review from 'components/Review';
import Loader from 'components/Loader';

export class ProductPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var elem,product;
    if(this.props.initdata) {
      for (var p of this.props.initdata) {
        if(p.id==this.props.params.pid) {
          product=p;
        }
      }
      elem=<Paper className={styles.paper}>
        <div className={styles.pname}>{product.name}</div>
        <div className={styles.topbox}>
          <div className={styles.rightside}>
            <RaisedButton label={'Buy Now'} secondary={true} fullWidth={true} />
            <div>
              <div className={styles.price}>Rs. {product.price}</div>
              <div className={styles.rating}>{'★ '+product.rating}</div>
            </div>
            <div className={styles.summary}><h2>Summary</h2>{product.summary}</div>
          </div>
          <div className={styles.leftside}>
            <div className={styles.image} style={{backgroundImage:`url('${product.image}')`}} />
          </div>
        </div>
        <div className={styles.description}>
          <h2>Description</h2>
          {product.description}
        </div>
        <div className={styles.reviewbox}>
          <h2>Reviews</h2>
          <Review reviewData={product.reviews[0]} />
          <Review reviewData={product.reviews[1]} />
        </div>
      </Paper>;
    } else {
      elem=<Loader />;
    }
    return (
      <div className={styles.productPage}>
        <Helmet
          title="Product Page"
          meta={[
            { name: 'description', content: 'Description of Product' },
          ]}
        />
        {elem}
      </div>
    );
  }
}

const mapStateToProps = selectProductPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
