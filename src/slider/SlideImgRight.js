import React, { Component } from 'react';

export default class SlideImgRight extends Component {
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
    const urlYoutubeImag = 'https://www.youtube.com/embed/';
    const src = urlYoutubeImag;
    return (
      <div className={this.props.scrolled ? 'd-none' : 'rightSlide'}>
        <img src='./images/slid2.png' alt='img' />
      </div>
    );
  }
}
