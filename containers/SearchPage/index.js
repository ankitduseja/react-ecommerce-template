/*
 *
 * SearchPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import selectSearchPage from './selectors';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.css';
import SearchProduct from 'components/SearchProduct';
import Loader from 'components/Loader';
import WidgetMap from 'components/WidgetMap';

export class SearchPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var elem,products=[];
    if(this.props.initdata) {
      for (var i in this.props.initdata) {
        products.push(<SearchProduct key={'p'+this.props.initdata[i].id} product={this.props.initdata[i]} />)
      }
      elem=<div>
        <div className={styles.rightside}>
          <WidgetMap />
        </div>
        <div className={styles.leftside}>
          {products}
        </div>
      </div>;
    } else {
      elem=<Loader />;
    }
    return (
      <div className={styles.searchPage}>
        <Helmet
          title="Search Page"
          meta={[
            { name: 'description', content: 'Description of SearchPage' },
          ]}
        />
        {elem}
      </div>
    );
  }
}

const mapStateToProps = selectSearchPage();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
