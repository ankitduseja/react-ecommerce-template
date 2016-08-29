/**
*
* Carousel
*
*/

import React from 'react';
import Slider from 'react-slick';
import IconButton from 'material-ui/IconButton';
import Prev from 'material-ui/svg-icons/navigation/arrow-back';
import Next from 'material-ui/svg-icons/navigation/arrow-forward';
import styles from './styles.css';

class Carousel extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    var nextIcon=<IconButton><Next /></IconButton>;
    var prevIcon=<IconButton><Prev /></IconButton>;
    var settings = {
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      nextArrow: nextIcon,
      prevArrow: prevIcon,
      slidesToShow: 1,
      className: styles.slider,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className={styles.slider}>
        <Slider className={styles.slickslider} {...settings}>
          <div className={styles.slidediv} style={{backgroundImage:"url('https://images-eu.ssl-images-amazon.com/images/G/31/img16/Home-SA/SUPER_HD._UX3000_SX3000_CB280106814_.jpg')"}}></div>
          <div className={styles.slidediv} style={{backgroundImage:"url('https://images-eu.ssl-images-amazon.com/images/G/31/img16/men-apparel/gw/mencloth/pcbunkmodel._UX3000_SX3000_CB280125503_.jpg')"}}></div>
          <div className={styles.slidediv} style={{backgroundImage:"url('https://images-eu.ssl-images-amazon.com/images/G/31/img16/TV/ExtendedWarranty/9759_GW-Hero_Extended-warranty-TV-opt3A._UX3000_SX3000_CB280175996_.jpg')"}}></div>
          <div className={styles.slidediv} style={{backgroundImage:"url('https://images-eu.ssl-images-amazon.com/images/G/31/img16/MRP/MRP_PC_bunk._UX3000_SX3000_CB273147469_.jpg')"}}></div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
