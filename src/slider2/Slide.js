import React, { Component } from 'react';

export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      images: [],
      currentIndex: 0,
      translateValue: 0
    };
  }
  render() {
    const styles = {
      backgroundImage: `url(${this.props.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    };
    return <div className='slide' style={styles}></div>;
  }
}
