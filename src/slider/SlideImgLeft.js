import React, { Component } from 'react';

export default class SlideImgLeft extends Component {
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
      <div className={this.props.scrolled ? 'd-none' : 'leftSlide'}>
        <img src='./images/slid3.png' alt='img' />
      </div>
    );
  }
}
